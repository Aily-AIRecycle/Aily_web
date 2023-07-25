"use client";
import classes from "@/components/MyPage/styles/Leave.module.scss";
import axios from "axios";
import useInput from "@/hooks/use-input";
import { useState, MouseEvent } from "react";
import SubmitButton from "../UI/SubmitButton";

export default function Leave() {
  const password = useInput("");
  const checkPassword = useInput("");
  const [agree, setAgree] = useState(false);

  const handleWithdrawal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const pw = password.value.trim();
    const cpw = checkPassword.value.trim();

    if (pw === "" || cpw === "") {
      alert("비밀번호를 입력해주세요.");
    } else if (!agree) {
      alert("회원탈퇴 동의에 체크해주세요.");
    } else if (pw !== cpw) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      axios
        .post("/member/member/leavuser", {
          phonenumber: sessionStorage.getItem("phone_number"),
          nickname: sessionStorage.getItem("name"),
          password: password.value,
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
    }
  };

  return (
    <>
      <div className={classes.box}>
        <p className={classes.title}>회원 탈퇴</p>
        <form>
          <ul>
            <li className={classes.data}>
              <label htmlFor="password">현재 비밀번호</label>
              <input
                type="password"
                name="password"
                placeholder="계정을 삭제하려면 현재 비밀번호를 입력해주세요."
                value={password.value}
                onChange={password.onChange}
              />
            </li>
            <li className={classes.data}>
              <label htmlFor="check_password">비밀번호 확인</label>
              <input
                type="password"
                placeholder="비밀번호 확인"
                name="check_password"
                value={checkPassword.value}
                onChange={checkPassword.onChange}
              />
            </li>
          </ul>
          <p style={{ color: "#ee5446", marginBottom: "20px" }}>
            계정 삭제시 모든 포인트가 소멸되며 복구가 불가능합니다.
          </p>
          <div className={classes.agree}>
            <input
              type="checkbox"
              name="agree"
              checked={agree}
              onClick={() => {
                setAgree(!agree);
              }}
            />
            <label htmlFor="agree">동의합니다.</label>
          </div>
          <SubmitButton onClick={handleWithdrawal} value="회원 탈퇴" />
        </form>
      </div>
    </>
  );
}
