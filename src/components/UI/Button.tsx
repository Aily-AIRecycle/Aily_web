import classes from "@/components/UI/styles/Button.module.scss";

function Button(props: any) {
  return (
    <>
      <input
        type="button"
        value={props.value}
        className={classes.button}
        onClick={props.onClick}
        style={{ backgroundColor: props.color }}
        disabled={props.disabled}
      />
    </>
  );
}

export default Button;
