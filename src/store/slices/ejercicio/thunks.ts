import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import {
  EjercicioState,
  endLoadingEjercicio,
  setEjercicios,
} from "./ejercicioSlice";

export const obtenerEjerciciosModulo = (mid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`ejercicio/obtener/${mid}`);
      const body = await resp.json();

      if (body.ok) {
        const { ejercicios } = body;
        dispatch(setEjercicios(ejercicios));
        dispatch(endLoadingEjercicio());
        return { ok: true, msg: body.msg };
      } else {
        return { ok: true, msg: body.msg };
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

export const obtenerEvaluacionesModulo = (mid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`ejercicio/obtener/evaluaciones/${mid}`);
      const body = await resp.json();

      if (body.ok) {
        const { ejercicios } = body;
        dispatch(setEjercicios(ejercicios));
        dispatch(endLoadingEjercicio());
        return { ok: true, msg: body.msg };
      } else {
        return { ok: true, msg: body.msg };
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

// Profesor

export const editarEjercicio = (ejercicio: EjercicioState) => {
  return async (dispatch: AppDispatch, getState: any) => {
    const { ejercicios } = getState().ejercicio;

    const ejerciciosActualizado = ejercicios.map((item: EjercicioState) =>
      item.eid === ejercicio.eid ? { ...item, activo: ejercicio.activo } : item
    );

    return dispatch(setEjercicios(ejerciciosActualizado));
  };
};
