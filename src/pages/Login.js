import classes from "./Login.module.css";

function Login() {
  return (
    <>
      <main className={classes.main}>
        <h1 className={classes.title}>로그인</h1>

        <div className={classes.login}>
          <form>
            <input type="id" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <input type="submit" value="로그인" id={classes.submit} />
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
