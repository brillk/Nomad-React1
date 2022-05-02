import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }; //정보를 가져왔으니 로딩을 끊어야 한다

  useEffect(() => {
    getMovies();
  }, []); //리스트가 보이게 map을 쓰자 / array 변수에 각각 적용

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map(movie => (
            <Movie
              id={movie.id}
              key={movie.id} //key는map안에 component를 render할떄 사용
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.description_intro}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
