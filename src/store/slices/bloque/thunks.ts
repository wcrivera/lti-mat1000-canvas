
import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../..";

import { endLoadingBloque, setBloques } from "./bloqueSlice";

export const obtenerBloquesModulo = (cid: string, mid: string) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchConToken(`bloque/obtener/${cid}/${mid}`);
            const body = await resp.json();

            if (body.ok) {
                const { bloques } = body;
                dispatch(setBloques(bloques))
                dispatch(endLoadingBloque());
                return 
            }
        } catch (error) {
            console.log(error)
        }
    }
}