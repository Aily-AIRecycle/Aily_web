import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import classes from "@/components/MyPage/styles/Profile.module.scss";

export default function Profile(props: any) {
  const [imageUrl1, setImageUrl1] = useState<string>("");

  useEffect(() => {
    axios
      .post(
        "https://ailymit.store/member/member/userimage",
        {
          phonenumber:
            sessionStorage.getItem("phone_number") ||
            localStorage.getItem("phone_number"),
        },
        {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      )
      .then((response) => {
        console.log(response);
        // server
        // const relativePath = response.data.split("/member/image/")[1];
        // const imageUrl = "/member/image/" + relativePath;
        // console.log(imageUrl);
        // setImageUrl1(imageUrl);

        // local
        setImageUrl1(response.data);
      })
      .catch((error) => {
        // Handle errors if needed
      });
  }, []);

  useEffect(() => {
    console.log(imageUrl1);
  });
  return (
    <div className={classes.img}>
      {imageUrl1 && (
        <Image
          src={`${imageUrl1}?${Date.now()}`} // 현재 시각의 프사를 가져옴
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
