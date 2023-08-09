import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import classes from "@/components/MyPage/styles/Profile.module.scss";
import { useDispatch } from "react-redux";
import { setImageUrl } from "@/store/image";

export default function Profile(props: any) {
  const [imgUrl, setImgUrl] = useState<string>("");
  const dispatch = useDispatch();

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

        // const imageUrl = response.data.split("https://ailymit.store")[1]
        // console.log(imageUrl);

        setImgUrl(response.data);
        dispatch(setImageUrl(`${response.data}?${Date.now()}`));
      })
      .catch((error) => {
        // Handle errors if needed
      });
  }, []);

  useEffect(() => {
    console.log(imgUrl);
  });
  return (
    <div className={classes.img}>
      {imgUrl && (
        <Image
          src={`${imgUrl}?${Date.now()}`} // 현재 시각의 프사를 가져옴
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
