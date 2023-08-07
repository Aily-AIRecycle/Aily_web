import Image, { ImageLoader } from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

import classes from "@/components/MyPage/styles/Profile.module.scss";

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality ?? 180}`;
};

export default function Profile(props: any) {
  const [imageUrl1, setImageUrl1] = useState<string>("");

  useEffect(() => {
    axios
      .post("/member/member/userimage", {
        phonenumber:
          sessionStorage.getItem("phone_number") ||
          localStorage.getItem("phone_number"),
      })
      .then((response) => {
        const relativePath = response.data.split("/member/image/")[1];
        const imageUrl = "/member/image/" + relativePath;
        setImageUrl1(imageUrl);
      })
      .catch((error) => {
        // Handle errors if needed
      });
  }, []);

  return (
    <div className={classes.img}>
      {imageUrl1 && (
        <Image
          loader={imageLoader} // Use the custom imageLoader function here
          src={imageUrl1} // Pass the dynamically fetched image URL
          width={180}
          height={180}
          alt="profile_img"
          className={classes.profileImg}
        />
      )}
    </div>
  );
}
