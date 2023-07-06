import { useState, useCallback, useEffect } from "react";
import classes from "@/components/Location/styles/LocationMap.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { locationActions } from "@/store/location";
import { markerActions } from "@/store/marker";
import { resultActions } from "@/store/result";

declare global {
  interface Window {
    kakao: any;
  }
}

let map: any;

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
  const dispatch = useDispatch();
  const keyword = useSelector((state: any) => state.keyword.keyword);
  const markers = useSelector((state: any) => state.marker.marker);
  const [kakaoMapsLoaded, setKakaoMapsLoaded] = useState(false);

  const onLoadKakaoAPI = useCallback(() => {
    window.kakao.maps.load(() => {
      setKakaoMapsLoaded(true);
    });
  }, []);

  // kakao API 불러오기
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

  // 지도 생성, 지도 컨트롤 생성
  useEffect(() => {
    if (kakaoMapsLoaded) {
      const container = document.getElementById("map");
      let options = {
        center: new window.kakao.maps.LatLng(
          37.500051267389296,
          126.86798816343797
        ),
        level: 7,
      };
      map = new window.kakao.maps.Map(container, options);

      let mapTypeControl = new window.kakao.maps.MapTypeControl();
      let zoomControl = new window.kakao.maps.ZoomControl();

      map.addControl(
        mapTypeControl,
        window.kakao.maps.ControlPosition.TOPRIGHT
      );

      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    }
  }, [kakaoMapsLoaded]);

  useEffect(() => {
    if (kakaoMapsLoaded) {
      if (markers) {
        markers.map((marker: any) => {
          marker.setMap(null);
          console.log(marker);
        });
      }

      dispatch(markerActions.clear());
      dispatch(locationActions.clear());

      markerPositions
        .filter(
          (data) =>
            data.title.includes(keyword) || data.address.includes(keyword)
        )
        .map((data) => {
          if (keyword) {
            dispatch(
              locationActions.locationList({
                id: data.id,
                title: data.title,
                address: data.address,
              })
            );
          }
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(data.lat, data.lng),
            title: data.title,
          });

          window.kakao.maps.event.addListener(marker, "click", () => {
            dispatch(
              locationActions.locationClicked({
                id: data.id,
                title: data.title,
                address: data.address,
              })
            );
            dispatch(resultActions.show());

            // 마커를 중심으로 부드럽게 움직임
            map.panTo(new window.kakao.maps.LatLng(data.lat, data.lng));
          });

          // 마커 그리기
          marker.setMap(map);
          // 마커 추가
          dispatch(markerActions.markerList(marker));

          return null;
        });
    }
  }, [keyword, kakaoMapsLoaded, dispatch]);

  return <div id="map" className={classes.map}></div>;
};

export default LocationMap;
