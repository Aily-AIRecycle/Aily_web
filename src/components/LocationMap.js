import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { markerActions } from "../store/marker";
import classes from "./LocationMap.module.css";
import { resultActions } from "../store/result";
const { kakao } = window;

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
  // 현재 위치 설정하기 전, 학교로 위치 설정
  const [latitude, setLatitude] = useState(37.500051267389296);
  const [longitude, setLongitude] = useState(126.86798816343797);
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.keyword.keyword);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // 현재 위치를 중심으로 함
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    let options = {
      center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심 좌표
      level: 5,
    };
    let map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    let mapTypeControl = new kakao.maps.MapTypeControl();
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    let zoomControl = new kakao.maps.ZoomControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    markerPositions
      .filter(
        (data) => data.title.includes(keyword) || data.address.includes(keyword)
      )
      .map((data) => {
        // 마커를 생성합니다
        const markers = new kakao.maps.Marker({
          //마커가 표시 될 지도
          map: map,
          //마커가 표시 될 위치
          position: new kakao.maps.LatLng(data.lat, data.lng),
          //마커에 hover시 나타날 title
          title: data.title,
        });

        kakao.maps.event.addListener(markers, "click", () => {
          dispatch(
            markerActions.markerClicked({
              id: data.id,
              title: data.title,
              address: data.address,
            })
          );
          dispatch(resultActions.show());
          setLatitude(data.lat);
          setLongitude(data.lng);
        });
        return null;
      });
  }, [latitude, longitude, keyword, dispatch]);

  useEffect(() => {
    dispatch(markerActions.clear());
    markerPositions
      .filter(
        (data) => data.title.includes(keyword) || data.address.includes(keyword)
      )
      .map((data) => {
        keyword &&
          dispatch(
            markerActions.markerList({
              id: data.id,
              title: data.title,
              address: data.address,
            })
          );
        setLatitude(data.lat);
        setLongitude(data.lng);
        return null;
      });
  }, [keyword, dispatch]);

  return <div id="map" className={classes.map}></div>;
};

export default LocationMap;
