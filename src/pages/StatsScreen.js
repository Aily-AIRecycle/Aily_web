import React, { useEffect, useState } from 'react';


const data = [{ailynumber: 1, day: 1, avgcan:2, avggen: 3.4, avgpet: 9.3}]
const StatsScreen = () => {
  // const [data, setData] = useState([]);
  // console.log(data[0])
  console.log(typeof data);

  // useEffect(() => {
  //   fetch('/member/member/dataset')
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error(error));
      
  // }, []);

  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>Ailynumber: {item.ailynumber}</p>
            <p>Day: {item.day}</p>
            <p>Avgcan: {item.avgcan}</p>
            <p>Avggen: {item.avggen}</p>
            <p>Avgpet: {item.avgpet}</p>
          </li>
        ))}
      </ul>
  );
};

export default StatsScreen;