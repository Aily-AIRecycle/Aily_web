"use client";
import classes from "@/components/MyPage/styles/Dashboard.module.scss";
import useFormValidation from "@/hooks/use-formValidation";
import { useEffect, useState } from "react";
import Image from "next/image";
import lock from "img/join/lock.svg";
import axios from "axios";

export default function Dashboard() {
  const [resAuthNumber, setResAuthNumber] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [authError, setAuthError] = useState(false);
  const passwordRegex =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  const validationRules = {
    password: (value: any) => passwordRegex.test(value),
  };

  const [formData1, errors1, onChangeHandler1]: any = useFormValidation(validationRules);
  const [formData2, errors2, onChangeHandler2]: any = useFormValidation(validationRules);

  const handleWithdrawal = () => {
    if (isPasswordMatching && !isAnyPasswordEmpty) {
      axios
        .post("/member/member/leavuser", {
          phonenumber: sessionStorage.getItem("phone_number"),
          nickname: sessionStorage.getItem("name"),
          password: formData1.password,
        })
        .then((res) => {
          const result = res.data.result;
          if (result === "deleteuserok") {
            alert("회원 탈퇴가 되었습니다. 감사합니다.");
            sessionStorage.clear();
            document.location.href = "/";
          } else if (result === "file error.vo1") {
            alert("Error Code : F101 | 관리자에게 문의 주세요");
          } else if (result === "file error.vo2") {
            alert("Error Code : F102 | 관리자에게 문의 주세요");
          } else if (result === "usererror") {
            alert("Error Code : U101 | 비밀번호가 틀렸습니다.");
          } else {
            alert("오류가 발생했습니다. 다시 시도해 주세요. ev1");
          }
        })
        .catch((error) => {
          console.error("Withdrawal failed:", error);
          alert("오류가 발생했습니다. 다시 시도해 주세요. ev2");
        });
    }else if(!isPasswordMatching && !isAnyPasswordEmpty){
      alert("입력하신 비밀번호가 일치하지 않습니다.");
    }else if(isAnyPasswordEmpty){
      alert("비밀번호를 입력해 주세요.");
    }
  };
  

  useEffect(() => {
    if (resAuthNumber === "") {
      setAuthError(false);
    } else if (resAuthNumber === authNumber) {
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  }, [resAuthNumber, authNumber]);

  // Custom width for the password input field
  const passwordInputStyle = {
    width: "35%", // You can adjust the width value here
    height: "50px",
    marginRight: "780px",
    paddingLeft: "10px"
  };

  const isPasswordMatching = formData1.password === formData2.password;
  const isAnyPasswordEmpty = !formData1.password || !formData2.password;

  return (
    <>
      <div className={classes.dashboard}>
        <p style={{ marginBottom: "100px" }} className={classes.title}>회원 탈퇴</p>
        <div className={classes.box}>
          <form>
            <div style={{ marginBottom: "20px" }}> {/* Add spacing between the input fields */}
              <h2>비밀번호</h2>
              <div className={classes.form_control}>
                <Image src={lock} width={25} alt="password" />
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="비밀번호"
                  className={`${classes.input} ${classes.password_input}`} // Added a new class 'password_input'
                  name="password"
                  value={formData1.password}
                  onChange={onChangeHandler1}
                  style={passwordInputStyle} // Apply the custom width style
                />
              </div>
            </div>

            <div style={{ marginTop: "50px" }}> {/* Add spacing between the input fields */}
              <h2>비밀번호 확인</h2>
              <div className={classes.form_control}>
                <Image src={lock} width={25} alt="password" />
                <input
                  type={passwordShown ? "text" : "password"}
                  placeholder="비밀번호"
                  className={`${classes.input} ${classes.password_input}`} // Added a new class 'password_input'
                  name="password"
                  value={formData2.password}
                  onChange={onChangeHandler2}
                  style={passwordInputStyle} // Apply the custom width style
                />
                {!isPasswordMatching && !isAnyPasswordEmpty && (
                  <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다</p>
                )}
                {isPasswordMatching && !isAnyPasswordEmpty && (
                  <p style={{ color: "green" }}>비밀번호가 일치합니다</p>
                )}
                {isAnyPasswordEmpty && (
                  <p style={{ color: "red" }}>비밀번호를 입력해주세요</p>
                )}
              </div>
            </div>
            <button onClick={handleWithdrawal}>회원탈퇴</button>
          </form>
        </div>
      </div>
    </>
  );
}
