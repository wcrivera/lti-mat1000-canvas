
import { fetchCanvas } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { endLoadingClase, setClase, setClases } from "./claseSlice";

export const obtenerClasesCurso = (curso_id: string) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`clase/obtener/${curso_id}`);
            const body = await resp.json();

            if (body.ok) {
                const { clases } = body;
                dispatch(setClases(clases))
                dispatch(endLoadingClase());
                const payload: { ok: boolean, msg: string } = { ok: false, msg: body.msg }
                return payload

            } else {
                dispatch(endLoadingClase());
                const payload: { ok: boolean, msg: string } = { ok: false, msg: body.msg }
                return payload
            }
        } catch (error) {
            console.log(error)
            const payload: { ok: boolean, msg: string } = { ok: false, msg: 'Estamos teniendo problemas, vuelva a intentarlo más tarde' }
            return payload
        }
    }
}

export const obtenerClaseCurso = (course_id: string, number: number) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`clase/obtener/${course_id}/${number}`);
            const body = await resp.json();

            console.log(body)

            if (body.ok) {
                const { clase } = body;
                dispatch(setClase(clase))
                dispatch(endLoadingClase());
                const payload: { ok: boolean, msg: string } = { ok: true, msg: body.msg }
                return payload

            } else {
                dispatch(endLoadingClase());
                const payload: { ok: boolean, msg: string } = { ok: false, msg: body.msg }
                return payload
            }
        } catch (error) {
            console.log(error)
            const payload: { ok: boolean, msg: string } = { ok: false, msg: 'Estamos teniendo problemas, vuelva a intentarlo más tarde' }
            return payload
        }
    }
}