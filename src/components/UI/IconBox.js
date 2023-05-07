import classes from "./IconBox.module.css";

function IconBox(props) {
  return (
    <div className={classes.iconBox}>
      <img src={props.img} className={classes.img} />
    </div>
  );
}

export default IconBox;
