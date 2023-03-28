// import { Link } from 'react-router-dom';
// import classes from './BoardTitle.module.css'

function BoardTitle(props){
    const id = props.id
    const title = props.title
    // const content = props.content

    return <>
    {/* <Link to={`/board/notice/${id}`} className={classes.boardTitle} state={{id: id, title: title, content: content}}> */}
        <div>{id}</div>
        <div>{title}</div>
    {/* </Link> */}
    </>
}

export default BoardTitle;