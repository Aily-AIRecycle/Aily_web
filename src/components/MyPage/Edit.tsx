"use client";
import classes from "@/components/MyPage/styles/Edit.module.scss";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Profile from "@/components/MyPage/Profile";
import SubmitButton from "@/components/UI/SubmitButton";
import CropImageModal from "@/components/MyPage/CropImageModal";
import Image from "next/image";
import edit from "img/edit.svg";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { cropModalActions } from "@/store/cropModal";
import { setImageUrl } from "@/store/image";

export default function Edit() {
  // useEffect(() => {
  //   const phone_number =
  //     sessionStorage.getItem("phone_number") ||
  //     localStorage.getItem("phone_number");
  //   axios.get(`/member/member/${phone_number}`, {}).then((response) => {});
  // }, []);

  // 사용자가 설정한 사진 또는 서버에서 가저온 사진 url
  const imgUrl = useSelector((state: any) => state.image.imageUrl);
  // const [imgUrl, setImgUrl] = useState(null);
  const [loadImgUrl, setLoadImgUrl] = useState<string | null>(null);
  const [showBox, setShowBox] = useState(false);
  const dispatch = useDispatch();
  const showModal = useSelector((state: any) => state.cropModal.showModal);


  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setLoadImgUrl(imageUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {showModal &&
        createPortal(
          <div
            className={classes.modal}
            onClick={() => {
              dispatch(cropModalActions.click());
            }}
          ></div>,
          document.body
        )}
      {showModal &&
        createPortal(
          <CropImageModal imgUrl={loadImgUrl} showModal={showModal} />,
          document.body
        )}
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
                <input name="email" autoFocus></input>
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
          >
            <Image src={edit} alt="edit" width={30} height={30} />
          </button>
          {showBox && (
            <div className={classes.edit_box}>
              <label
                htmlFor="file"
                onClick={() => {
                  dispatch(cropModalActions.crop());
                }}
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
                <button onClick={() => dispatch(setImageUrl(null))}>
                  사진 제거
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
