import BoardTitle from "@/components/Board/BoardTitle";
import NoContent from "@/components/Board/NoContent";

const category_type: any = { notice: 1, "q&a": 2, faq: 3, suggestion: 4 };

function BoardFilter(props: any)
{
  if (props.boardName !== undefined)
  {
    if (
      props.data.filter(
        (article: any) => category_type[props.boardName] === article.category_id
      ).length === 0
    )
    {
      return <NoContent />;
    }
    return props.data
      .filter(
        (article: any) => category_type[props.boardName] === article.category_id
      )
      .map((article: any) => (
        <BoardTitle
          key={article.id}
          article={article}
          boardName={props.boardName}
        />
      ));
  } else
  {
    if (props.data.length === 0)
    {
      return <NoContent />;
    }
    return props.data.map((article: any) => (
      <BoardTitle key={article.id} article={article} boardName={"entire"} />
    ));
  }
}

export default BoardFilter;
