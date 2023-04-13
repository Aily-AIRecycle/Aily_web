import { apiKey } from "../../apikey";
import classes from "./Section5.module.css";
import map_detail from "../../img/main/map_detail.svg";
import { useCallback, useEffect, useRef } from "react";

function Section5() {
  const mapElement = useRef(null);

  // 컴포넌트가 마운트될 때, 수동으로 스크립트를 넣어줍니다.
  // 이는 script가 실행되기 이전에 window.initMap이 먼저 선언되어야 하기 때문입니다.
  const loadScript = useCallback((url) => {
    const firstScript = window.document.getElementsByTagName("script")[0];
    const newScript = window.document.createElement("script");
    newScript.src = url;
    newScript.async = true;
    newScript.defer = true;
    firstScript?.parentNode?.insertBefore(newScript, firstScript);
  }, []);

  // script에서 google map api를 가져온 후에 실행될 callback 함수
  const initMap = useCallback(() => {
    const { google } = window;
    if (!mapElement.current || !google) return;

    const location = { lat: 37.500382, lng: 126.864841 };
    const map = new google.maps.Map(mapElement.current, {
      zoom: 17,
      center: location,
    });
    new google.maps.Marker({
      position: { lat: 37.502393, lng: 126.867671 },
      map,
    });
    new google.maps.Marker({
      position: { lat: 37.502555, lng: 126.858504 },
      map,
    });
  }, []);

  useEffect(() => {
    const script = window.document.getElementsByTagName("script")[0];
    const includeCheck = script.src.startsWith(
      "https://maps.googleapis.com/maps/api"
    );

    // script 중복 호출 방지
    if (includeCheck) return initMap();

    window.initMap = initMap;
    // 본인 apiKey를 써야 함
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&language=en`
    );
  }, [initMap, loadScript]);

  return (
    <div className={classes.box5}>
      <h1 className={classes.h1}>위치 정보</h1>
      <h2 className={classes.h2}>
        근처에 있는 Aily의 위치를 간편하게 확인하세요.
      </h2>
      <div className={classes.map_box}>
        <div className={classes.map} ref={mapElement}></div>
        <img src={map_detail} alt="detail" className={classes.map_detail} />
      </div>
    </div>
  );
}
export default Section5;
