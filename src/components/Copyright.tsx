import classes from "@/components/styles/Copyright.module.css";
import miniLogo from "img/mini_logo.svg";

function Copyright() {
  return (
    <div className={classes.div}>
      <img src={miniLogo} alt="aily" className={classes.logo} />
      <h6 className={classes.text}>
        Copyright 2023. Aily. All rights reserved.
      </h6>
    </div>
  );
}

export default Copyright;
