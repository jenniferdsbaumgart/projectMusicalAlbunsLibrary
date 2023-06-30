import { useState } from "react"

export default function useAlbumCollection() {
  const [albuns, setAlbuns] = useState(() => {
    const storedAlbuns = localStorage.getItem("obc-albuns-lib")
    if (!storedAlbuns) return []
    return JSON.parse(storedAlbuns)
  })

  const addAlbum = ({ title, cover, artist, year }) => {
    const id = Math.floor(Math.random() * 1000000)
    const album = { id, title, cover, artist, year }
    setAlbuns(state => {
      const newState = [...state, album]
      localStorage.setItem("obc-albuns-lib", JSON.stringify(newState))
      return newState
    })
  }

  const removeAlbum = (id) => {
    setAlbuns(state => {
      const newState = state.filter(album => album.id !== id)
      localStorage.setItem("obc-albuns-lib", JSON.stringify(newState))
      return newState
    })
  }

  return { albuns, addAlbum, removeAlbum }
}