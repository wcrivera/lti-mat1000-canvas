import { fetchConToken } from "../../../helpers/fetch"
import { AppDispatch } from "../../store"

import {
  setVideo,
  setVideos,
  endLoadingVideo,
} from "./videoSlice"

export const obtenerVideosModulo = (mid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`video/obtener/${mid}`)
      const body = await resp.json()

      if (body.ok) {
        const { videos, msg } = body;
        dispatch(setVideos(videos))
        dispatch(endLoadingVideo())
        return { ok: true, msg: msg }
      } else {
        return { ok: false, msg: body.msg }
      }
    } catch (error) {
      console.log(error)
      return {
        ok: false,
        msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
      }
    }
  }
}

export const obtenerVideoSeccion = (sid: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchConToken(`video/obtener/seccion/${sid}`)
      const body = await resp.json()

      if (body.ok) {
        const { video, msg } = body

        dispatch(setVideo(video))
        dispatch(endLoadingVideo())
        return { ok: true, msg: msg }
      } else {
        return { ok: false, msg: body.msg }
      }
    } catch (error) {
      console.log(error)
      return {
        ok: false,
        msg: "Estamos teniendo problemas, vuelva a intentarlo más tarde",
      }
    }
  }
}