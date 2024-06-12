import { MOVIES_BASE_URL } from "../constants/constants";

async function getVideos(id: string) {
  console.log(`Fetching movie data: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
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

  return <h6>{JSON.stringify(videos)}</h6>;
}
