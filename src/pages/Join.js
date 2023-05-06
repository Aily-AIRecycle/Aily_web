import classes from "./Join.module.css";

function Join() {
  return (
    <>
      <main className={classes.main}>
        <h1 className={classes.title}>회원가입</h1>
        <div className={classes.join}>
          <form>
            <input type="id" placeholder="아이디" className={classes.input} />
            <input
              type="password"
              placeholder="비밀번호"
              className={classes.input}
            />
            <input type="text" placeholder="이름" className={classes.input} />
            <input
              type="number"
              placeholder="년 (4자)"
              className={classes.input}
            />
            <input type="number" placeholder="월" className={classes.input} />
            <input type="number" placeholder="일" className={classes.input} />
            <select>
              <option selected>성별</option>
              <option value="M">남자</option>
              <option value="F">여자</option>
            </select>
            <input placeholder="전화번호 입력" className={classes.input} />
            <input type="submit" value="회원가입" className={classes.input} />
          </form>
        </div>
      </main>
    </>
  );
}

export default Join;
