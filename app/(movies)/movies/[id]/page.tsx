// Suspense는 react에서 제공하는 컴포넌트이다.
import { Suspense } from "react";
import Movieinfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

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
