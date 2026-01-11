
import { fetchCanvas } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { endLoadingModulo, setModulo, setModulos } from "./moduloSlice";

export const obtenerModulosCurso = (course_id: string) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`modulo/obtener/${course_id}`);
            const body = await resp.json();

            if (body.ok) {
                const { modulos } = body;
                dispatch(setModulos(modulos))
                dispatch(endLoadingModulo());
                const payload: { ok: boolean, msg: string } = { ok: false, msg: body.msg }
                return payload

            } else {
                dispatch(endLoadingModulo());
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

export const obtenerModuloCurso = (course_id: string, number: number) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`modulo/obtener/${course_id}/${number}`);
            const body = await resp.json();

            console.log(body)

            if (body.ok) {
                const { modulo } = body;
                dispatch(setModulo(modulo))
                dispatch(endLoadingModulo());
                const payload: { ok: boolean, msg: string } = { ok: true, msg: body.msg }
                return payload

            } else {
                dispatch(endLoadingModulo());
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