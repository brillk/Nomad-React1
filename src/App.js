import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.2&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }; //정보를 가져왔으니 로딩을 끊어야 한다
  useEffect(() => {
    getMovies();
  }, []); //리스트가 보이게 map을 쓰자 / array 변수에 각각 적용
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map(movie => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>Released Date: {movie.torrents[0].date_uploaded}</p>
              <p>Runtime: {movie.runtime} minutes</p>
              <ul>
                {movie.genres.map(g => (
                  <li key={g}>{g}</li> //각 영화의 장르를 유니크화시켜서
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
