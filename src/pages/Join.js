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
import eyeOn from "../img/join/eye-on.svg";
import eyeOff from "../img/join/eye-off.svg";
import { useEffect, useState } from "react";
import titleLogo from "../img/title_logo.svg";
import ErrorText from "../components/UI/ErrorText";

function Join() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [checkPasswordShown, setCheckPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checkPassword: "",
    nickname: "",
    phonenumber: "",
    birth: "",
    gender: "",
  });

  const [hasErrors, setHasErros] = useState({
    email: false,
    password: false,
    checkPassword: false,
    nickname: false,
    phonenumber: false,
    birth: false,
    gender: false,
  });

  function passwordEyeHandler() {
    setPasswordShown((prev) => !prev);
  }
  function passwordCheckEyeHandler() {
    setCheckPasswordShown((prev) => !prev);
  }

  // 값 변화에 따라 콘솔에 출력
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    console.log(hasErrors);
  }, [hasErrors]);

  console.log("re");
  const onChangeEmail = (e) => {
    // 이메일 검사: 올바른 형식이어야 함
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (!emailRegex.test(value)) {
      setHasErros({ ...hasErrors, [name]: true });
    } else {
      setHasErros({ ...hasErrors, [name]: false });
    }
  };

  const onChangePassword = (e) => {
    // 8자 이상, 16자 이하의 비밀번호
    const passwordRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (!passwordRegex.test(value)) {
      setHasErros({ ...hasErrors, password: true });
    } else {
      setHasErros({ ...hasErrors, password: false });
    }
  };

  const onChangeCheckPassword = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formData.password !== value) {
      setHasErros({ ...hasErrors, checkPassword: true });
    } else {
      setHasErros({ ...hasErrors, checkPassword: false });
    }
  };

  const onChangeName = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.trim() === "") {
      setHasErros({ ...hasErrors, nickname: true });
    } else {
      setHasErros({ ...hasErrors, nickname: false });
    }
  };

  const onChangePhone = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const phoneRegex = /^01(?:0|1|[6-9])\d{4}\d{4}$/;
    if (!phoneRegex.test(value)) {
      setHasErros({ ...hasErrors, phonenumber: true });
    } else {
      setHasErros({ ...hasErrors, phonenumber: false });
    }
  };

  const onChangeBirth = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const birthRegex =
      /^(?:(?:19|20)\d{2})(?:(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1\d|2[0-8]))|(?:02(?:29))|(?:(?:0[13-9]|1[0-2])(?:29|30))|(?:0[13578]|1[02])31)$/;
    if (!birthRegex.test(value)) {
      setHasErros({ ...hasErrors, birth: true });
    } else {
      setHasErros({ ...hasErrors, birth: false });
    }
  };

  const onChangeGender = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function joinHander(event) {
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
                onChange={onChangeEmail}
              />
              <Button value="인증" />
            </div>
            {hasErrors.email && (
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
                  onChange={onChangePassword}
                />
                <img
                  src={passwordShown ? eyeOn : eyeOff}
                  alt=""
                  width="20px"
                  onClick={passwordEyeHandler}
                />
              </div>
            </div>
            {hasErrors.password && (
              <ErrorText text="비밀번호는 8자리 이상, 16자 이하여야 합니다." />
            )}
            {hasErrors.password && (
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
                  onChange={onChangeCheckPassword}
                />
                <img
                  src={checkPasswordShown ? eyeOn : eyeOff}
                  alt=""
                  width="20px"
                  onClick={passwordCheckEyeHandler}
                />
              </div>
            </div>
            {hasErrors.checkPassword && (
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
                onChange={onChangeName}
              />
            </div>
            {hasErrors.nickname && <ErrorText text="이름을 입력해주세요." />}
            <div className={classes.formControl}>
              <IconBox img={phone} />
              <input
                placeholder="휴대폰 번호 입력"
                className={classes.input}
                name="phonenumber"
                value={formData.phonenumber}
                onChange={onChangePhone}
              />
            </div>
            {hasErrors.phonenumber && (
              <ErrorText text="올바른 휴대폰 번호를 입력해주세요." />
            )}
            <div className={classes.formControl}>
              <IconBox img={calendar} />
              <input
                placeholder="생년월일 8자 입력"
                className={classes.input}
                name="birth"
                value={formData.birth}
                onChange={onChangeBirth}
              />
            </div>
            {hasErrors.birth && (
              <ErrorText text="생년월일을 다시 확인해주세요." />
            )}
            {/* 성별은 선택사항 */}
            <div className={classes.formControl}>
              <IconBox img={genderImg} />
              <select
                className={classes.input}
                value={formData.gender}
                onChange={onChangeGender}
                name="gender"
              >
                <option value="" defaultChecked disabled>
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
