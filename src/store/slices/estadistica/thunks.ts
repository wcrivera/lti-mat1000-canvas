// import { fetchConToken } from "../../../helpers/fetch";
// import { AppDispatch } from "../../store";
// import { DBQState } from "../dbq";
// import { QuestionState } from "../question";
// import { UsuarioState } from "../usuario";

// import { setEstadisticas } from "./estadisticaSlice";
// import { UsuarioState } from "../usuario/usuarioSlice";

// export const obtenerEstadisticaGrupo = (sid: string) => {
//   return async (dispatch: AppDispatch, getState: any) => {
//     const { matricula } = getState().matricula;
//     const { questions } = getState().question;

//     try {
//       const resp = await fetchConToken(
//         `estadistica/obtener/${matricula.gid}/${sid}`
//       );
//       const body = await resp.json();

//       if (body.ok) {
//         const { dbqs, usuarios } = body;
//         const estadisticas = questions
//           .filter((item: QuestionState) => item.sid === sid)
//           .map((question: QuestionState) => {
//             const data = usuarios.map((usuario: UsuarioState) => {
//               const dbq = dbqs.find(
//                 (dbq: DBQState) =>
//                   dbq.uid === usuario.uid && dbq.qid === question.qid
//               );
//               if (dbq) {
//                 return dbq.estado;
//               }
//             });
//             return {
//               numero: question.numero,
//               correctas: data.filter((item: boolean) => item === true).length,
//               incorrectas: data.filter((item: boolean) => item === false)
//                 .length,
//             };
//           });

//         dispatch(setEstadisticas(estadisticas));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// // type Props = {
// //   ok: boolean;
// //   usuarios: Array<UsuarioState>;
// //   dbqs: Array<DBQState>;
// // };

// // export const obtenerEstadisticaAlumno = (sid: string) => {
// //   return async (dispatch: AppDispatch, getState: any) => {
// //     const { matricula } = getState().matricula;

// //     try {
// //       const resp = await fetchConToken(
// //         `estadistica/obtener/${matricula.gid}/${sid}`
// //       );
// //       const body: Props = await resp.json();

// //       if (body.ok) {
// //         const { usuarios, dbqs } = body;

// //         return { ok: true, usuarios: usuarios, dbqs: dbqs };
// //       } else {
// //         return {
// //           ok: false,
// //           usuarios: [
// //             {
// //               uid: "",
// //               nombre: "",
// //               apellido: "",
// //               email: "",
// //               admin: false,
// //               activo: false,
// //             },
// //           ],
// //           dbqs: [
// //             {
// //               id: "",
// //               cid: "",
// //               mid: "",
// //               bid: "",
// //               sid: "",
// //               qid: "",
// //               uid: "",
// //               fecha: "",
// //               respuesta: "",
// //               estado: null,
// //             },
// //           ],
// //         };
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       return {
// //         ok: false,
// //         usuarios: [
// //           {
// //             uid: "",
// //             nombre: "",
// //             apellido: "",
// //             email: "",
// //             admin: false,
// //             activo: false,
// //           },
// //         ],
// //         dbqs: [
// //           {
// //             id: "",
// //             cid: "",
// //             mid: "",
// //             bid: "",
// //             sid: "",
// //             qid: "",
// //             uid: "",
// //             fecha: "",
// //             respuesta: "",
// //             estado: null,
// //           },
// //         ],
// //       };
// //     }
// //   };
// // };
