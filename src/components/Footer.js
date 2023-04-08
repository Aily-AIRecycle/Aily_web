import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_wrap}>
        <div className={classes.top}>
          <h4 className={classes.logo}>Aily</h4>
          <h6>Copyright 2023. Aily. All rights reserved.</h6>
        </div>
        <div className={classes.bottom}>
          <div>
            <h5>대표이사 : 홍길동</h5>
            <h5>주소 : 서울특별시 구로구 경인로 445 [구]고척동 62-160</h5>
          </div>
          <div>
            <h5>이메일 : aily@mit.com</h5>
            <h5>고객센터 : 평일 09:30 ~ 17:30</h5>
            <h5>점심 11:30 ~ 12:30</h5>
            <h5>토요일, 일요일, 공휴일 휴무</h5>
          </div>
          <div>
            <h5>전화 : 02-2610-1700</h5>
            <h5>팩스 : 02-2688-5494</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
