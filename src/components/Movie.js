import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, runtime, uploaded, genres }) {
  
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
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
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  uploaded: PropTypes.arrayOf(PropTypes.string).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
