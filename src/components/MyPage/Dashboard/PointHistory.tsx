import AccumulationHistory from "@/components/MyPage/Dashboard/AccumulationHistory";
import { useEffect, useState } from "react";
import axios from "axios";
import DATA from "./data";

interface Data {
  day: string;
  time: string;
  can: number;
  gen: number;
  pet: number;
  point: number;
}

export default function PointHistory() {
  const [history, setHistory] = useState<Data[]>([]);

  useEffect(() => {
    axios
      .post("/member/member/historypax", {
        nickname:
          sessionStorage.getItem("name") || localStorage.getItem("name"),
      })
      .then((response) => {
        // Handle the POST request response
        if (Array.isArray(response.data)) {
          // 데이터가 배열인지 확인

          setHistory(
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
          console.log(history);
        }
      })
      .catch((error) => {
        // Handle the POST request error
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log(history);
  }, [history]);
  return (
    <div className="web:w-[700px] web:h-[300px] md:w-[calc(100%-300px)] mobile:h-[300px] bg-[#ffe8df] rounded-xl flex justify-center items-center shadow-lg">
      <div className="web:w-[670px] web:h-[270px] mobile:w-[calc(100%-30px)] mobile:h-[calc(100%-30px)] pt-3 pb-3 pl-5 pr-5 bg-white rounded-xl">
        <p className="text-[24px]">적립내역</p>
        <div className="h-[210px] overflow-auto">
          {history.length > 0 ? (
            history.map((item, index) => (
              <AccumulationHistory key={index} history={item} />
            ))
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              적립 내역이 존재하지 않습니다.
            </div>
          )}
          {/* {DATA.map((item, index) => (
            <AccumulationHistory key={index} history={item} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
