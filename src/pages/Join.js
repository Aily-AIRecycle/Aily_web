import classes from "./Join.module.css";
import CopyRight from "../components/Copyright";
import { Link } from "react-router-dom";
import idCard from "../img/join/id-card-solid.svg";
import lock from "../img/login/lock.svg";
import lockCheck from "../img/join/lock-check.svg";
import user from "../img/login/user.svg";
import calendar from "../img/join/calendar.svg";
import email from "../img/join/email.svg";
import IconBox from "../components/UI/IconBox";
import Button from "../components/UI/Button";

function Join() {
  return (
    <>
      <main className={classes.main}>
        <Link to="/" className={classes.title}>
          Aily
        </Link>

        <h3 className={classes.h3}>회원가입</h3>
        <div className={classes.join}>
          <form className={classes.form}>
            <div className={classes.formControl}>
              <IconBox img={idCard} />
              <input
                type="id"
                placeholder="아이디 (이메일)"
                className={classes.input}
              />
              <Button value="중복확인" />
            </div>
            <div className={classes.formControl}>
              <IconBox img={lock} />
              <input
                type="password"
                placeholder="비밀번호"
                className={`${classes.input} ${classes.longInput}`}
              />
            </div>
            <div className={classes.formControl}>
              <IconBox img={lockCheck} />
              <input
                type="password"
                placeholder="비밀번호 확인"
                className={`${classes.input} ${classes.longInput}`}
              />
            </div>
            <div className={classes.formControl}>
              <IconBox img={user} />
              <input
                type="text"
                placeholder="이름"
                className={`${classes.input} ${classes.longInput}`}
              />
            </div>
            <div className={classes.formControl}>
              <IconBox img={calendar} />
              <div className={classes.birth}>
                <input
                  type="number"
                  placeholder="년 (4자)"
                  className={classes.input}
                />
                <input
                  type="number"
                  placeholder="월"
                  className={classes.input}
                />
                <input
                  type="number"
                  placeholder="일"
                  className={classes.input}
                />
              </div>
            </div>
            {/* <select>
              <option defaultChecked>성별</option>
              <option value="M">남자</option>
              <option value="F">여자</option>
            </select> */}
            <div className={classes.formControl}>
              <IconBox img={email} />
              <input placeholder="이메일" className={classes.input} />
              <Button value="인증" />
            </div>
            {/* <input placeholder="전화번호 입력" className={classes.input} /> */}
            <input type="submit" value="회원가입" id={classes.submit} />
          </form>
        </div>
        <CopyRight />
      </main>
    </>
  );
}

export default Join;
