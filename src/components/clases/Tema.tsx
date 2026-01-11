import { useSelector } from 'react-redux';
import { BloqueState } from '../../store/slices/bloque';
import { Button } from '../ui/Button';
import { BookOpenText, Video, Calculator, CircleCheck, CircleX, Circle } from 'lucide-react'
import { RootState } from '../../store';
import { useEffect, useState } from 'react';
import { ScoreState } from '../../store/slices/quiz';

type Props = {
    tema: BloqueState
    actividades: Array<BloqueState>
    setModalVideo: (modal: { url: string; titulo: string; isOpen: boolean }) => void
    setModalQuiz: (modal: { content_id: number; titulo: string; isOpen: boolean }) => void
    setModalDiapositiva: (modal: { content_id: number; titulo: string; url: string; isOpen: boolean }) => void
}

const Temas = ({ tema, actividades, setModalVideo, setModalQuiz, setModalDiapositiva }: Props) => {

    const [score, setScore] = useState<ScoreState>({ id: 0, name: '', course_id: 0, quiz_id: 0, user_id: 0, score: 0 });

    const { scores } = useSelector(
        (state: RootState) => state.quiz
    );

    useEffect(() => {
        const score = scores.find(score => score.quiz_id === actividades[2].content_id)
        if (score) {
            setScore(score)
        }
    }, [scores, tema.content_id])

    return (
        <div className="p-4 sm:px-6 border-t border-gray-200">
            <p className="text-sm text-chapter-600">{tema.title}</p>
            <div className="flex flex-wrap justify-start items-center">
                <div className="w-full lg:w-1/5 sm:w-1/2 p-2">
                    <div className="flex items-center">
                        <Button
                            // href={actividades.length > 0 ? `${actividades[0].external_url}` : '#'}
                            // target="_blank"
                            onClick={() => setModalDiapositiva({ content_id: actividades.length > 0 ? actividades[0].content_id : 0, titulo: tema.title, url: actividades.length > 0 ? actividades[0].external_url : '', isOpen: true })}
                            icon={BookOpenText}
                            variant="warning"
                            size="sm"
                        />
                        <div className="ml-3 text-sm text-chapter-600">Diapositiva</div>
                    </div>
                </div>
                <div className="w-full lg:w-1/5 sm:w-1/2 p-2">
                    <div className="flex items-center">
                        <Button
                            onClick={() => setModalVideo({ url: actividades.length > 1 ? actividades[1].title : '', titulo: tema.title, isOpen: true })}
                            icon={Video}
                            variant="danger"
                            size="sm"
                        />
                        <div className="ml-3 text-sm text-chapter-600">Video</div>
                    </div>
                </div>
                <div className="w-full lg:w-1/5 sm:w-1/2 p-2">
                    <div className="flex items-center">
                        <Button
                            onClick={() => setModalQuiz({ content_id: actividades.length > 2 ? actividades[2].content_id : 0, titulo: tema.title, isOpen: true })}
                            icon={Calculator}
                            variant="primary"
                            size="sm"
                        />
                        <div className="ml-3 text-sm text-chapter-600">Ejercicio</div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 sm:w-1/2 p-2 flex justify-end ">
                    {
                        score.id !== 0 ? (score.score === 0 ? (
                            <CircleX className="text-red-500" />
                        ) : (
                            <CircleCheck className="text-green-500" />
                        )) : (
                            <Circle className="text-gray-500" />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Temas