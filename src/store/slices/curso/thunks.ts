import { fetchCanvas } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { endLoadingCurso, setCurso } from "./cursoSlice";

export const obtenerCurso = (course_id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchCanvas(`curso/obtener/${course_id}`);
      const body = await resp.json();

      if (body.ok) {
        const { curso } = body;
        dispatch(setCurso(curso))
        dispatch(endLoadingCurso());
        const payload: { ok: boolean, msg: string } = { ok: false, msg: body.msg }
        return payload

      } else {
        dispatch(endLoadingCurso());
        const payload: { ok: boolean, msg: string } = { ok: false, msg: body.msg }
        return payload
      }
    } catch (error) {
      console.log(error)
      dispatch(endLoadingCurso());
      const payload: { ok: boolean, msg: string } = { ok: false, msg: 'Estamos teniendo problemas, vuelva a intentarlo más tarde' }
      return payload
    }
  }
}