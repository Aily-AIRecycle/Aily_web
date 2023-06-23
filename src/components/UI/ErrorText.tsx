import classes from "@/components/UI/styles/ErrorText.module.css";
function ErrorText(props: any) {
  return <p className={classes.p}>{props.text}</p>;
}

export default ErrorText;
