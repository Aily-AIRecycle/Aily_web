import Link from "next/link";

function HeaderList(props: any) {
  // const;
  return (
    <ul className={props.ul}>
      <li className={props.li}>
        <Link href="/board/all" onClick={props.onClick}>
          게시판
        </Link>
      </li>
      <li className={props.li} onClick={props.onClick}>
        <Link href="/location">위치</Link>
      </li>
      <li className={props.li} onClick={props.onClick}>
        <Link href="/isRecycle">재활용 여부 검색</Link>
      </li>
      <li className={props.li} onClick={props.onClick}>
        <Link href="/stats">통계</Link>
      </li>
      <li className={props.li} onClick={props.onClick}>
        <Link href="/login">로그인</Link>
      </li>
    </ul>
  );
}

export default HeaderList;
