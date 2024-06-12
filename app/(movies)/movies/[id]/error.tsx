"use client"; // error 컴포넌트는 클라이언트 컴포넌트에서만 가능
// error boundary는 컴포넌트 단위로 중첩되며 server 에러에 따른 ui 표현을 하는 것이기 때문에 client component로 만들어야 한다

// 영화 정보 상세 페이지에 대한 에러 페이지
// 상위 또는 다른 route에 대한 에러 핸들링이 아님!
export default function Error() {
  return <h1>Something's wrong</h1>;
}
