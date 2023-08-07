"use client";
import Profilecopy from "@/components/MyPage/Profilecopy";
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
import Button from "@/components/UI/Button";
import useFormValidation, {
  Errors,
  ChangeHandler,
  UpdateFormData,
} from "@/hooks/use-formValidation";

export default function Edit() {
  useEffect(() => {
    // Set "CUN" item in sessionStorage
    sessionStorage.setItem("CUN", "error");
  }, []);
  // 사용자가 설정한 사진 또는 서버에서 가저온 사진 url
  const imgUrl = useSelector((state: any) => state.image.imageUrl);
  // const [imgUrl, setImgUrl] = useState(null);
  const [loadImgUrl, setLoadImgUrl] = useState<string | null>(null);
  const [serverLoadImgUrl, setServerLoadImgUrl] = useState<string | null>(null);
  const [showBox, setShowBox] = useState(false);
  const dispatch = useDispatch();
  const showModal = useSelector((state: any) => state.cropModal.showModal);
  const [isAuthMailBtnDisabled, setAuthMailBtnDisabled] = useState(false);
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
    any,
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

  const submitHandler = async () => {
    const formdata = new FormData();
    if (!loadImgUrl) {
      if (sessionStorage.getItem("CUN") == "yes") {
        axios
          .post("/member/member/UIC", {
            phonenumber: formData.phonenumber,
            email: formData.email, // Include the unchanged email field
            nickname: formData.nickname,
            birth: formData.birth,
            gender: formData.gender,
          })
          .then((response) => {})
          .catch((error) => {
            // Handle errors if needed
          });
        sessionStorage.setItem("name", formData.nickname);
        localStorage.setItem("name", formData.nickname);
        alert("이름 변경이 완료 되었습니다.");
      }
      return;
    } else if (sessionStorage.getItem("CUN") == "yes" && loadImgUrl) {
      const blob = await fetch(imgUrl).then((res) => res.blob());
      formdata.append("image", blob);
      axios
        .post("/member/member/UIC", {
          phonenumber: formData.phonenumber,
          email: formData.email, // Include the unchanged email field
          nickname: formData.nickname,
          birth: formData.birth,
          gender: formData.gender,
        })
        .then((response) => {})
        .catch((error) => {
          // Handle errors if needed
        });

      axios
        .post(`/member/member/upload/${formData.nickname}`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
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

      alert("내 정보 수정이 완료 되었습니다.");
      sessionStorage.setItem("cropimage", "no");
    } else if (loadImgUrl) {
      const blob = await fetch(imgUrl).then((res) => res.blob());
      formdata.append("image", blob);
      axios
        .post(`/member/member/upload/${formData.nickname}`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
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
      alert("사진 변경이 되었습니다.");
    } else if (sessionStorage.getItem("CUN") == "no") {
      alert("아이디가 중복됩니다. 다시 시도 해주세요");
    } else if (sessionStorage.getItem("CUN") == "error") {
      alert("아이디가 중복됩니다. 다시 시도 해주세요1");
    }
  };
  console.log("imaUrl :::::" + imgUrl);
  console.log("/member/member/upload/" + formData.nickname);

  function checknickname() {
    axios
      .get("/member/member/ChNick/" + formData.nickname)
      .then((res) => {
        // 중복 아니면 res = 'yes'
        if (res.data === "yes") {
          sessionStorage.setItem("CUN", "yes");
          alert("사용이 가능합니다!");
        } else if (res.data === "no") {
          sessionStorage.setItem("CUN", "no");
          alert("이름이 중복됩니다. 다른 이름을 사용해 주세요.");
        }
      })
      .catch()
      .finally(() => {
        setTimeout(() => {
          setAuthMailBtnDisabled(false);
        }, 10000);
      });
    console.log("dddddd" + "member/member/ChNick/" + formData.nickname);
  }

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
                <Button
                  value="이름 중복 확인"
                  color={"#f8b195"}
                  onClick={checknickname}
                />
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
          <Profilecopy src={imgUrl} />
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
              <form encType="multipart/form-data">
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  name="image"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </form>

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
