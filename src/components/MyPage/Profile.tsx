import Image from "next/image";
import aily from "img/aily_logo.svg";
import classes from "@/components/MyPage/styles/Profile.module.scss";

export default function Profile() {
  return (
    <div className={classes.img}>
      <Image src={aily} width={100} alt="profile_img" />
    </div>
  );
}
