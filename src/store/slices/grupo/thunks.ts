
import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../..";

import { endLoadingGrupo, setGrupos } from "./grupoSlice";

export const obtenerGrupos = () => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchConToken(`grupo/obtener`);
            const body = await resp.json();

            if (body.ok) {
                const { grupos } = body;
                dispatch(setGrupos(grupos))
                dispatch(endLoadingGrupo());
                return { ok: true, msg: body.msg, grupos }
            } else {
                return { ok: false, msg: body.msg }
            }
        } catch (error) {
            console.log(error)
            return { ok: false, msg: 'Estamos teniendo problemas, vuelva a intentarlo más tarde' }
        }
    }
}