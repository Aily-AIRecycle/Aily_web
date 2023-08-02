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
import useFormValidation, {
  FormData,
  Errors,
  ChangeHandler,
  UpdateFormData,
} from "@/hooks/use-formValidation";

export default function Edit() {
  // 사용자가 설정한 사진 또는 서버에서 가저온 사진 url
  const imgUrl = useSelector((state: any) => state.image.imageUrl);
  // const [imgUrl, setImgUrl] = useState(null);
  const [loadImgUrl, setLoadImgUrl] = useState<string | null>(null);
  const [serverLoadImgUrl, setServerLoadImgUrl] = useState<string | null>(null);
  const [showBox, setShowBox] = useState(false);
  const dispatch = useDispatch();
  const showModal = useSelector((state: any) => state.cropModal.showModal);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  const nameRegex = /^[a-zA-Z가-힣]{2,50}$/;
  const phoneRegex = /^01(?:0|1|[6-9])\d{4}\d{4}$/;
  const birthRegex =
    /^(?:(?:19|20)\d{2})(?:(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1\d|2[0-8]))|(?:02(?:29))|(?:(?:0[13-9]|1[0-2])(?:29|30))|(?:0[13578]|1[02])31)$/;

  const validationRules = {
    email: (value: string) => emailRegex.test(value),
    password: (value: string) => passwordRegex.test(value),
    nickname: (value: string) => nameRegex.test(value),
    phonenumber: (value: string) => phoneRegex.test(value),
    birth: (value: string) => birthRegex.test(value),
    gender: (value: string) => value !== "",
  };

  const [formData, errors, onChangeHandler, onUpdateFormData]: [
    FormData,
    Errors,
    ChangeHandler,
    UpdateFormData
  ] = useFormValidation(validationRules);

  useEffect(() => {
    axios
      .post("/member/member/UIS", {
        phonenumber:
          sessionStorage.getItem("phone_number") ||
          localStorage.getItem("phone_number"),
      })
      .then((response) => {
        const dataFromServer = response.data;
        onUpdateFormData({
          email: dataFromServer.email,
          nickname: dataFromServer.myPage.nickname,
          phonenumber: dataFromServer.phonenumber,
          birth: dataFromServer.birth,
          gender: dataFromServer.gender,
        });
      });
  }, []);

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

  const submitHandler = () => {
    axios
      .post("/member/member/UIC", {
        phonenumber: formData.phonenumber,
        email: formData.email, // Include the unchanged email field
        nickname: formData.nickname,
        birth: formData.birth,
        gender: formData.gender,
      })
      .then((response) => {
        // Handle the response if needed
      })
      .catch((error) => {
        // Handle errors if needed
      });
    sessionStorage.setItem("name", formData.nickname);
    localStorage.setItem("name", formData.nickname);
    console.log(sessionStorage.getItem("name"));
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
                <input
                  name="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                  autoFocus
                ></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="nickname">이름</label>
                <input
                  name="nickname"
                  value={formData.nickname}
                  onChange={onChangeHandler}
                ></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="phonenumber">전화번호</label>
                <input
                  name="phonenumber"
                  value={formData.phonenumber}
                  readOnly
                ></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="birth">생년월일</label>
                <input name="gender" value={formData.birth} readOnly></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="gender">성별</label>
                <input name="gender" value={formData.gender} readOnly></input>
              </li>
            </ul>
            <SubmitButton value="수정" onClick={submitHandler} />
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
