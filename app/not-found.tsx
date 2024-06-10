import Navigation from "../components/navigation";

// 존재하지 않는 url 경로를 입력했을 때 자동으로 이 페이지가 렌더링된다!
export default function NotFount() {
    return (
        <div>
            <Navigation />
            <h1>404 Not Found</h1>
        </div>
    )
}