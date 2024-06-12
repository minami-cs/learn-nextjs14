import { MOVIES_BASE_URL } from "../constants/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  // error handling을 위해서 일부러 에러 발생
  // throw new Error("something broke...");
  const res = await fetch(`${MOVIES_BASE_URL}/${id}/videos`).then((res) =>
    res.json()
  );

  return res;
}

// 영화 영상만 렌더링하는 컴포넌트
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
