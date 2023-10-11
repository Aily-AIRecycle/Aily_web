import Link from "next/link";
import { useEffect, useState } from "react";

function HeaderList(props: any) {
  const handleLogout = () => {
    // Perform logout logic, such as clearing session data
    sessionStorage.clear();
    localStorage.clear();
    // Alternatively, you can use localStorage.removeItem("loginok");

    // Redirect to the login page after logout
  };

  const [name, setName] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    setName(
      sessionStorage.getItem("loginok") || localStorage.getItem("loginok")
    );
    setId(sessionStorage.getItem("name") || localStorage.getItem("name"));
  });

  return (
    <ul className={props.ul}>
      <li className={props.li}>
        <Link href="/boards/all" className={props.link}>
          게시판
        </Link>
      </li>
      <li className={props.li}>
        <Link href="/location" className={props.link}>
          위치
        </Link>
      </li>
      <li className={props.li}>
        <Link href="/dict" className={props.link}>
          재활용 사전
        </Link>
      </li>
      <li className={props.li}>
        <Link href="/statistics" className={props.link}>
          통계
        </Link>
      </li>
      {name === "ok" && (
        <>
          <li className={props.li}>
            <Link href="/my-page/dashboard" className={props.link}>
              내 정보
            </Link>
          </li>
          <li className={props.li} onClick={handleLogout}>
            <Link href="/" className={props.link}>
              로그아웃
            </Link>
          </li>
          {id === "테스트" && (
            <Link href="/hidden" className={props.link}>
              관리자 대쉬보드
            </Link>
          )}
        </>
      )}
      {name !== "ok" && (
        <li className={props.li}>
          <Link href="/login" className={props.link}>
            로그인
          </Link>
        </li>
      )}
    </ul>
  );
}

export default HeaderList;
