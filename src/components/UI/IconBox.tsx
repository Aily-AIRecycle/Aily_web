import classes from "@/components/UI/styles/IconBox.module.css";

function IconBox(props: any) {
  return (
    <div className={classes.iconBox}>
      <img src={props.img} className={classes.img} />
    </div>
  );
}

export default IconBox;
