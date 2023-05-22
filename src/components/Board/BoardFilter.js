import BoardTitle from "./BoardTitle";
import NoContent from "./NoContent";

const category_type = { notice: 1, "q&a": 2, faq: 3, suggestion: 4 };

function BoardFilter(props) {
  if (props.boardName !== undefined) {
    if (
      props.data.filter(
        (article) => category_type[props.boardName] === article.category_id
      ).length === 0
    ) {
      return <NoContent />;
    }
    return props.data
      .filter(
        (article) => category_type[props.boardName] === article.category_id
      )
      .map((article) => (
        <BoardTitle
          key={article.id}
          article={article}
          boardName={props.boardName}
        />
      ));
  } else {
    if (props.data.length === 0) {
      return <NoContent />;
    }
    return props.data.map((article) => (
      <BoardTitle key={article.id} article={article} boardName={"entire"} />
    ));
  }
}

export default BoardFilter;
