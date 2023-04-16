import classes from "./Home.module.css";
import Section1 from "../components/Main/Section1";
import Section2 from "../components/Main/Section2";
import Section3 from "../components/Main/Section3";
import Section4 from "../components/Main/Section4";
import Section5 from "../components/Main/Section5";
import Section6 from "../components/Main/Section6";

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
