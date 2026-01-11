
import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { endLoadingNoticia, setNoticias } from "./noticiaSlice";

export const obtenerNoticiasCurso = (cid: string) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchConToken(`noticia/obtener/${cid}`);
            const body = await resp.json();

            if (body.ok) {
                const { noticias } = body;
                dispatch(setNoticias(noticias))
                dispatch(endLoadingNoticia())
                return { ok: true, msg: body.msg, noticias }
            } else {
                return { ok: false, msg: body.msg }
            }
        } catch (error) {
            console.log(error)
            return { ok: false, msg: 'Estamos teniendo problemas, vuelva a intentarlo más tarde' }
        }
    }
}