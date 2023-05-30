import { useEffect } from "react";

const { kakao } = window;

function Location() {
    useEffect(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표
            level: 3,
        };
        const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    width: "30%",
                    height: "1000px",
                    backgroundColor: "#f1f1f1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h2>추가적인 UI 영역</h2>
            </div>
            <div
                id="map"
                style={{
                    width: "70%",
                    height: "1000px",
                }}
            ></div>
        </div>
    );
}

export default Location;
