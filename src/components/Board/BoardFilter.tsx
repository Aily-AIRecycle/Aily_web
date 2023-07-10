import BoardTitle from "@/components/Board/BoardTitle";
import NoContent from "@/components/Board/NoContent";
import ARTICLE_DATA, { Article } from "@/components/Board/article";

const category_type: {
  [key: string]: number;
} = { notice: 1, "q&a": 2, faq: 3, suggestion: 4 };

const BoardFilter: React.FC<{ boardName: string }> = (props) => {
  if (props.boardName === "all") {
    if (ARTICLE_DATA.length === 0) {
      return <NoContent />;
    }
    return ARTICLE_DATA.map((article: Article) => (
      <BoardTitle key={article.id} article={article} boardName={"all"} />
    ));
  } else if (props.boardName !== undefined) {
    if (
      ARTICLE_DATA.filter(
        (article: Article) =>
          category_type[props.boardName] === article.category_id
      ).length === 0
    ) {
      return <NoContent />;
    }
    return ARTICLE_DATA.filter(
      (article: Article) =>
        category_type[props.boardName] === article.category_id
    ).map((article: Article) => (
      <BoardTitle
        key={article.id}
        article={article}
        boardName={props.boardName}
      />
    ));
  }
};

export default BoardFilter;
