import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../..";

import {
  endLoadingMatricula,
  MatriculaState,
  setMatricula,
  setMatriculas,
} from "./matriculaSlice";

export const obtenerMatriculas = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`matricula/obtener/`);
      const body = await resp.json();

      if (body.ok) {
        const { matriculas } = body;
        dispatch(setMatriculas(matriculas));
        dispatch(endLoadingMatricula());
        return { ok: true, msg: body.msg };
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

export const obtenerMatricula = (gid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`matricula/obtener/${gid}`);
      const body = await resp.json();

      if (body.ok) {
        const { matricula } = body;

        dispatch(setMatricula(matricula));
        dispatch(endLoadingMatricula());
        const payload: { ok: boolean; msg: string; matricula: MatriculaState } =
          {
            ok: true,
            msg: body.msg,
            matricula: matricula,
          };
        return payload;
      } else {
        const matricula = {
          mid: "",
          cid: "",
          gid: "",
          uid: "",
          rol: "Estudiante",
          online: false,
        };

        dispatch(setMatricula(matricula));
        dispatch(endLoadingMatricula());
        const payload: { ok: boolean; msg: string; matricula: MatriculaState } =
          {
            ok: false,
            msg: body.msg,
            matricula: matricula,
          };
        return payload;
      }
    } catch (error) {
      console.log(error);
      const matricula = {
        mid: "",
        cid: "",
        gid: "",
        uid: "",
        rol: "Estudiante",
        online: false,
      };

      dispatch(setMatricula(matricula));
      dispatch(endLoadingMatricula());
      const payload: { ok: boolean; msg: string; matricula: MatriculaState } = {
        ok: false,
        msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
        matricula: matricula,
      };
      return payload;
    }
  };
};

export const crearMatriculaCurso = (cid: string, gid: string) => {
  return async (dispatch: AppDispatch, getState: any) => {
    const { matriculas } = getState().matricula;

    try {
      // const resp = await fetchConToken(
      //   `matricula/crear/${cid}`,
      //   { cid: cid },
      //   "POST"
      // );
      const resp = await fetchConToken(
        `matricula/crear/${gid}`,
        { gid: gid, cid: cid },
        "POST"
      );
      const body = await resp.json();

      console.log(body)

      if (body.ok) {
        const { matricula, msg } = body;
        const matriculasActualizada = [...matriculas, matricula];
        dispatch(setMatriculas(matriculasActualizada));
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
