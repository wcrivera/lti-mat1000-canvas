import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { endLoadingDBP, setDBPS, DBPState } from "./dbpSlice";

export const obtenerDBPSModulo = (mid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`dbp/obtener/${mid}`);
      const body = await resp.json();

      if (body.ok) {
        const { dbps } = body;
        dispatch(setDBPS(dbps));
        dispatch(endLoadingDBP());
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

export const crearDBP = (dbp: {
  cid: string;
  mid: string;
  pid: string;
  respuesta: string;
  estado: boolean;
}) => {
  return async (dispatch: AppDispatch, getState: any) => {
    const { dbps } = getState().dbp;

    try {
      const resp = await fetchConToken(`dbp/crear/${dbp.pid}`, dbp, "POST");
      const body = await resp.json();

      if (body.ok) {
        const { dbpCreado, msg } = body;

        const dbpEncontrado = dbps.find(
          (item: DBPState) => item.pid === dbp.pid
        );

        if (dbpEncontrado) {
          const dbpsActualizada = dbps.map((item: DBPState) =>
            item.pid !== dbp.pid ? item : dbpCreado
          );
          dispatch(setDBPS(dbpsActualizada));
          dispatch(endLoadingDBP());
        } else {
          const dbpsActualizada = [...dbps, dbpCreado];
          dispatch(setDBPS(dbpsActualizada));
          dispatch(endLoadingDBP());
        }

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
