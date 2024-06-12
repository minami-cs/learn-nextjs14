import { MOVIES_BASE_URL } from "../constants/constants";
import styles from "../styles/movie-info.module.css";

async function getMovie(id: string) {
  const res = await fetch(`${MOVIES_BASE_URL}/${id}`).then((res) => res.json());

  return res;
}

// 영화 정보만 렌더링하는 컴포넌트
export default async function Movieinfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.genres}>
          {movie.genres.map((genre) => {
            return (
              <p key={genre.id} className={styles.genre}>
                {genre.name}
              </p>
            );
          })}
        </div>
        <h3>
          ⭐️ {movie.vote_average.toFixed(1)}{" "}
          <span className={styles.votes}>/ {movie.vote_count} votes</span>
        </h3>
        <p className={styles.overview}>{movie.overview}</p>
        <p className={styles.release}>Release Date: {movie.release_date}</p>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
