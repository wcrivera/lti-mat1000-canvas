
import { fetchCanvas } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { endLoadingTema, setTema, setTemas } from "./temaSlice";

export const obtenerTemasCapitulo = (capitulo_id: string) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`tema/obtener/${capitulo_id}`);
            const body = await resp.json();

            console.log(body)

            if (body.ok) {
                const { temas } = body;
                dispatch(setTemas(temas))
                dispatch(endLoadingTema());
                const payload: { ok: boolean, msg: string } = { ok: false, msg: body.msg }
                return payload

            } else {
                dispatch(endLoadingTema());
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

export const obtenerTemaCurso = (course_id: string, number: number) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`tema/obtener/${course_id}/${number}`);
            const body = await resp.json();

            console.log(body)

            if (body.ok) {
                const { tema } = body;
                dispatch(setTema(tema))
                dispatch(endLoadingTema());
                const payload: { ok: boolean, msg: string } = { ok: true, msg: body.msg }
                return payload

            } else {
                dispatch(endLoadingTema());
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