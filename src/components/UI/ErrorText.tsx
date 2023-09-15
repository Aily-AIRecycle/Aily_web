import classes from "@/components/UI/styles/ErrorText.module.scss";
function ErrorText(props: { text: string }) {
  return <p className={classes.p}>{props.text}</p>;
}

export default ErrorText;
