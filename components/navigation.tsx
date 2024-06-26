"use client"; // CSR을 의미하는 것이 아니라, 초기 렌더링은 SSR이지만 이후 클라이언트 컴포넌트로써 hydrate된다는 것을 의미한다. 즉, next에게 이 컴포넌트는 interactive하다고 알려주는 것
// 서버 컴포넌트에서는 hydration 과정이 없기 때문에 브라우저에서 다운로드 받을 JS 코드가 없어서 빠른 렌더링이 가능하다.

// use client를 선언해서 클라이언트 컴포넌트로 만들었다고 하더라도 기본적으로 NextJs에서 /app 하위의 모든 컴포넌트는 서버 컴포넌트이므로 SSR로 동작한다.
// 브라우저에서 JavaScript를 disable 하더라도 SSR이기 때문에 클라이언트 컴포넌트도 이미 HTML 파일로 만들어져서 서버에 존재하므로 화면 UI 렌더링에는 아무런 문제가 없다.
// 브라우저에서 JavaScript를 disable한 경우, link를 통해 페이지 이동시 단순 a태그이기 때문에 전체 html이 리로드되면서 페이지 새로고침이 일어난다.
// 브라우저에서 JavaScript를 enable한 경우, React가 initialised되어서 link를 통해 페이지 이동시 단순 a태그가 아니라 React 컴포넌트가 개입되기 때문에 새로고침이 일어나지 않는다. (React hydrated)
// 1. 사용자가 페이지 첫 진입 시, 서버에서 생성된 html 페이지 렌더링
// 2. 곧바로 React initialised (hydrated)
// 3. 사용자가 링크 클릭하여 페이지 이동 시, html 문서상으로는 여전히 a태그이지만 React 컴포넌트가 개입되어 navigate되면서 화면 새로고침 없이 빠르게 전환

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// module.css로 style을 가져와서 className을 지정하게 되면 클래스명에 자동으로 랜덤 문자가 붙어서 클래스명 중복이 일어나지 않는다
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const [count, setCount] = useState(0);
  const path = usePathname(); // usePathname() hook은 클라이언트 컴포넌트에서만 사용가능

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          {/* 링크를 걸 때에는 a태그 대신 Link를 이용한다. 이동할 링크는 href 이용 */}
          <Link href="/">Home</Link> {path === "/" ? "👈" : ""}
        </li>
        <li>
          <Link href="/about-me">About Me</Link>{" "}
          {path === "/about-me" ? "👈" : ""}
        </li>
        {/* 초기에는 SSR로 일반 html이지만 hydrate 이후 React Component가 되어 이벤트리스너가 동작한다 */}
        {/* <li>
          <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </li> */}
      </ul>
    </nav>
  );
}
