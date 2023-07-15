import classes from "@/components/UI/styles/SubmitButton.module.scss";
export default function SubmitButton(props: any) {
  return (
    <>
      <input
        type="submit"
        value={props.value}
        className={classes.submit}
        onClick={props.onClick}
      />
    </>
  );
}
