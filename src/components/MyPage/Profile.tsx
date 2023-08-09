import Image from "next/image";
import classes from "@/components/MyPage/styles/Profile.module.scss";

export default function Profile(props: any) {
  return (
    <div className={classes.img}>
      {props.src && (
        <Image
          src={props.src}
          priority
          width={180}
          height={180}
          alt="profile_img"
          style={{ borderRadius: "50%" }}
        />
      )}
    </div>
  );
}
