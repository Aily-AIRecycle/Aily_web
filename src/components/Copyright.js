import classes from "./Copyright.module.css";

function Copyright() {
  return (
    <div className={classes.div}>
      <h4 className={classes.logo}>Aily</h4>
      <h6 className={classes.text}>
        Copyright 2023. Aily. All rights reserved.
      </h6>
    </div>
  );
}

export default Copyright;
