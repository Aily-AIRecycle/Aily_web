import Image, { ImageLoader } from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

import classes from "@/components/MyPage/styles/Profile.module.scss";

const imageLoader: ImageLoader = ({ src, width, quality }) => {
  return `${src}?cache=${Date.now()}`;
};
export default function Profile(props: any) {
  const [imageUrl1, setImageUrl1] = useState<string>("");

  const fetchProfileImage = () => {
    axios
      .post("/member/member/userimage", {
        phonenumber: sessionStorage.getItem("phone_number"),
      })
      .then((response) => {
        const relativePath = response.data.split("/member/image/")[1];
        const imageUrl = "/member/image/" + relativePath;
        setImageUrl1(imageUrl);
      })
      .catch((error) => {
        // Handle errors if needed
      });
  };

  useEffect(() => {
    // Fetch the profile image initially
    fetchProfileImage();

    // Set up a periodic timer to refresh the profile image every 5 minutes (adjust as needed)
    const refreshInterval = setInterval(fetchProfileImage, 5 * 60 * 1000);

    // Clean up the timer on component unmount
    return () => {
      clearInterval(refreshInterval);
    };
  }, []); // Run only once on component mount

  return (
    <div className={classes.img}>
      {imageUrl1 && (
        <Image
          loader={imageLoader}
          src={imageUrl1}
          width={180}
          height={180}
          alt="profile_img"
          className={classes.profileImg}
        />
      )}
    </div>
  );
}
