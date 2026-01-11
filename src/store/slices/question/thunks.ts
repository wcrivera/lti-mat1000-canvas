import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { endLoadingQuestion, setQuestions } from "./questionSlice";

export const obtenerQuestionsModulo = (mid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`question/obtener/${mid}`);
      const body = await resp.json();

      if (body.ok) {
        const { questions } = body;
        dispatch(setQuestions(questions));
        dispatch(endLoadingQuestion());
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

export const obtenerQuestionSeccion = (cid: string, sid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`question/obtener/${cid}/${sid}`);
      const body = await resp.json();

      if (body.ok) {
        const { questions } = body;
        dispatch(setQuestions(questions));
        dispatch(endLoadingQuestion());
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

export const obtenerQuestionsSeccion = (sid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(
        `question/obtener/questions/seccion/${sid}`
      );
      const body = await resp.json();

      if (body.ok) {
        const { questions } = body;
        dispatch(setQuestions(questions));
        dispatch(endLoadingQuestion());
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
