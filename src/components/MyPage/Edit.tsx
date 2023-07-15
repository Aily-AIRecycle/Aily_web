"use client";
import classes from "@/components/MyPage/styles/Edit.module.scss";
import Profile from "@/components/MyPage/Profile";
import SubmitButton from "../UI/SubmitButton";
import Image from "next/image";
import edit from "img/edit.svg";

export default function Edit() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "994px",
          height: "875px",
        }}
      >
        <div className={classes.box}>
          <p className={classes.title}>내 정보 수정</p>
          <form>
            <ul className={classes.edit}>
              <li className={classes.data}>
                <label htmlFor="email">이메일</label>
                <input name="email"></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="name">이름</label>
                <input name="name"></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="phonenumber">전화번호</label>
                <input name="phonenumber"></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="birth">생년월일</label>
                <input name="gender"></input>
              </li>
              <li className={classes.data}>
                <label htmlFor="gender">성별</label>
                <input name="gender"></input>
              </li>
            </ul>
            <SubmitButton value="수정" />
          </form>
        </div>
        <div style={{ marginTop: "88px" }}>
          <Profile />
          <button className={classes.edit_btn}>
            <Image src={edit} alt="edit" width={30} />
          </button>
        </div>
      </div>
    </>
  );
}
