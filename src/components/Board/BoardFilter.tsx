import React from "react";
import BoardTitle from "@/components/Board/BoardTitle";
import NoContent from "@/components/Board/NoContent";
import { Article } from "@/components/Board/article";

function BoardFilter(props: {
  boardName: string;
  categoryType: Record<string, number>;
  data: Article[];
}) {
  const filteredArticles = props.data.filter(
    (article: Article) =>
      props.boardName === "all" ||
      props.categoryType[props.boardName] === article.category_id
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
