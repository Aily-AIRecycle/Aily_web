import { useLocation } from "react-router-dom"
import classes from './BoardContent.module.css'


function BoardContent(){
    const a = useLocation();
    const article = a.state
    return <div className={classes.board}>
    {/* <p>글번호 필요없을거같음: {article.id}</p> */}
    <div className={classes.title}>{article.title}</div>
    <div className={classes.content}>{article.content}</div>
    </div>
}

export default BoardContent;