import classes from "./Login.module.css";
import user from "../img/login/user.svg";
import lock from "../img/login/lock.svg";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";
import axios from "axios";
import useInput from "../hooks/use-input";

function Login() {
  const email = useInput("");
  const password = useInput("");

  function loginHandler(event) {
    event.preventDefault();

    console.log("click login");
    console.log("EMAIL: ", email.value);
    console.log("PW: ", password.value);

    axios
      .post("http://localhost:8080/member/login", {
        email: email.value,
        passwd: password.value,
      })
      .then((res) => {
        console.log(res);
        console.log("res.data.email :: ", res.data.email);
        console.log("res.data.msg :: ", res.data.msg);
        if (res.data.email === undefined) {
          // email 일치하지 않는 경우 userId = undefined, msg = '입력하신 email이 일치하지 않습니다.'
          console.log("======================", res.data.msg);
          alert("입력하신 email이 일치하지 않습니다.");
        } else if (res.data.email === null) {
          // email 있지만, pw 는 다른 경우 userId = null , msg = undefined
          console.log(
            "======================",
            "입력하신 비밀번호 가 일치하지 않습니다."
          );
          alert("입력하신 비밀번호 가 일치하지 않습니다.");
        } else if (res.data.email === email) {
          // email, pw 모두 일치 userId = userId1, msg = undefined
          console.log("======================", "로그인 성공");
          sessionStorage.setItem("user_email", email.value); // sessionStorage에 email를 user_email라는 key 값으로 저장
          sessionStorage.setItem("name", res.data.name); // sessionStorage에 email를 user_email라는 key 값으로 저장
        }
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = "/";
      })
      .catch();
  }

  return (
    <>
      <main className={classes.main}>
        <Link to="/" className={classes.title}>
          Aily
        </Link>
        <div className={classes.login}>
          <form>
            <div className={classes.div}>
              <img src={user} alt="id" width="25px" />
              <input
                className={classes.input}
                type="id"
                placeholder="이메일"
                name="email"
                value={email.value}
                {...email}
              />
            </div>
            <div className={classes.div}>
              <img src={lock} alt="password" width="25px" />
              <input
                className={classes.input}
                type="password"
                placeholder="비밀번호"
                name="password"
                value={password.value}
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
              <Link>아이디 찾기</Link>
              <Link>비밀번호 찾기</Link>
            </div>
            <div>
              <Link to="/join">회원가입</Link>
            </div>
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
}

export default Login;
