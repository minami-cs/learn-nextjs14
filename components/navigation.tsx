"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname(); // usePathname() hook은 클라이언트 컴포넌트에서만 사용가능
    
    return (
        <nav>
            <ul>
                <li>
                    {/* 링크를 걸 때에는 a태그 대신 Link를 이용한다. 이동할 링크는 href 이용 */}
                    <Link href="/">Home</Link> {path === "/" ? "👈" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "👈" : ""}
                </li>
            </ul>
        </nav>
    )
}