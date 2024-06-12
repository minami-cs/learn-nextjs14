"use client"; // onClick event listener를 동작시키기 위해 클라이언트 컴포넌트로 선언

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: MovieProps) {
  // react-router처럼 router 제공
  const router = useRouter();
  const onClickMovie = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClickMovie} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
