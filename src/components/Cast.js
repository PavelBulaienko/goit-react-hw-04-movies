import propTypes from 'prop-types'

const Cast = ({ cast }) => (
  <ul>
    {cast.map(({ id, profile_path, name, character }) => (
      <li key={id}>
        <img
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt={name}
        />
        <p>Name: {name}</p>
        <p>Character: {character}</p>
      </li>
    ))}
  </ul>
)

Cast.propTypes = {
  cast: propTypes.array,
}

export default Cast
