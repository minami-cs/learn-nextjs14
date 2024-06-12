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
      {/* prefetch 속성을 추가해두면 NextJS에서 미리 스크롤을 감지하여 해당 페이지들을 fetching한다. */}
      <Link href={`/movies/${id}`} prefetch>
        {title}
      </Link>
    </div>
  );
}
