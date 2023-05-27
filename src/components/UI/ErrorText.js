import classes from "./ErrorText.module.css";
function ErrorText(props) {
  return <p className={classes.p}>{props.text}</p>;
}

export default ErrorText;
