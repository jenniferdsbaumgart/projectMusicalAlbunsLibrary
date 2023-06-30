import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewAlbumForm.propTypes = {
  addAlbum: PropTypes.func
}

export default function NewAlbumForm({ addAlbum }) {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [year, setYear] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addAlbum({ title, cover, artist, year })
    setTitle("")
    setCover("")
    setArtist("")
    setYear("")
  }

  return (
		<form onSubmit={handleSubmit}>
      <TextInput id="title" label="Título" value={title} onChange={(ev) => setTitle(ev.target.value)} />
      <TextInput id="cover" label="Link da capa" value={cover} onChange={(ev) => setCover(ev.target.value)} />
      <TextInput id="artist" label="Artista" value={artist} onChange={(ev) => setArtist(ev.target.value)} />
      <TextInput id="year" label="Ano" value={year} onChange={(ev) => setYear(ev.target.value)} />
      <button>Adicionar</button>
    </form>
  )
}