
import { fetchCanvas } from "../../../helpers/fetch";
import { AppDispatch } from "../..";

import { endLoadingPagina, setPaginas } from "./paginaSlice";

export const obtenerPaginasCurso = (course_id: number) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`pagina/obtener/${course_id}`);
            const body = await resp.json();

            if (body.ok) {
                const { paginas } = body;
                dispatch(setPaginas(paginas))
                dispatch(endLoadingPagina());
                return
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const obtenerPaginasModulo = (cid: string, mid: string) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`pagina/obtener/${cid}/${mid}`);
            const body = await resp.json();

            if (body.ok) {
                const { paginas } = body;
                dispatch(setPaginas(paginas))
                dispatch(endLoadingPagina());
                return
            }
        } catch (error) {
            console.log(error)
        }
    }
}