"use client";
import classes from "@/app/join/Join.module.scss";
import CopyRight from "@/components/UI/Copyright";
import Link from "next/link";
import lock from "img/join/lock.svg";
import user from "img/join/user.svg";
import calendar from "img/join/calendar.svg";
import emailImg from "img/join/email.svg";
import auth from "img/join/auth.svg";
import genderImg from "img/join/gender.svg";
import phone from "img/join/phone-solid.svg";
import Button from "@/components/UI/Button";
import eyeOn from "img/join/eye-on.svg";
import eyeOff from "img/join/eye-off.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import logo from "img/join/aily_logo.svg";
import ErrorText from "@/components/UI/ErrorText";
import useFormValidation, { UpdateFormData } from "@/hooks/use-formValidation";
import axios from "axios";
import Image from "next/image";
import SubmitButton from "@/components/UI/SubmitButton";
import { FormData, Errors, ChangeHandler } from "@/hooks/use-formValidation";
import { validationRules } from "@/app/join/validation_rules";

function Join(): JSX.Element {
  // const domain = "https://ailymit.store";
  const domain = "";
  const [passwordShown, setPasswordShown] = useState(false);

  const [authNumber, setAuthNumber] = useState("");
  const [resAuthNumber, setResAuthNumber] = useState("");
  const [authError, setAuthError] = useState(false);
  const [isAuthMailBtnDisabled, setAuthMailBtnDisabled] = useState(false);
  const [isAuthNumberBtnDisabled, setAuthNumberBtnDisabled] = useState(false);

  function passwordEyeHandler() {
    setPasswordShown((prev) => !prev);
  }

  const [formData, errors, onChangeHandler]: [
    FormData,
    Errors,
    ChangeHandler,
    UpdateFormData
  ] = useFormValidation(validationRules);

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

  const joinHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !errors.email &&
      !errors.password &&
      !errors.birth &&
      !errors.nickname &&
      !errors.gender &&
      !errors.phonenumber &&
      !authError &&
      formData.email &&
      formData.password &&
      formData.nickname &&
      formData.birth &&
      formData.gender &&
      formData.phonenumber
    ) {
      axios
        .post(`${domain}/member/member/join`, {
          email: formData.email,
          password: formData.password,
          nickname: formData.nickname,
          birth: formData.birth,
          gender: formData.gender,
          phonenumber: formData.phonenumber,
        })
        .then(() => {
          alert("회원가입이 완료되었습니다.");
          document.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
          alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
        });
    } else {
      alert("입력 정보를 다시 확인해주세요.");
    }
  };

  function authEmailHandler() {
    axios
      .post(`${domain}/member/member/EmailCheck`, {
        email: formData.email,
      })
      .then((res) => {
        // 중복 아니면 res = 'yes'
        if (res.data === "yes") {
          axios
            .post(`${domain}/member/member/auth-email`, {
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

  function checknickname() {
    axios
      .get(`${domain}member/member/ChNick/${formData.nickname}`)
      .then((res) => {
        // 중복 아니면 res = 'yes'
        if (res.data === "yes") {
          alert("사용이 가능합니다!");
        } else {
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
      <main className={classes.main}>
        <Link href="/" className={classes.title}>
          <Image src={logo} alt="aily" />
        </Link>
        <form onSubmit={joinHandler} className={classes.form}>
          <div className={classes.section1}>
            <div className={classes.form_control}>
              <Image src={emailImg} width={25} alt="@" />
              <input
                placeholder="이메일"
                className={classes.short_input}
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                disabled={isAuthMailBtnDisabled}
              />
              <Button
                value="인증메일 전송"
                color={"#f8b195"}
                onClick={authEmailHandler}
                disabled={isAuthMailBtnDisabled}
              />
            </div>
            <div className={classes.form_control}>
              <Image src={auth} width={25} alt="auth" />
              <input
                type="text"
                placeholder="인증번호 입력"
                className={classes.short_input}
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
            <div className={classes.form_control}>
              <Image src={lock} width={25} alt="password" />
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="비밀번호"
                className={classes.input}
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
              />
              <Image
                src={passwordShown ? eyeOn : eyeOff}
                alt="eye"
                onClick={passwordEyeHandler}
              />
            </div>
          </div>
          <div className={classes.error_area1}>
            {errors.email && (
              <ErrorText text="· 이메일: 올바른 이메일 형식을 입력해주세요." />
            )}
            {authError && (
              <ErrorText text="· 인증번호: 인증번호가 일치하지 않습니다." />
            )}
            {errors.password && (
              <ErrorText text="· 비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요." />
            )}
          </div>
          <div className={classes.section2}>
            <div className={classes.form_control}>
              <Image src={user} width={25} alt="name" />
              <input
                type="text"
                placeholder="이름"
                className={classes.short_input}
                name="nickname"
                value={formData.nickname}
                onChange={onChangeHandler}
              />
              <Button
                value="이름 중복 확인"
                color={"#f8b195"}
                onClick={checknickname}
              />
            </div>
            <div className={classes.form_control}>
              <Image src={phone} width={25} alt="phone" />
              <input
                placeholder="휴대폰 번호"
                className={classes.input}
                name="phonenumber"
                value={formData.phonenumber}
                onChange={onChangeHandler}
              />
            </div>
            <div className={classes.form_control}>
              <Image src={calendar} width={25} alt="calendar" />
              <input
                placeholder="생년월일 8자"
                className={classes.input}
                name="birth"
                value={formData.birth}
                onChange={onChangeHandler}
              />
            </div>
            <div className={classes.form_control}>
              <Image src={genderImg} width={25} alt="gender" />
              <select
                className={classes.input}
                value={formData.gender}
                onChange={onChangeHandler}
                name="gender"
              >
                <option value="" disabled>
                  성별
                </option>
                <option value="M">남자</option>
                <option value="F">여자</option>
              </select>
            </div>
          </div>
          <div className={classes.error_area2}>
            {errors.nickname && (
              <ErrorText text="· 이름: 이름을 입력해주세요." />
            )}
            {errors.phonenumber && (
              <ErrorText text="· 전화번호: 올바른 전화번호를 입력해주세요." />
            )}
            {errors.birth && (
              <ErrorText text="· 생년월일: 생년월일을 다시 확인해주세요." />
            )}
          </div>
          <SubmitButton value="회원가입" />
        </form>
        <CopyRight />
      </main>
    </>
  );
}

export default Join;
