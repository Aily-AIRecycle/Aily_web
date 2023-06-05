import classes from "./Join.module.css";
import CopyRight from "../components/Copyright";
import { Link } from "react-router-dom";
import lock from "img/login/lock.svg";
import lockCheck from "img/join/lock-check.svg";
import user from "img/login/user.svg";
import calendar from "img/join/calendar.svg";
import emailImg from "img/join/email.svg";
import genderImg from "img/join/venus-mars-solid.svg";
import phone from "img/join/phone-solid.svg";
import IconBox from "@/components/UI/IconBox";
import Button from "@/components/UI/Button";
import eyeOn from "img/join/eye-on.svg";
import eyeOff from "img/join/eye-off.svg";
import { useEffect, useState } from "react";
import titleLogo from "img/title_logo.svg";
import ErrorText from "@/components/UI/ErrorText";
import useFormValidation from "@/hooks/use-formValidation";

function Join(): JSX.Element
{
  const [passwordShown, setPasswordShown] = useState(false);
  const [checkPasswordShown, setCheckPasswordShown] = useState(false);

  function passwordEyeHandler(): void
  {
    setPasswordShown((prev) => !prev);
  }

  function passwordCheckEyeHandler(): void
  {
    setCheckPasswordShown((prev) => !prev);
  }

  const checkPassword = (v: string): boolean =>
  {
    if (formData.password === v)
    {
      return true;
    } else
    {
      return false;
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  const nameRegex = /^[a-zA-Z가-힣]{2,50}$/;
  const phoneRegex = /^01(?:0|1|[6-9])\d{4}\d{4}$/;
  const birthRegex =
    /^(?:(?:19|20)\d{2})(?:(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1\d|2[0-8]))|(?:02(?:29))|(?:(?:0[13-9]|1[0-2])(?:29|30))|(?:0[13578]|1[02])31)$/;

  const validationRules = {
    email: (value: string) => emailRegex.test(value),
    password: (value: string) => passwordRegex.test(value),
    checkPassword: (value: string) => checkPassword(value),
    nickname: (value: string) => nameRegex.test(value),
    phonenumber: (value: string) => phoneRegex.test(value),
    birth: (value: string) => birthRegex.test(value),
    gender: () => { },
  };

  const [formData, errors, onChangeHandler] = useFormValidation<string>(
    validationRules
  );

  // 값 변화에 따라 콘솔에 출력
  useEffect(() =>
  {
    console.log(formData);
    console.log(errors);
  }, [formData, errors]);

  useEffect(() =>
  {
    console.log(errors);
  }, [errors]);

  function joinHander(event: React.FormEvent<HTMLFormElement>): void
  {
    event.preventDefault();
    return;
  }

  return (
    <>
      <main className={classes.main}>
        <Link to="/" className={classes.title}>
          <img src={titleLogo} alt="aily" className={classes.logo} />
        </Link>
        <div className={classes.join}>
          <div className={classes.sub_title}>
            <h3 className={classes.h3}>회원 정보를 입력해주세요.</h3>
          </div>
          <form className={classes.form} onSubmit={joinHander}>
            <div className={classes.formControl}>
              <IconBox img={emailImg} />
              <input
                placeholder="이메일"
                className={`${classes.input} ${classes.shortInput}`}
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
              />
              <Button value="인증" />
            </div>
            {errors.email && (
              <ErrorText text="올바른 이메일 형식을 입력해주세요." />
            )}
            <div className={classes.formControl}>
              <IconBox img={lock} />
              <div className={classes.password}>
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="비밀번호"
                  className={classes.password_input}
                  name="password"
                  value={formData.password}
                  onChange={onChangeHandler}
                />
                <img
                  src={passwordShown ? eyeOn : eyeOff}
                  alt=""
                  width="20px"
                  onClick={passwordEyeHandler}
                />
              </div>
            </div>
            {errors.password && (
              <ErrorText text="비밀번호는 8자리 이상, 16자 이하여야 합니다." />
            )}
            {errors.password && (
              <ErrorText text="영문/숫자/특수문자(공백 제외)를 포함하여야 합니다." />
            )}
            <div className={classes.formControl}>
              <IconBox img={lockCheck} />
              <div className={classes.password}>
                <input
                  type={checkPasswordShown ? "text" : "password"}
                  placeholder="비밀번호 확인"
                  className={classes.password_input}
                  name="checkPassword"
                  value={formData.checkPassword}
                  onChange={onChangeHandler}
                />
                <img
                  src={checkPasswordShown ? eyeOn : eyeOff}
                  alt=""
                  width="20px"
                  onClick={passwordCheckEyeHandler}
                />
              </div>
            </div>
            {errors.checkPassword && (
              <ErrorText text="비밀번호가 일치하지 않습니다." />
            )}
            <div className={classes.formControl}>
              <IconBox img={user} />
              <input
                type="text"
                placeholder="이름"
                className={`${classes.input} ${classes.longInput}`}
                name="nickname"
                value={formData.nickname}
                onChange={onChangeHandler}
              />
            </div>
            {errors.nickname && <ErrorText text="이름을 입력해주세요." />}
            <div className={classes.formControl}>
              <IconBox img={phone} />
              <input
                placeholder="휴대폰 번호 입력"
                className={classes.input}
                name="phonenumber"
                value={formData.phonenumber}
                onChange={onChangeHandler}
              />
            </div>
            {errors.phonenumber && (
              <ErrorText text="올바른 휴대폰 번호를 입력해주세요." />
            )}
            <div className={classes.formControl}>
              <IconBox img={calendar} />
              <input
                placeholder="생년월일 8자 입력"
                className={classes.input}
                name="birth"
                value={formData.birth}
                onChange={onChangeHandler}
              />
            </div>
            {errors.birth && <ErrorText text="생년월일을 다시 확인해주세요." />}
            {/* 성별은 선택사항 */}
            <div className={classes.formControl}>
              <IconBox img={genderImg} />
              <select
                className={classes.input}
                value={formData.gender}
                onChange={onChangeHandler}
                name="gender"
              >
                <option value="" disabled>
                  성별
                </option>
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
