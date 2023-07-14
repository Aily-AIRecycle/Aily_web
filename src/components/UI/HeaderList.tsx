import Link from "next/link";

function HeaderList(props: any) {

  const handleLogout = () => {
    // Perform logout logic, such as clearing session data
    sessionStorage.clear();
    // Alternatively, you can use localStorage.removeItem("loginok");

    // Redirect to the login page after logout
  };

  const sessionName = sessionStorage.getItem("loginok");

  return (
    <ul className={props.ul}>
      <li className={props.li}>
        <Link href="/board/all">
          게시판
        </Link>
      </li>
      <li className={props.li}>
        <Link href="/location">
          위치
        </Link>
      </li>
      <li className={props.li}>
        <Link href="/isRecycle">
          재활용 여부 검색
        </Link>
      </li>
      <li className={props.li}>
        <Link href="/stats">
          통계
        </Link>
      </li>
      {sessionName === "ok" && (
        <>
          <li className={props.li}>
            <Link href="/my-page/mypage">
              내 정보
            </Link>
          </li>
          <li className={props.li} onClick={handleLogout}>
            <Link href="/">
            로그아웃
            </Link>
          </li>
        </>
      )}
      {sessionName !== "ok" && (
        <li className={props.li}>
          <Link href="/login">
            로그인
          </Link>
        </li>
      )}
    </ul>
  );
}

export default HeaderList;
