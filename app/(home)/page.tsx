// next는 실행시 무조건 app 폴더 안의 page.tsx를 먼저 참조한다
// 여기가 root

import Link from "next/link";
import { MOVIES_BASE_URL } from "../../constants/constants";

// client component에서는 metadata 사용 불가
export const metadata = {
  title: "Home",
};

// server component에서 data fetching
// NextJS의 서버 컴포넌트에서 data fetching을 하면 자동으로 캐싱된 url 데이터를 보여주기 때문에 로딩 없이 매우 빠르다
// 로딩 상태는 브라우저 상단 탭에서만 알 수 있다
// 로딩 상태가 React에서는 화면에서 다루어졌다면 NextJS에서는 서버 컴포넌트로 옮겨졌기 때문에 서버 응답이 오기 전까지 사용자는 아무 화면을 볼 수 없게 되었다
async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));  // 일부러 로딩 상태를 만들기 위한 delay

  return await fetch(MOVIES_BASE_URL).then((res) => res.json());
}

// (폴더명)은 url 경로를 생성하지 않는다!
// 하지만 page가 동작하는 것에는 아무런 문제가 없음!
// (폴더명): 논리적인 route group을 만드는 방법

// async로 컴포넌트를 만들어야 하는 이유는 data fetching을 기다리면서 streaming을 하며 loading 컴포넌트를 보여주다가 준비가 완료되었을 때 이 페이지를 보여주기 때문
export default async function HomePage() {
  // function naming은 무엇이든 상관없음
  // 기존 React에서 사용하던 방식으로 api 통신해서 data fetching하려면 "use client"를 써서 클라이언트 컴포넌트로 만들어야 한다
  // 이런 방식으로는 API Key가 공개될 수 있고, 클라이언트가 DB에 직접 연결할 수 없어서 백엔드 서버를 거쳐야만 한다
  // 또한, 로딩 상태를 별도로 관리해야 한다
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [movies, setMovies] = useState([]);
  // const getMovies = async () => {
  //     const res = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
  //     const data = await res.json();

  //     setMovies(data);
  //     setIsLoading(false);
  // }
  // useEffect(() => {
  //     getMovies();
  // }, []);

  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
