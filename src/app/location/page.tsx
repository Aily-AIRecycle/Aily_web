"use client";
import LocationMap from "@/components/LocationMap";
import LocationSearch from "@/components/LocationSearch";
import classes from "./Location.module.scss";
import { Provider } from "react-redux";
import store from "@/store/index";
import Header from "@/components/Header";

function Location(): JSX.Element {
  return (
    <>
      <Header />
      <Provider store={store}>
        <div className={classes.location}>
          <LocationSearch />
          <LocationMap />
        </div>
      </Provider>
    </>
  );
}

export default Location;
