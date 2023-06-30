import Album from "./components/Album"
import NewAlbumForm from "./components/NewAlbumForm"
import useAlbumCollection from "./hooks/useAlbumCollection"

export default function App() {
  const { albuns, addAlbum, removeAlbum } = useAlbumCollection()

  return (
    <div className="app">
      <h1>Biblioteca de Álbuns Musicais</h1>
      <NewAlbumForm addAlbum={addAlbum} />
      <div className="albuns">
        {albuns.length > 0 ?
        albuns.map((album) => (
          <Album
          key={album.id}
          title={album.title}
          cover={album.cover}
          artist={album.artist}
          year={album.year}
          onRemove={() => removeAlbum(album.id)}
        />))
        : (
          <h2 style={{ margin: "4rem auto"}}>Parece que ainda não tem nada aqui. Tente adicionar alguns álbuns.</h2>
        )}
      </div>
    </div>
  )
}

