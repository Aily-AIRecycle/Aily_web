import classes from "./Home.module.css";
import Section1 from "../components/main/Section1";
import Section2 from "../components/main/Section2";
import Section3 from "../components/main/Section3";
import Section4 from "../components/main/Section4";
import Section5 from "../components/main/Section5";
import Section6 from "../components/main/Section6";

function HomePage() {
  return (
    <div className={classes.home}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}
export default HomePage;
