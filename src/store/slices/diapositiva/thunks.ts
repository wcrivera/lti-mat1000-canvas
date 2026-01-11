import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import {
  setDiapositiva,
  setDiapositivas,
  endLoadingDiapositiva,
} from "./diapositivaSlice";

export const obtenerDiapositivasModulo = (mid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`diapositiva/obtener/${mid}`);
      const body = await resp.json();

      if (body.ok) {
        const { diapositivas, msg } = body;
        dispatch(setDiapositivas(diapositivas));
        dispatch(endLoadingDiapositiva());
        return { ok: true, msg: msg };
      } else {
        return { ok: false, msg: body.msg };
      }
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
      };
    }
  };
};

export const obtenerDiapositivasBloque = (bid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`diapositiva/obtener/bloque/${bid}`);
      const body = await resp.json();

      if (body.ok) {
        const { diapositivas, msg } = body;
        dispatch(setDiapositivas(diapositivas));
        dispatch(endLoadingDiapositiva());
        return { ok: true, msg: msg, diapositivas: diapositivas };
      } else {
        return { ok: false, msg: body.msg };
      }
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
      };
    }
  };
};

export const obtenerDiapositivaSeccion = (sid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`diapositiva/obtener/seccion/${sid}`);
      const body = await resp.json();

      if (body.ok) {
        const { diapositiva, msg } = body;

        dispatch(setDiapositiva(diapositiva));
        dispatch(endLoadingDiapositiva());
        return { ok: true, msg: msg, diapositiva: diapositiva };
      } else {
        return { ok: false, msg: body.msg };
      }
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
      };
    }
  };
};
