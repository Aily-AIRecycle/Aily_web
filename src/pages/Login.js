import classes from "./Login.module.css";
import { useState } from "react";
import user from "../img/login/user.svg";
import lock from "../img/login/lock.svg";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // console.log(id);

  function loginHandler(event) {
    event.preventDefault();

    if (!id) {
      console.log("id를 입력하세요");
    } else if (!password) {
      console.log("password를 입력하세요");
    }
  }

  function idChangeHandler(event) {
    setId(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
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
                placeholder="아이디 또는 이메일"
                value={id}
                onChange={idChangeHandler}
              />
            </div>
            <div className={classes.div}>
              <img src={lock} alt="password" width="25px" />
              <input
                className={classes.input}
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={passwordChangeHandler}
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
