import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { usuarioSlice } from "./slices/usuario";

import { cursoSlice } from "./slices/curso/cursoSlice";
import { capituloSlice } from "./slices/capitulo";
import { claseSlice } from "./slices/clase";
import { temaSlice } from "./slices/tema";








import { moduloSlice } from "./slices/modulo";
import { itemSlice } from "./slices/item/itemSlice";
import { paginaSlice } from "./slices/pagina/paginaSlice";






import { matriculaSlice } from "./slices/matricula";
import { grupoSlice } from "./slices/grupo";

import { noticiaSlice } from "./slices/noticia";

import { quizSlice } from "./slices/quiz";

import { bloqueSlice } from "./slices/bloque";
import { seccionSlice } from "./slices/seccion";

import { diapositivaSlice } from "./slices/diapositiva";
import { videoSlice } from "./slices/video/videoSlice";
import { questionSlice } from "./slices/question/questionSlice";

import { ayudantiaSlice } from "./slices/ayudantia";
import { ejercicioSlice } from "./slices/ejercicio";
import { preguntaSlice } from "./slices/pregunta";

import { dbpSlice } from "./slices/dbp";
import { dbqSlice } from "./slices/dbq/dbqSlice";

import { activoSlice } from "./slices/activo/activoSlice";

import { estadisticaSlice } from './slices/estadistica/estadisticaSlice';

import { socketSlice } from "./slices/socket/socketSlice";

export const store = configureStore({
  reducer: {
    usuario: usuarioSlice.reducer,
    
    curso: cursoSlice.reducer,
    capitulo: capituloSlice.reducer,
    clase: claseSlice.reducer,
    tema: temaSlice.reducer,






    
    modulo: moduloSlice.reducer,
    item: itemSlice.reducer,
    pagina: paginaSlice.reducer,
    


    matricula: matriculaSlice.reducer,
    grupo: grupoSlice.reducer,

    noticia: noticiaSlice.reducer,

    bloque: bloqueSlice.reducer,
    seccion: seccionSlice.reducer,

    diapositiva: diapositivaSlice.reducer,
    video: videoSlice.reducer,
    question: questionSlice.reducer,

    ayudantia: ayudantiaSlice.reducer,
    ejercicio: ejercicioSlice.reducer,
    pregunta: preguntaSlice.reducer,

    dbp: dbpSlice.reducer,
    dbq: dbqSlice.reducer,

    activo: activoSlice.reducer,

    estadistica: estadisticaSlice.reducer,

    socket: socketSlice.reducer,

    quiz: quizSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
