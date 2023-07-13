import classes from "@/components/MyPage/styles/PointHistory.module.scss";
import AccumulationHistory from "@/components/MyPage/AccumulationHistory";
import DATA from "@/components/MyPage/data";

export default function PointHistory() {
  return (
    <>
      <div className={classes.box_wrap}>
        <div className={classes.box}>
          <p className={classes.title}>적립내역</p>
          <div className={classes.history}>
            {DATA.map((data, index) => (
              <AccumulationHistory key={index} history={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
