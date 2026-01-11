import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import { DBQState, endLoadingDBQ, setDBQ, setDBQS } from "./dbqSlice";

export const obtenerDBQSModulo = (mid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`dbq/obtener/${mid}`);
      const body = await resp.json();

      if (body.ok) {
        const { dbqs } = body;
        dispatch(setDBQS(dbqs));
        dispatch(endLoadingDBQ());
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

export const obtenerDBQQuestion = (qid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`dbq/obtener/question/${qid}`);
      const body = await resp.json();

      if (body.ok) {
        const { dbq } = body;
        dispatch(setDBQ(dbq));
        dispatch(endLoadingDBQ());
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

export const crearDBQ = (dbq: {
  cid: string;
  mid: string;
  bid: string;
  sid: string;
  qid: string;
  respuesta: string;
  estado: boolean;
}) => {
  return async (dispatch: AppDispatch, getState: any) => {
    const { dbqs } = getState().dbq;

    try {
      const resp = await fetchConToken(`dbq/crear/${dbq.qid}`, dbq, "POST");
      const body = await resp.json();

      if (body.ok) {
        const { dbqCreado, msg } = body;

        console.log(dbqCreado)

        const dbqEncontrado = dbqs.find(
          (item: DBQState) => item.qid === dbq.qid
        );

        if (dbqEncontrado) {
          const dbpsActualizada = dbqs.map((item: DBQState) =>
            item.qid !== dbq.qid ? item : dbqCreado
          );
          dispatch(setDBQS(dbpsActualizada));
          dispatch(setDBQ(dbqCreado));
          dispatch(endLoadingDBQ());
        } else {
          const dbqsActualizada = [...dbqs, dbqCreado];
          dispatch(setDBQS(dbqsActualizada));
          dispatch(setDBQ(dbqCreado));
          dispatch(endLoadingDBQ());
        }

        return { ok: true, msg: msg };
      } else {
        dispatch(endLoadingDBQ());
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
