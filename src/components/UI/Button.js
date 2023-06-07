import classes from "./Button.module.css";

function Button(props) {
  return (
    <>
      <input
        type="button"
        value={props.value}
        className={classes.button}
        onClick={props.onClick}
      />
    </>
  );
}

export default Button;
