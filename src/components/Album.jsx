import PropTypes from "prop-types"

Album.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  artist: PropTypes.string,
  year: PropTypes.number,
  onRemove: PropTypes.func
}


export default function Album({ title, cover, artist, year, onRemove}) {
  return (
    <div>
      <img src={cover} alt="Capa do Álbum" />
      <div>
        <h2>{title}</h2>
        <h4>{artist}</h4>
        <h5>{year}</h5>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  )
}