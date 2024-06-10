// 하위 페이지들은 모두 이 레이아웃을 이용하여 렌더링된다.
// 이 레이아웃은 루트 레이아웃 하위에 중첩된다.
export default function AboutUsLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      {children}
      &copy; NextJS is great~
    </div>
  );
}