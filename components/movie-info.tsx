import { MOVIES_BASE_URL } from "../constants/constants";
import styles from "../styles/movie-info.module.css";

async function getMovie(id: string) {
  console.log(`Fetching movie data: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
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
        <h3>{movie.vote_average}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
