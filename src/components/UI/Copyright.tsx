import classes from "@/components/UI/styles/Copyright.module.scss";
import miniLogo from "img/mini_logo.svg";
import Image from "next/image";

function Copyright() {
  return (
    <div className={classes.div}>
      <Image src={miniLogo} alt="aily" className={classes.logo} />
      <h6 className={classes.text}>© 2023 Aily. All rights reserved.</h6>
    </div>
  );
}

export default Copyright;
