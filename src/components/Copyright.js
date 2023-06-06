import classes from "./Copyright.module.css";
import logo from "../img/aily_logo.svg";

function Copyright() {
  return (
    <div className={classes.div}>
      <img src={logo} alt="aily" className={classes.logo} />
      <h6 className={classes.text}>
        Copyright 2023. Aily. All rights reserved.
      </h6>
    </div>
  );
}

export default Copyright;
