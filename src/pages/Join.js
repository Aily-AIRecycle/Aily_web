import classes from "./Join.module.css";

function Join() {
  return (
    <>
      <main className={classes.main}>
        <h1 className={classes.title}>회원가입</h1>
        <div className={classes.join}>
          <form>
            <input type="id" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <input type="text" placeholder="이름" />
            <input type="number" placeholder="년 (4자)" />
            <input type="number" placeholder="월" />
            <input type="number" placeholder="일" />
            <select>
              <option selected>성별</option>
              <option value="M">남자</option>
              <option value="F">여자</option>
            </select>
            <input placeholder="전화번호 입력" />
            <input type="submit" value="회원가입" />
          </form>
        </div>
      </main>
    </>
  );
}

export default Join;
