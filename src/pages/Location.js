import LocationMap from "../components/LocationMap";

function Location() {
  return (
    <div style={{ display: "flex", height: "1000px" }}>
      <div
        style={{
          width: "30%",
          backgroundColor: "#f1f1f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>추가적인 UI 영역</h2>
      </div>
      <LocationMap />
    </div>
  );
}

export default Location;
