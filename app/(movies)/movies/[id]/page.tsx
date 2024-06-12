// Suspense는 react에서 제공하는 컴포넌트이다.
import { Suspense } from "react";
import Movieinfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface Params {
  params: { id: string };
}

// 동적 metadata 생성하는 함수
// 처음에는 데이터 페칭이 이루어지지만 두 번째 호출할 때는 이미 캐시된 데이터를 가져오므로 두 번 호출하지 않는다
export async function generateMetadata({ params: { id } }: Params) {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

// [id]는 url parameter를 받는다는 것을 의미한다.
// id는 원래 number만 받을 수 있게 해야 하지만 일단 string으로 처리
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      {/*
        Suspense 컴포넌트는 컴포넌트가 비동기 데이터 페칭 통신을 위해 await 하는 동안 다른 컴포넌트를 보여주는 역할을 한다.
        Suspense 컴포넌트는 Promise.all을 사용하지 않아도 감싸고 있는 각각의 컴포넌트 별로 병렬적으로 비동기 데이터 페칭을 하는 것과 같다.
       */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <Movieinfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
