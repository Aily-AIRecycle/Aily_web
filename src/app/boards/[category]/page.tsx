"use client";
import BoardFilter from "@/components/Board/BoardFilter";
import classes from "@/app/boards/[category]/Board.module.scss";
import { Provider } from "react-redux";
import store from "@/store";

function Page({ params }: { params: { category: string } }) {
  return (
    <>
      <Provider store={store}>
        <div className={classes.board}>
          <div className={classes.boardHead}>
            <div className={classes.id}>No</div>
            <div className={classes.category}>카테고리</div>
            <div className={classes.title}>제목</div>
            <div className={classes.writer}>작성자</div>
            <div className={classes.date}>작성일</div>
          </div>
          <ul className={classes.list}>
            <BoardFilter boardName={params.category} />
          </ul>
        </div>
      </Provider>
    </>
  );
}

export default Page;
