// 최하위 레이아웃도 상위 레이아웃들과 함께 중첩되어 렌더링된다.
export default function SalesLayout({ children }: { children : React.ReactNode }) {
  return (
    <div>
      {children}
      $$$$$
    </div>
  );
}