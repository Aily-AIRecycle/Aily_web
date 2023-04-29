import BoardTitle from "./BoardTitle";

const category_type = { notice: 1, "q&a": 2, faq: 3, suggestion: 4 };

function BoardFilter(props) {
  if (props.boardName !== undefined) {
    return props.data
      .filter(
        (article) => category_type[props.boardName] === article.category_id
      )
      .map((article) => <BoardTitle key={article.id} article={article} />);
  } else {
    return props.data.map((article) => (
      <BoardTitle key={article.id} article={article} />
    ));
  }
}

export default BoardFilter;
