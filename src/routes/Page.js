import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]); // useEffect 두번쨰 인자는 getMovie가 불릴때 새로운 페이지에 재생성된다
  return (
    <div>
      <img src={movie.medium_cover_image} />
      <h1>{movie.title_long}</h1>
      <span> {movie.description_intro}</span>
      <p></p>
    </div>
  );
}
<script
  src="https://kit.fontawesome.com/de9827cc24.js"
  crossorigin="anonymous"
></script>;
export default Detail;
