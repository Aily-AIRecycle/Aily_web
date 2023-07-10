"use client";
import Link from "next/link";
import classes from "@/app/board/[category]/[id]/BoardContent.module.scss";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import BoardNavigation from "@/components/Board/BoardNavigation";
import ARTICLE_DATA from "@/components/Board/article";
import { Article } from "@/components/Board/article";

function Page({ params }: { params: { id: string } }): JSX.Element {
  const article = ARTICLE_DATA.filter(
    (article: Article) => article.id === params.id
  )[0];
  return (
    <>
      <Header />
      <BoardNavigation />
      <div className={classes.board}>
        <div className={classes.title}>
          {article.title}
          <ul className={classes.info}>
            <li>{article.writer}</li>
            <li>{article.date}</li>
          </ul>
        </div>
        <div className={classes.content_wrap}>
          <pre className={classes.content}>{article.content}</pre>
        </div>
      </div>
      <div className={classes.list_wrap}>
        <Link className={classes.list} href=".">
          목록보기
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Page;
