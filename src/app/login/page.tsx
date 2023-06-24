"use client";
import classes from "./Login.module.css";
import user from "img/join/user.svg";
import lock from "img/join/lock.svg";
import Link from "next/link";
import Image from "next/image";
import Copyright from "@/components/Copyright";
import axios from "axios";
import useInput from "@/hooks/use-input";
import logo from "img/aily_logo.svg";

function Login() {
  const email = useInput("");
  const password = useInput("");

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
            sessionStorage.setItem("user_email", email.value); // sessionStorage에 email를 user_email라는 key 값으로 저장
            sessionStorage.setItem("name", res.data.nickname); // sessionStorage에 email를 user_email라는 key 값으로 저장
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
            <div className={classes.div}>
              <Image src={user} alt="id" className={classes.img} />
              <input
                className={classes.input}
                type="id"
                placeholder="이메일"
                name="email"
                {...email}
              />
            </div>
            <div className={classes.div}>
              <Image src={lock} alt="password" className={classes.img} />
              <input
                className={classes.input}
                type="password"
                placeholder="비밀번호"
                name="password"
                {...password}
              />
            </div>
            <input
              type="submit"
              value="로그인"
              id={classes.submit}
              onClick={loginHandler}
            />
          </form>
          <div className={classes.move}>
            <div className={classes.find}>
              <Link href={"#"}>아이디 찾기</Link>
              <Link href={"#"}>비밀번호 찾기</Link>
              <Link href="/join">회원가입</Link>
            </div>
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
}

export default Login;
