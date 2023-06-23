import classes from "@/components/UI/styles/Button.module.css";

function Button(props: any) {
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
