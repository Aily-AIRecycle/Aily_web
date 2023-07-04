import React, { useState, useCallback, useEffect } from "react";
import classes from "@/components/LocationMap.module.css";
import { useSelector, useDispatch } from "react-redux";
import { markerActions } from "@/store/marker";
import { resultActions } from "@/store/result";

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
  const [latitude, setLatitude] = useState(37.500051267389296);
  const [longitude, setLongitude] = useState(126.86798816343797);
  const dispatch = useDispatch();
  const keyword = useSelector((state: any) => state.keyword.keyword);
  const [kakaoMapsLoaded, setKakaoMapsLoaded] = useState(false);

  const onLoadKakaoAPI = useCallback(() => {
    window.kakao.maps.load(() => {
      setKakaoMapsLoaded(true);
    });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = false;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;

    script.onload = onLoadKakaoAPI;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (kakaoMapsLoaded) {
      const container = document.getElementById("map");
      let options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 5,
      };
      let map = new window.kakao.maps.Map(container, options);

      let mapTypeControl = new window.kakao.maps.MapTypeControl();
      let zoomControl = new window.kakao.maps.ZoomControl();

      map.addControl(
        mapTypeControl,
        window.kakao.maps.ControlPosition.TOPRIGHT
      );

      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      markerPositions
        .filter(
          (data) =>
            data.title.includes(keyword) || data.address.includes(keyword)
        )
        .map((data) => {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(data.lat, data.lng),
            title: data.title,
          });

          window.kakao.maps.event.addListener(marker, "click", () => {
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
    }
  }, [latitude, longitude, keyword, dispatch, kakaoMapsLoaded]);

  useEffect(() => {
    dispatch(markerActions.clear({}));
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
