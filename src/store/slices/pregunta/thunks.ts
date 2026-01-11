import { fetchConToken } from "../../../helpers/fetch"
import { AppDispatch } from "../../store"

import {
  endLoadingPregunta,
  setPreguntas,
} from "./preguntaSlice"

export const obtenerPreguntasModulo = (mid: string) => {

  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`pregunta/obtener/${mid}`);
      const body = await resp.json();

      if (body.ok) {
        const { preguntas } = body;
        dispatch(setPreguntas(preguntas));
        dispatch(endLoadingPregunta());
        return { ok: true, msg: body.msg }
      } else {
        return { ok: true, msg: body.msg }
      }
    } catch (error) {
      console.log(error)
      return { ok: false, msg: 'Estamos teniendo problemas, vuelva a intentarlo más tarde' }
    }
  }
}

export const obtenerPreguntasEvaluacionModulo = (mid: string) => {

  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`pregunta/obtener/evaluacion/${mid}`);
      const body = await resp.json();

      if (body.ok) {
        const { preguntas } = body;
        dispatch(setPreguntas(preguntas));
        dispatch(endLoadingPregunta());
        return { ok: true, msg: body.msg }
      } else {
        return { ok: true, msg: body.msg }
      }
    } catch (error) {
      console.log(error)
      return { ok: false, msg: 'Estamos teniendo problemas, vuelva a intentarlo más tarde' }
    }
  }
}