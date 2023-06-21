import LocationMap from "../components/LocationMap";
import LocationSearch from "../components/LocationSearch";
import classes from "./Location.module.css";

function Location() {
  return (
    <div className={classes.location}>
      <LocationSearch />
      <LocationMap />
    </div>
  );
}

export default Location;
