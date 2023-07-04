import React, { useEffect } from "react";
import classes from "@/components/LocationMap.module.css";

declare global {
  interface Window {
    kakao: any;
  }
}
const markerPositions = [
  {
    id: 1,
    title: "동양미래대학교점",
    address: "서울특별시 고척동 경인로 445",
    lat: 37.5000028,
    lng: 126.867999,
  },
  {
    id: 2,
    title: "개봉역 2번 출구",
    address: "서울특별시 구로구 개봉동 181-13",
    lat: 37.494849,
    lng: 126.85873,
  },
  {
    id: 3,
    title: "숭실대입구역 3번 출구",
    address: "서울특별시 동작구 상도로 378",
    lat: 37.495936,
    lng: 126.954127,
  },
];

const LocationMap = () => {
  useEffect(() => {
    // DOM을 이용하여 script 태그를 만들어주자.
    const mapScript = document.createElement("script");
    // script.async = true 라면,
    // 해당 스크립트가 다른 페이지와는 비동기적으로 동작함을 의미한다.
    mapScript.async = false;
    // script.src에 map을 불러오는 api를 넣어주자.
    // 여기에서 우리가 기존에 발급 받았던 apiKey를 넣어주면 된다.
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;

    //이제 우리가 만든 script를 document에 붙여주자.
    document.head.appendChild(mapScript);
    
    const onLoadKakaoAPI = () =>{
      window.kakao.maps.load(()=>{
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        let options = {
          center: new window.kakao.maps.LatLng(37.500051267389296, 126.86798816343797), // 지도의 중심 좌표
          level: 5,
        };
        let map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        let mapTypeControl = new window.kakao.maps.MapTypeControl();
        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        let zoomControl = new window.kakao.maps.ZoomControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
      })
    }

    mapScript.addEventListener('load', onLoadKakaoAPI);
  }, []);

  return <div id="map" className={classes.map}></div>;
};

export default LocationMap;