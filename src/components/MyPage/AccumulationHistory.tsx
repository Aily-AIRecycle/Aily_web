import classes from "@/components/MyPage/styles/AccumulationHistory.module.scss";

export default function AccumulationHistory(props: any) {
  const { history } = props;
  const { time, day, gen, pet, can, point } = history;

  return (
    <div>
      <p className={classes.date}>{day}</p>
      <div className={classes.history}>
        <div>
          <p>
            일반: {gen}, 플라스틱: {pet}, 캔: {can}
          </p>
          <p className={classes.point}>+{point}</p>
        </div>
        <p className={classes.datetime}>
          {day} {time}
        </p>
      </div>
    </div>
  );
}
