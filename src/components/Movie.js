import PropTypes from "prop-types";

function Movie({ coverImg, title, runtime, uploaded, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>Released Date: {uploaded}</p>
      <p>Runtime: {runtime} minutes</p>
      <ul>
        {genres.map(g => (
          <li key={g}>{g}</li> //각 영화의 장르를 유니크화시켜서
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  uploaded: PropTypes.arrayOf(PropTypes.string).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
