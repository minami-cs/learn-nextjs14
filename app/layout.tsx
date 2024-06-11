// layout.tsx는 삭제해도 next에서 감지하고 자동으로 파일 생성함
import { Metadata } from "next"
import Navigation from "../components/navigation"

// metadata는 페이지마다 따로 작성하더라도 최종적으로는 layout에 작성된 부분과 함께 병합되어 보인다.
// metadata는 layout과 page에서만 내보낼 수 있다.
// metadata는 서버 컴포넌트에만 존재할 수 있다.
// metadata도 템플릿화하여 사용 가능
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies"
  },
  description: 'The best movies on the best framework',
}

// 모든 페이지들은 아래 구조로 렌더링된다.
// <Layout>
//   <각 page 컴포넌트 />
// </Layout>
// 즉, 레이아웃 컴포넌트 안에 각 url로 인식한 페이지 컴포넌트가 존재한다.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
