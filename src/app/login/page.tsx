"use client";
import classes from "@/app/login/Login.module.scss";
import emailImg from "img/join/email.svg";
import lock from "img/join/lock.svg";
import Link from "next/link";
import Image from "next/image";
import Copyright from "@/components/UI/Copyright";
import axios from "axios";
import useInput from "@/hooks/use-input";
import logo from "img/join/aily_logo.svg";
import { useState } from "react";
import SubmitButton from "@/components/UI/SubmitButton";

function Login() {
  const email = useInput("");
  const password = useInput("");
  const [ischecked, setChecked] = useState(false);

  function loginHandler(event: any) {
    event.preventDefault();

    console.log("click login");
    console.log("EMAIL: ", email.value);
    console.log("PW: ", password.value);

    axios
      .post("/member/member/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        console.log(res);
        if (res.data.email === email.value) {
          if (res.data.password === "") {
            console.log("======================", "로그인 성공");
            if (ischecked) {
              localStorage.setItem("user_email", email.value);
              localStorage.setItem("name", res.data.nickname);
              localStorage.setItem("phone_number", res.data.phonenumber);
              sessionStorage.setItem("loginok", "ok");
            } else {
              sessionStorage.setItem("user_email", email.value);
              sessionStorage.setItem("name", res.data.nickname);
              sessionStorage.setItem("phone_number", res.data.phonenumber);
              sessionStorage.setItem("loginok", "ok");
            }
            document.location.href = "/";
          } else {
            console.log(
              "======================",
              "입력하신 비밀번호 가 일치하지 않습니다."
            );
            alert("입력하신 비밀번호가 일치하지 않습니다.");
          }
        } else if (res.data.email === "Faild") {
          console.log(
            "======================",
            "입력하신 email이 일치하지 않습니다."
          );
          alert("입력하신 email이 일치하지 않습니다.");
        }
      })
      .catch();
  }

  function checkClickHandler() {
    setChecked(!ischecked);
  }
  return (
    <>
      <main className={classes.main}>
        <Link href="/">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className={classes.logo}
          />
        </Link>
        <div className={classes.login}>
          <form className={classes.form}>
            <div className={classes.form_list}>
              <div className={classes.div}>
                <Image src={emailImg} width={25} alt="id" />
                <input
                  className={classes.input}
                  type="id"
                  placeholder="이메일"
                  name="email"
                  {...email}
                />
              </div>
              <div className={classes.div}>
                <Image src={lock} width={25} alt="password" />
                <input
                  className={classes.input}
                  type="password"
                  placeholder="비밀번호"
                  name="password"
                  {...password}
                />
              </div>
            </div>
            <div className={classes.check_wrap}>
              <input
                type="checkbox"
                id={classes.check_btn}
                checked={ischecked}
              />
              <label htmlFor="check_btn" onClick={checkClickHandler}>
                <span>로그인 상태 유지</span>
              </label>
            </div>
            <SubmitButton value="로그인" onClick={loginHandler} />
          </form>
          <div className={classes.move}>
            <div className={classes.find}>
              <Link href={"#"}>아이디 찾기</Link>
              <Link href={"#"}>비밀번호 찾기</Link>
            </div>
            <Link href="/join">회원가입</Link>
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
}

export default Login;
