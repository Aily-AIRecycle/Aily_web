import classes from "@/components/MyPage/styles/PointHistory.module.scss";
import AccumulationHistory from "@/components/MyPage/AccumulationHistory";
import { useEffect, useState } from "react";
import axios from "axios";

interface Data {
  day: string;
  time: string;
  can: number;
  gen: number;
  pet: number;
  point: number;
}

export default function PointHistory() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    axios
      .post("/member/member/historypax", {
        nickname:
          sessionStorage.getItem("name") || localStorage.getItem("name"),
      })
      .then((response) => {
        // Handle the POST request response
        setData(
          response.data.map((item: Data) => ({
            day: item.day,
            time: item.time,
            can: item.can,
            gen: item.gen,
            pet: item.pet,
            point: item.point,
          }))
        );
        console.log(response.data);
        console.log(data);
      })
      .catch((error) => {
        // Handle the POST request error
        console.error(error);
      });
  }, []);

  return (
    <div className={classes.box_wrap}>
      <div className={classes.box}>
        <p className={classes.title}>적립내역</p>
        <div className={classes.history}>
          {data &&
            data.map((item, index) => (
              <AccumulationHistory key={index} history={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
