import { AppDispatch } from "../../store";
import {
  fetchCanvas,
} from "../../../helpers/fetch";
import { endLoadingUsuario, setUsuario } from "./usuarioSlice";

export const obtenerUsuario = (course_id: string, user_id: string) => {

  return async (dispatch: AppDispatch) => {

    try {
      const resp = await fetchCanvas(`usuario/obtener/${course_id}/${user_id}`);
      const body = await resp.json();

      if (body.ok) {
        const { usuario } = body;
        dispatch(setUsuario(usuario))
        dispatch(endLoadingUsuario());
        return
      }
    } catch (error) {
      console.log(error)
    }
  }
}