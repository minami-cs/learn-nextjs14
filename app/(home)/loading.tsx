// 파일명은 반드시 loading.tsx여야 한다.
// page.tsx와 같은 위치에 만들어야 한다.

// Data fetching 중 화면에 loading 상태 표시
// NextJS의 최적화 + 해당 페이지의 컨텐츠를 백엔드에서 streaming하기 때문에
// loading 컴포넌트가 있다면 data를 다 불러올 때까지 layout(w/nav bar)과 loading 컴포넌트를 보여준다
// 즉, 준비된 chunk부터 보여주는 것
// data fetching이 끝나면 Loading 컴포넌트는 결과를 보여주는 컴포넌트로 교체된다.
// 브라우저 로딩이 완료되었을 때 preview를 보면 이 Loading 컴포넌트를 결과로 보여주지만,
// 사실은 stream을 통해 준비된 부분부터 보여주다가 서버 통신이 끝나면 결과값을 보여주는 화면으로 교체되어 있다.
export default function Loading() {
  return <h2>Loading...</h2>
}