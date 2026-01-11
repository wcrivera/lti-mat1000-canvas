
import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { endLoadingAyudantia, setAyudantias } from "./ayudantiaSlice";

export const obtenerAyudantiasModulo = (course_id: number, module_id: number) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchConToken(`ayudantia/obtener/${course_id}/${module_id}`);
            const body = await resp.json();

            console.log(body)

            if (body.ok) {
                const { ayudantias } = body;
                dispatch(setAyudantias(ayudantias));
                dispatch(endLoadingAyudantia());
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