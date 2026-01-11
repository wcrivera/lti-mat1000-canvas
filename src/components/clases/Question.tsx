import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { obtenerQuestionSeccion, startLoadingQuestion } from '../../store/slices/question';
import { useEffect, useState } from 'react';
import Latex from 'react-latex-next';
import { Circle, Target, CircleCheck, CircleX } from 'lucide-react';
import { Button } from '../ui/Button';
import { enviarRespuestasQuiz, setScore } from '../../store/slices/quiz';

type Props = {
    content_id: number
}

const Question = ({ content_id }: Props) => {

    const dispatch = useDispatch<AppDispatch>();

    const { score } = useSelector(
        (state: RootState) => state.quiz
    );

    const { questions, isLoading } = useSelector(
        (state: RootState) => state.question
    );

    const [alternativa, setAlternativa] = useState({ id: 0, text: '', weight: 0 });


    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const courseIdParam = params.get('course_id');
        // const userIdParam = params.get('user_id');
        if (content_id !== 0) {
            dispatch(startLoadingQuestion())
            dispatch(obtenerQuestionSeccion(courseIdParam || "", content_id.toString()));
        }
    }, [dispatch, content_id])

    useEffect(() => {
      return () => {
        dispatch(setScore({ id: 0, name: '', course_id: 0, quiz_id: 0, user_id: 0, score: 0 }));
      }
    }, [dispatch])
    

    if (isLoading) {
        return (
            <div className="min-h-[400px] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Cargando la pregunta...</p>
                </div>
            </div>
        );
    }

    const handleSendAnswer = async () => {
        setLoading(true);
        const quiz_id = content_id.toString();
        const question_id = questions[0].assessment_question_id.toString();
        const answer_id = alternativa.id.toString();

        // Lógica para enviar la respuesta seleccionada

        const params = new URLSearchParams(window.location.search);
        const course_id = params.get('course_id');
        const user_id = params.get('user_id');
        dispatch(enviarRespuestasQuiz(user_id || "", course_id || "", quiz_id, question_id, answer_id, alternativa.weight.toString()))
    }

    return questions.map((question) => {
        const { answers } = question;
        return (
            <div key={question.id}>
                <div className="pb-10 pt-6 border-b border-gray-200">
                    <Latex>{question.question_text}</Latex>
                </div>
                {
                    answers.map((answer) => {
                        return (
                            <div key={answer.id} className="flex items-center py-4 border-b border-gray-200">
                                <div className="w-6 h-6 flex items-center justify-center mr-4">
                                    <Button
                                        disabled={loading}
                                        onClick={() => setAlternativa({ id: answer.id, text: answer.text, weight: answer.weight })}
                                        icon={alternativa.id === answer.id ? Target : Circle}
                                        variant="ghost"
                                        size="sm"
                                        rounded
                                    />
                                </div>
                                <div className="text-chapter-600">
                                    <Latex>{answer.text}</Latex>
                                </div>
                                <div className="ml-auto">
                                    {
                                        alternativa.id === answer.id && score.user_id !== 0 && score.score !== 0 &&
                                        <CircleCheck className="text-green-500" />
                                    }

                                    {
                                        alternativa.id === answer.id && score.user_id !== 0 && score.score === 0 &&
                                        <CircleX className="text-red-500" />
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className='mt-4 flex justify-end'>
                    <Button
                        disabled={alternativa.id === 0 || loading}
                        onClick={handleSendAnswer}
                        variant="primary"
                        size="sm"
                        rounded
                    >
                        Entregar
                    </Button>
                </div>
            </div>
        )
    });
}

export default Question