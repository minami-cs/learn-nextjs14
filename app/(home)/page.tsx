// next는 실행시 무조건 app 폴더 안의 page.tsx를 먼저 참조한다
// 여기가 root
"use client"

import { useEffect, useState } from "react"

// client component에서는 metadata 사용 불가
// export const metadata = {
//     title: 'Home',
//   }

// (폴더명)은 url 경로를 생성하지 않는다!
// 하지만 page가 동작하는 것에는 아무런 문제가 없음!
// (폴더명): 논리적인 route group을 만드는 방법
export default function Page() {  // function naming은 무엇이든 상관없음
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const res = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
        const data = await res.json();

        setMovies(data);
        setIsLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {isLoading ? "Loading..." : JSON.stringify(movies)}
        </div>
    )
}