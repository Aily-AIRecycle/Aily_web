import classes from "@/components/HomePage/styles/Section1.module.css";
import phone from "img/main/phone.svg";
function Section1()
{
  return (
    <div className={classes.box1}>
      <h1 className={classes.h1}>자연을 생각하는 분리수거 로봇</h1>
      <h2 className={classes.h2}>Aily를 통해 자동으로 분리수거를 해보세요.</h2>
      <img src={phone} alt="phone" className={classes.phone} />
      <div className={classes.background} />
    </div>
  );
}

export default Section1;
