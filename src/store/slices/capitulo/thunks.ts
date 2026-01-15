
import { fetchCanvas } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { endLoadingCapitulo, setCapitulo, setCapitulos } from "./capituloSlice";

export const obtenerCapitulosCurso = (course_id: string) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`capitulo/obtener/${course_id}`);
            const body = await resp.json();

            if (body.ok) {
                const { capitulos } = body;
                dispatch(setCapitulos(capitulos))
                dispatch(endLoadingCapitulo());
                const payload: { ok: boolean, msg: string } = { ok: false, msg: body.msg }
                return payload

            } else {
                dispatch(endLoadingCapitulo());
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

export const obtenerCapituloCurso = (course_id: string, number: number) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`capitulo/obtener/${course_id}/${number}`);
            const body = await resp.json();

            console.log(body)

            if (body.ok) {
                const { capitulo } = body;
                dispatch(setCapitulo(capitulo))
                dispatch(endLoadingCapitulo());
                const payload: { ok: boolean, msg: string } = { ok: true, msg: body.msg }
                return payload

            } else {
                dispatch(endLoadingCapitulo());
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