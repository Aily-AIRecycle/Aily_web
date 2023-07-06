"use client";
import BoardFilter from "@/components/Board/BoardFilter";
import classes from "@/app/board/[category]/Board.module.scss";
import BoardNavigation from "@/components/Board/BoardNavigation";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import { Provider } from "react-redux";
import store from "@/store";

function Page({ params }: { params: { category: string } }) {
  return (
    <>
      <Header />
      <Provider store={store}>
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
            {/* <BoardFilter boardName={params.category} data={DUMMY_DATA} /> */}
            <BoardFilter boardName={params.category} />
          </ul>
        </div>
      </Provider>
      <Footer />
    </>
  );
}

export default Page;
