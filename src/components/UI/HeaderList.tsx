import Link from "next/link";

function HeaderList(props: any) {
  const handleLogout = () => {
    // Perform logout logic, such as clearing session data
    sessionStorage.clear();
    localStorage.clear();
    // Alternatively, you can use localStorage.removeItem("loginok");

    // Redirect to the login page after logout
  };

  const name =
    sessionStorage.getItem("loginok") || localStorage.getItem("loginok");
  const id = sessionStorage.getItem("name") || localStorage.getItem("name");

  return (
    <ul className={props.ul}>
      <li className={props.li}>
        <Link href="/boards/all">게시판</Link>
      </li>
      <li className={props.li}>
        <Link href="/location">위치</Link>
      </li>
      <li className={props.li}>
        <Link href="/dictionary/all">재활용 사전</Link>
      </li>
      <li className={props.li}>
        <Link href="/statistics">통계</Link>
      </li>
      {name === "ok" && (
        <>
          <li className={props.li}>
            <Link href="/my-page/dashboard">내 정보</Link>
          </li>
          <li className={props.li} onClick={handleLogout}>
            <Link href="/">로그아웃</Link>
          </li>
          {id === "테스트" && <Link href="/hidden">관리자 대쉬보드</Link>}
        </>
      )}
      {name !== "ok" && (
        <li className={props.li}>
          <Link href="/login">로그인</Link>
        </li>
      )}
    </ul>
  );
}

export default HeaderList;
