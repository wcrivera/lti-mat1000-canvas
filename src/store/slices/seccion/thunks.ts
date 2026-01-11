
import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { endLoadingSeccion, setSecciones } from './seccionSlice';

export const obtenerSeccionesModulo = (mid: string) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchConToken(`seccion/obtener/${mid}`);
            const body = await resp.json();

            if (body.ok) {
                const { secciones } = body;
                
                dispatch(setSecciones(secciones));
                dispatch(endLoadingSeccion())
                return 
            }
        } catch (error) {
            console.log(error)
        }
    }
}