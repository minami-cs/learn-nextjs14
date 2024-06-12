import Link from "next/link";
import styles from "../../styles/about-me.module.css";

export const metadata = {
  title: "About Me",
};

// 새 페이지를 추가할 때는 이렇게 /app 하위 폴더 생성 후 page.tsx 파일을 작성한다
export default function AbountUs() {
  return (
    <div className={styles.container}>
      <img
        src="https://avatars.githubusercontent.com/u/66506477?v=4"
        alt="profile"
      />
      <div className={styles.text_container}>
        <Link href="https://github.com/minami-cs">
          <h2>@minami-cs</h2>
        </Link>
        <p>Frontend Engineer</p>
      </div>
    </div>
  );
}
