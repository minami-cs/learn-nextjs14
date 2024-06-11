import { MOVIES_BASE_URL } from "../../../../constants/constants";

async function getMovie(id: string) {
  console.log(`Fetching movie data: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${MOVIES_BASE_URL}/${id}`).then((res) => res.json());

  return res;
}

async function getVideos(id: string) {
  console.log(`Fetching movie data: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${MOVIES_BASE_URL}/${id}/videos`).then((res) =>
    res.json()
  );

  return res;
}

// [id]는 url parameter를 받는다는 것을 의미한다.
// id는 원래 number만 받을 수 있게 해야 하지만 일단 string으로 처리
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // 병렬 처리를 위해서 Promise.all 사용
  console.log("start fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");

  return <h1>{movie.title}</h1>;
}
