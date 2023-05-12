import classes from "./Join.module.css";
import CopyRight from "../components/Copyright";
import { Link } from "react-router-dom";
import lock from "../img/login/lock.svg";
import lockCheck from "../img/join/lock-check.svg";
import user from "../img/login/user.svg";
import calendar from "../img/join/calendar.svg";
import emailImg from "../img/join/email.svg";
import genderImg from "../img/join/venus-mars-solid.svg";
import phone from "../img/join/phone-solid.svg";
import IconBox from "../components/UI/IconBox";
import Button from "../components/UI/Button";
import useInput from "../hooks/use-input";
import { useEffect } from "react";
import Password from "../components/Join/Password";

function Join() {
  const email = useInput("");
  const nickname = useInput("");
  const birth = useInput("");
  const year = useInput("");
  const month = useInput("");
  const day = useInput("");
  const gender = useInput("");

  useEffect(() => {
    console.log(gender.value);
  }, [gender.value]);

  return (
    <>
      <main className={classes.main}>
        <Link to="/" className={classes.title}>
          Aily
        </Link>

        <h3 className={classes.h3}>회원 정보를 입력해주세요.</h3>
        <div className={classes.join}>
          <form className={classes.form}>
            <div className={classes.formControl}>
              <IconBox img={emailImg} />
              <input
                placeholder="이메일"
                className={classes.input}
                name="email"
                {...email}
              />
              <Button value="인증" />
            </div>

            <div className={classes.formControl}>
              <IconBox img={lock} />
              <Password placeholder={"비밀번호"} name="password" />
            </div>

            <div className={classes.formControl}>
              <IconBox img={lockCheck} />
              <Password placeholder={"비밀번호 확인"} name="checkPassword" />
            </div>

            <div className={classes.formControl}>
              <IconBox img={user} />
              <input
                type="text"
                placeholder="이름"
                className={`${classes.input} ${classes.longInput}`}
                name="nickname"
                {...nickname}
              />
            </div>

            <div className={classes.formControl}>
              <IconBox img={phone} />
              <input
                placeholder="전화번호 입력"
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
                  {...year}
                />
                <input
                  type="number"
                  placeholder="월"
                  className={classes.input}
                  {...month}
                />
                <input
                  type="number"
                  placeholder="일"
                  className={classes.input}
                  {...day}
                />
              </div>
            </div>

            <div className={classes.formControl}>
              <IconBox img={genderImg} />
              <select
                className={`${classes.input} ${classes.longInput}`}
                {...gender}
              >
                <option defaultChecked>성별</option>
                <option value="M">남자</option>
                <option value="F">여자</option>
              </select>
            </div>

            <input type="submit" value="회원가입" id={classes.submit} />
          </form>
        </div>
        <CopyRight />
      </main>
    </>
  );
}

export default Join;
