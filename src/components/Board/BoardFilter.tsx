import React from "react";
import BoardTitle from "@/components/Board/BoardTitle";
import NoContent from "@/components/Board/NoContent";
import ARTICLE_DATA, { Article } from "@/components/Board/article";

const categoryType: Record<string, number> = {
  notice: 1,
  "q&a": 2,
  faq: 3,
  suggestion: 4,
};

function BoardFilter(props: { boardName: string }) {
  const filteredArticles = ARTICLE_DATA.filter(
    (article: Article) =>
      props.boardName === "all" ||
      categoryType[props.boardName] === article.category_id
  );

  if (filteredArticles.length === 0) {
    return <NoContent />;
  }

  return (
    <>
      {filteredArticles.map((article: Article) => (
        <BoardTitle
          key={article.id}
          article={article}
          boardName={props.boardName}
        />
      ))}
    </>
  );
}

export default BoardFilter;
