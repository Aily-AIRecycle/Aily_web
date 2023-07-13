import classes from "@/components/MyPage/styles/AccumulationHistory.module.scss";

export default function AccumulationHistory(props: any) {
  const { history } = props;
  const { date, time, general, plastic, can, point } = history;

  return (
    <div>
      <p className={classes.date}>{date}</p>
      <div className={classes.history}>
        <div>
          <p>
            일반: {general}, 플라스틱: {plastic}, 캔: {can}
          </p>
          <p className={classes.point}>+{point}</p>
        </div>
        <p className={classes.datetime}>
          {date} {time}
        </p>
      </div>
    </div>
  );
}
