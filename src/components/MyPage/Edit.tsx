"use client";
import classes from "@/components/MyPage/styles/Edit.module.scss";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Profile from "@/components/MyPage/Profile";
import SubmitButton from "../UI/SubmitButton";
import Image from "next/image";
import edit from "img/edit.svg";
import { data } from "autoprefixer";
import emailImg from "img/join/email.svg";
import Button from "@/components/UI/Button";
import auth from "img/join/auth.svg";
import { FormData, Errors, ChangeHandler } from "@/hooks/use-formValidation";
import useFormValidation from "@/hooks/use-formValidation";
import React from "react";

export default function Edit() {
  interface Data {
    birth: string;
    email: string;
    gender: string;
    password: string;
    phonenumber: string;
    myPage: {
      nickname: string;
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [userData, setUserData] = useState<Data | null>(null);
  const [editedName, setEditedName] = useState(
    userData?.myPage?.nickname || ""
  );
  const [editedEmail, setEditedEmail] = useState(userData?.email || "");
  const [editedPw, setEditedPw] = useState(userData?.password || "");
  const [isAuthMailBtnDisabled, setAuthMailBtnDisabled] = useState(false);
  const [authNumber, setAuthNumber] = useState("");
  const [authError, setAuthError] = useState(false);
  const [resAuthNumber, setResAuthNumber] = useState("");
  const [isAuthNumberBtnDisabled, setAuthNumberBtnDisabled] = useState(false);
  const validationRules = {
    email: (value: string) => emailRegex.test(value),
  };

  const [formData, errors, onChangeHandler]: [FormData, Errors, ChangeHandler] =
    useFormValidation(validationRules);

  const authChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAuthNumber(event.target.value);
    setAuthError(false);
  };

  const authCheckHandler = () => {
    if (resAuthNumber === "") {
      alert("인증메일을 전송해주세요.");
    } else if (authNumber === "") {
      setAuthError(true);
      alert("인증번호를 입력해주세요.");
    } else if (resAuthNumber !== authNumber) {
      setAuthError(true);
      alert("인증번호가 일치하지 않습니다.");
    } else if (resAuthNumber === authNumber) {
      setAuthError(false);
      alert("인증이 완료되었습니다.");
      setAuthMailBtnDisabled(true);
      setAuthNumberBtnDisabled(true);
    }
  };

  useEffect(() => {
    axios
      .post("/member/member/UIS", {
        phonenumber:
          sessionStorage.getItem("phone_number") ||
          localStorage.getItem("phone_number"),
      })
      .then((response) => {
        const dataFromServer = response.data;
        setUserData(dataFromServer);

        // Set initial values for editedName and editedBirth based on data from the server
        setEditedName(dataFromServer?.myPage?.nickname || "");
        setEditedEmail(dataFromServer?.email || "");
        setEditedPw(sessionStorage.getItem("pw") || "");
      });
  }, []);

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

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedEmail(event.target.value);
  };
  console.log("바뀐 이름 :: " + editedName);
  const handleEditSubmit = () => {
    axios
      .post("/member/member/UIC", {
        phonenumber:
          sessionStorage.getItem("phone_number") ||
          localStorage.getItem("phone_number"),
        email: editedEmail, // Include the unchanged email field
        nickname: editedName,
        password: editedPw,
        birth: userData?.birth || "",
        gender: userData?.birth || "",
      })
      .then((response) => {
        // Handle the response if needed
      })
      .catch((error) => {
        // Handle errors if needed
      });
    sessionStorage.setItem("name", editedName),
      localStorage.setItem("name", editedName);
    console.log(sessionStorage.getItem("name"));
  };

  function authEmailHandler() {
    console.log("눌림");
    axios
      .post("member/member/EmailCheck", { email: formData.email })
      .then((res) => {
        // 중복 아니면 res = 'yes'
        if (res.data === "yes") {
          axios
            .post("member/member/auth-email", {
              email: formData.email,
            })
            .then((res) => {
              setResAuthNumber(res.data.toString());
            })
            .catch();
          alert("인증메일을 보냈습니다.");
          setAuthMailBtnDisabled(true);
        } else {
          alert(
            "이미 Aily에 가입한 이메일입니다.\n다른 이메일로 다시 시도해주세요."
          );
        }
      })
      .catch()
      .finally(() => {
        setTimeout(() => {
          setAuthMailBtnDisabled(false);
        }, 10000);
      });
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "1100px",
          height: "875px",
        }}
      >
        <div className={classes.box}>
          <p className={classes.title}>내 정보 수정</p>
          <form>
            <ul className={classes.edit}>
              <li className={classes.data}>
                <label htmlFor="phonenumber">전화번호</label>
                <input
                  name="phonenumber"
                  value={userData?.phonenumber || ""}
                  readOnly
                />
              </li>

              {/* <li className={classes.data}> */}
              <div className={classes.data}>
                <li>
                  <label htmlFor="email">기존 이메일</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={onChangeHandler}
                  />
                  <SubmitButton
                    value="인증메일 전송"
                    color={"#f8b195"}
                    onClick={authEmailHandler}
                  />
                </li>
              </div>
              {/* </li> */}
              <li>
                <div className={classes.form_control}>
                  <input
                    type="text"
                    placeholder="인증번호 입력"
                    className={classes.input}
                    value={authNumber}
                    onChange={authChangeHandler}
                    disabled={isAuthNumberBtnDisabled}
                  />
                  <Button
                    value="확인"
                    color={"#D9D9D9"}
                    onClick={authCheckHandler}
                    disabled={isAuthNumberBtnDisabled}
                  />
                </div>
              </li>
              <li className={classes.data}>
                <label htmlFor="name">이름</label>
                {/* Make the name field editable */}
                <input
                  name="name"
                  value={editedName}
                  onChange={handleNicknameChange}
                />
              </li>
              <li className={classes.data}>
                <label htmlFor="birth">생년월일</label>
                <input name="birth" value={userData?.birth || ""} readOnly />
              </li>
              <li className={classes.data}>
                <label htmlFor="gender">성별</label>
                <input name="gender" value={userData?.gender || ""} readOnly />
              </li>
            </ul>
            <SubmitButton value="수정" onClick={handleEditSubmit} />
          </form>
        </div>
        <div style={{ marginTop: "88px" }}>{/* ... (Previous code) */}</div>
      </div>
    </>
  );
}
