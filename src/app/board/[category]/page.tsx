"use client";
import BoardFilter from "@/components/Board/BoardFilter";
import classes from "@/pages/styles/Board.module.css";
import BoardNavigation from "@/components/BoardNavigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DUMMY_DATA = [
  {
    id: "1",
    category: "공지",
    category_id: 1,
    title: "첫 글",
    writer: "Aily",
    content: "안녕하세요, Aily 사용자 여러분\n\nAily에 오신 것을 환영합니다.",
    date: "2023.04.17",
  },
  {
    id: "2",
    category: "FAQ",
    category_id: 3,
    title: "포인트 사용은 어디서 할 수 있나요?",
    writer: "Aily",
    content:
      "안녕하세요, Aily 입니다.\n온라인이나 오프라인에서 사용 가능하며, 기프티콘이나 선물도 가능합니다.\n\n감사합니다.",
    date: "2023.04.17",
  },
  {
    id: "3",
    category: "FAQ",
    category_id: 3,
    title: "Aily 이용은 어떻게 하나요?",
    writer: "Aily",
    content:
      "안녕하세요, Aily 입니다.\n\nAily에서 재활용이 가능한 쓰레기를 모아 Aily 쓰레기통에 버려주세요.\n추후 설명 추가예정\n\n\n감사합니다.",
    date: "2023.04.17",
  },
];

function Page({ params }: { params: { category: string } }) {
  return (
    <>
      <Header />
      <BoardNavigation />
      <div className={classes.board}>
        <div className={classes.boardHead}>
          <div className={classes.id}>No</div>
          <div className={classes.category}>카테고리</div>
          <div className={classes.title}>제목</div>
          <div className={classes.writer}>작성자</div>
          <div className={classes.date}>작성일</div>
        </div>
        <ul className={classes.list}>
          <BoardFilter boardName={params.category} data={DUMMY_DATA} />
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Page;
