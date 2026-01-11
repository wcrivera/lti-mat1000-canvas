import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch, RootState } from "../../store";

import { endLoadingQuiz, setScore, setScores } from "./quizSlice";

export const obtenerScoreQuizzes = (curso_id: string, user_id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`quiz/obtener_scores/${curso_id}/${user_id}`);
      const body = await resp.json();

      if (body.ok) {
        const { scores } = body;
        dispatch(setScores(scores));
        dispatch(endLoadingQuiz());
        return { ok: true, msg: body.msg, score: scores };
      } else {
        dispatch(setScores([{ id: 0, name: '', course_id: 0, quiz_id: 0, user_id: 0, score: 0 }]));
        dispatch(endLoadingQuiz());
        return { ok: true, msg: body.msg, score: [{ id: 0, name: '', course_id: 0, quiz_id: 0, user_id: 0, score: 0 }] };
      }
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
      };
    }
  };
};

export const obtenerScoreQuiz = (curso_id: string, quiz_id: string, user_id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`quiz/obtener/${curso_id}/${quiz_id}/${user_id}`);
      const body = await resp.json();

      if (body.ok) {
        const { score } = body;
        dispatch(endLoadingQuiz());
        return { ok: true, msg: body.msg, score: score };
      } else {
        dispatch(endLoadingQuiz());
        return { ok: true, msg: body.msg, score: null };
      }
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
      };
    }
  };
};


export const enviarRespuestasQuiz = (user_id: string, curso_id: string, quiz_id: string, question_id: string, answer_id: string, weight: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {

    const { scores } = getState().quiz;
    try {
      const resp = await fetchConToken(`quiz/crear/${quiz_id}`, { user_id: user_id, curso_id: curso_id, quiz_id: quiz_id, question_id: question_id, answer_id: answer_id, weight: weight }, "POST");
      const body = await resp.json();

      if (body.ok) {
        const { score } = body;
        const updatedScores = scores.map(s => s.quiz_id === score.quiz_id && s.user_id === score.user_id ? score : s);
        dispatch(endLoadingQuiz());
        dispatch(setScore(score));
        dispatch(setScores(updatedScores));
        return { ok: true, msg: body.msg };
      } else {
        return { ok: true, msg: body.msg };
      }
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
      };
    }
  };
};



// export const obtenerQuestionSeccion = (qid: string) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const resp = await fetchConToken(`question/obtener/seccion/${qid}`);
//       const body = await resp.json();

//       if (body.ok) {
//         const { question } = body;
//         dispatch(setQuestion(question));
//         dispatch(endLoadingQuestion());
//         return { ok: true, msg: body.msg };
//       } else {
//         return { ok: true, msg: body.msg };
//       }
//     } catch (error) {
//       console.log(error);
//       return {
//         ok: false,
//         msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
//       };
//     }
//   };
// };

// export const obtenerQuestionsSeccion = (sid: string) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const resp = await fetchConToken(
//         `question/obtener/questions/seccion/${sid}`
//       );
//       const body = await resp.json();

//       console.log(body)

//       if (body.ok) {
//         const { questions } = body;
//         dispatch(setQuestions(questions));
//         dispatch(endLoadingQuestion());
//         return { ok: true, msg: body.msg };
//       } else {
//         return { ok: true, msg: body.msg };
//       }
//     } catch (error) {
//       console.log(error);
//       return {
//         ok: false,
//         msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
//       };
//     }
//   };
// };
