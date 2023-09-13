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
    <div className="w-[700px] h-[250px] bg-[#ffe8df] rounded-xl flex justify-center items-center shadow-lg">
      <div className="w-[670px] h-[220px] pt-3 pb-3 pl-5 pr-5 bg-white rounded-xl">
        <p className="text-[24px]">적립내역</p>
        <div className="h-[150px] overflow-auto">
          {data &&
            data.map((item, index) => (
              <AccumulationHistory key={index} history={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
