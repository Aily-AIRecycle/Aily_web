"use client";
import classes from "@/components/MyPage/styles/Edit.module.scss";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Profile from "@/components/MyPage/Profile";
import SubmitButton from "../UI/SubmitButton";
import Image from "next/image";
import edit from "img/edit.svg";

export default function Edit() {
  // useEffect(() => {
  //   axios
  //     .post("/member/member/01018181818", {
  //       phonenumber:
  //         sessionStorage.getItem("phone_number") ||
  //         localStorage.getItem("phone_number"),
  //     })
  //     .then((response) => {});
  // }, []);

  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    console.log(showBox);
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      // console.log(file);
      const reader = new FileReader();

      reader.onload = (e) => {
        // console.log(e);
        // console.log(e.target?.result);
        const imageUrl = e.target?.result as string;
        setImgUrl(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "994px",
          height: "875px",
        }}
      >
        <div className={classes.box}>
          <p className={classes.title}>내 정보 수정</p>
          <form>
            <ul className={classes.edit}>
              <li className={classes.data}>
                <label htmlFor="email">이메일</label>
                <input name="email"></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="name">이름</label>
                <input name="name"></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="phonenumber">전화번호</label>
                <input name="phonenumber"></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="birth">생년월일</label>
                <input name="gender"></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="gender">성별</label>
                <input name="gender"></input>
              </li>
            </ul>
            <SubmitButton value="수정" />
          </form>
        </div>
        <div style={{ marginTop: "88px" }}>
          <Profile src={imgUrl} />
          <button
            className={classes.edit_btn}
            onClick={() => {
              setShowBox(!showBox);
            }}
            // onBlur={() => setShowBox(false)}
          >
            <Image src={edit} alt="edit" width={30} height={30} />
          </button>
          {showBox && (
            <div className={classes.edit_box}>
              <label
                htmlFor="file"
                // onClick={() => {
                //   setTimeout(() => setShowBox(false), 500);
                // }}
              >
                사진 업로드
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />

              {imgUrl !== null && (
                <button onClick={() => setImgUrl(null)}>사진 제거</button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
