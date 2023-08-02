import DictTitle from "@/components/Dict/DictTitle";
import NoContent from "@/components/Dict/NoContent";
import ARTICLE_DATA, { Article } from "@/components/Dict/article";

const category_type: {
  [key: string]: number;
} = {
  gen: 1,
  can: 2,
  pet: 3,
  paper: 4,
  glass: 5,
  vinyl: 6,
  plastic: 7,
  food: 8,
  cloth: 9,
  etc: 10,
};

const DictFilter: React.FC<{ boardName: string }> = (props) => {
  if (props.boardName === "all") {
    if (ARTICLE_DATA.length === 0) {
      return <NoContent />;
    }
    return ARTICLE_DATA.map((article: Article) => (
      <DictTitle key={article.id} article={article} boardName={"all"} />
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
      <DictTitle
        key={article.id}
        article={article}
        boardName={props.boardName}
      />
    ));
  }
};

export default DictFilter;
