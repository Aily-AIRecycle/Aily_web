"use client";
import classes from "@/components/UI/styles/Footer.module.scss";
import logo from "img/footer_logo.svg";
import github from "img/github.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_wrap}>
        <div className={classes.div}>
          <ul>
            <li>AIoT</li>
            <li>이인호</li>
            <li>이상훈</li>
            <li>백은호</li>
          </ul>
          <ul>
            <li>프론트엔드</li>
            <li>신윤찬</li>
            <li>김현희</li>
            <li>최혁진</li>
          </ul>
          <ul>
            <li>백엔드</li>
            <li>이승규</li>
            <li>남정현</li>
            <li>이종원</li>
          </ul>
        </div>

        <div className={classes.bottom}>
          <div>
            <Image src={logo} width={50} height={50} alt="logo" />
            <h6>© 2023 Aily. All rights reserved.</h6>
          </div>
          <a href="https://github.com/Aily-AIRecycle">
            <Image src={github} width={30} height={30} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
