import { fetchConToken } from "../../../helpers/fetch";
import { AppDispatch } from "../../store";

import {
  ActivoState,
  endLoadingActivo,
  setActivo,
  setActivos,
} from "./activoSlice";

export const obtenerActivosModulo = (mid: string, gid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`activo/obtener/${mid}/${gid}`);
      const body = await resp.json();

      if (body.ok) {
        const { activos } = body;
        dispatch(setActivos(activos));
        dispatch(endLoadingActivo());
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

export const obtenerActivoSeccion = (sid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`activo/obtener/seccion/${sid}`);
      const body = await resp.json();

      if (body.ok) {
        const { activo } = body;
        dispatch(setActivo(activo));
        dispatch(endLoadingActivo());
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

export const crearActivo = (activo: {
  gid: string;
  cid: string;
  mid: string;
  bid: string;
  sid: string;
  diapositiva: { activo: boolean };
  video: { activo: boolean };
  pregunta: { activo: boolean; multiple: boolean };
}) => {
  return async (dispatch: AppDispatch, getState: any) => {
    const { activos } = getState().activo;

    console.log(activo);

    try {
      const resp = await fetchConToken(
        `activo/crear/${activo.sid}`,
        activo,
        "POST"
      );
      const body = await resp.json();

      if (body.ok) {
        const { activoCreado, msg } = body;
        const activosActualizado = [...activos, activoCreado];
        dispatch(setActivos(activosActualizado));
        dispatch(setActivo(activoCreado));
        return { ok: true, msg: msg };
      } else {
        dispatch(setActivo(body.activoCreado));
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

export const editarActivo = (activo: ActivoState) => {
  return async (dispatch: AppDispatch, getState: any) => {
    const { activos } = getState().activo;

    const activoEncontrado = activos.find(
      (item: ActivoState) => item.id === activo.id
    );

    if (activoEncontrado) {
      console.log("editar activo");
      const activosActualizado = activos.map((item: ActivoState) =>
        item.id === activo.id ? activo : item
      );
      // console.log(activosActualizado)
      return dispatch(setActivos(activosActualizado));
    }

    console.log("crear activo");
    const activosActualizado = [...activos, activo];
    // console.log(activosActualizado);
    return dispatch(setActivos(activosActualizado));
  };
};

// export const editarActivo = (activo: any) => {
//   return async (dispatch: AppDispatch, getState: any) => {
//     const { activos } = getState().activo;

//     console.log(activo)

//     // try {
//     //   const resp = await fetchConToken(`activo/editar/${activo.id}`, activo, "PUT");
//     //   const body = await resp.json();

//     //   if (body.ok) {
//     //     const { activoEditado, msg } = body;

//     //     const activosActualizado = activos.map((item: ActivoState) => item.id === activo.id ? activoEditado : item)
//     //     dispatch(setActivos(activosActualizado));
//     //     return { ok: true, msg: msg };
//     //   } else {
//     //     return { ok: false, msg: body.msg };
//     //   }
//     // } catch (error) {
//     //   console.log(error);
//     //   return {
//     //     ok: false,
//     //     msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
//     //   };
//     // }
//   };
// };

// export const editarActivo = (activo: {
//   id: string;
//   gid: string;
//   cid: string;
//   mid: string;
//   bid: string;
//   sid: string;
//   diapositiva: { activo: boolean }
//   video: { activo: boolean }
//   pregunta: { activo: boolean, multiple: boolean }
// }) => {
//   return async (dispatch: AppDispatch, getState: any) => {
//     const { activos } = getState().activo;

//     try {
//       const resp = await fetchConToken(`activo/editar/${activo.id}`, activo, "PUT");
//       const body = await resp.json();

//       if (body.ok) {
//         const { activoEditado, msg } = body;

//         const activosActualizado = activos.map((item: ActivoState) => item.id === activo.id ? activoEditado : item)
//         dispatch(setActivos(activosActualizado));
//         return { ok: true, msg: msg };
//       } else {
//         return { ok: false, msg: body.msg };
//       }
//     } catch (error) {
//       console.log(error);
//       return {
//         ok: false,
//         msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
//       };
//     }
//   };
// };

// type Data = {
//   ok: boolean
//   msg: string
//   activo: ActivoState
// }

// export const editarActivo = (data: ActivoState) => {

//   return (dispatch: AppDispatch, getState: any) => {
//     const { activos } = getState().activo;

//     console.log(data)

//     // try {
//     //   // const resp = await fetchConToken(`activo/editar/${activo.id}`, activo, "PUT");
//     //   // const body = await resp.json();

//     //   // if (body.ok) {
//     //   //   const { activoEditado, msg } = body;

//     //   //   const activosActualizado = activos.map((item: ActivoState) => item.id === activo.id ? activoEditado : item)
//     //   //   dispatch(setActivos(activosActualizado));
//     //   //   return { ok: true, msg: msg };
//     //   // } else {
//     //   //   return { ok: false, msg: body.msg };
//     //   // }
//     // } catch (error) {
//     //   console.log(error);
//     //   return {
//     //     ok: false,
//     //     msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
//     //   };
//     // }
//   };
// };
