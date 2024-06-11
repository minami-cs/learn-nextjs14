import { MOVIES_BASE_URL } from "../constants/constants";

async function getMovie(id: string) {
  console.log(`Fetching movie data: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${MOVIES_BASE_URL}/${id}`).then((res) => res.json());

  return res;
}

// 영화 정보만 렌더링하는 컴포넌트
export default async function Movieinfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return <h6>{JSON.stringify(movie)}</h6>;
}
