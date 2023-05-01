import classes from "./Login.module.css";
import { useState } from "react";

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
        <h1 className={classes.title}>로그인</h1>
        <div className={classes.login}>
          <form>
            <input
              type="id"
              placeholder="아이디"
              value={id}
              onChange={idChangeHandler}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={passwordChangeHandler}
            />
            <input
              type="submit"
              value="로그인"
              id={classes.submit}
              onClick={loginHandler}
            />
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
