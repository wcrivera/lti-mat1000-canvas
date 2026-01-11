
import { fetchCanvas } from "../../../helpers/fetch";
import { AppDispatch } from "../..";

import { endLoadingItem, setItems } from "./itemSlice";

export const obtenerItemsCurso = (course_id: string) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`item/obtener/${course_id}`);
            const body = await resp.json();

            if (body.ok) {
                const { items } = body;
                dispatch(setItems(items))
                dispatch(endLoadingItem());
                return
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const obtenerItemsModulo = (cid: string, mid: string) => {

    return async (dispatch: AppDispatch) => {

        try {
            const resp = await fetchCanvas(`item/obtener/${cid}/${mid}`);
            const body = await resp.json();

            if (body.ok) {
                const { items } = body;
                dispatch(setItems(items))
                dispatch(endLoadingItem());
                return
            }
        } catch (error) {
            console.log(error)
        }
    }
}