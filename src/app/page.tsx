"use client";
import Section1 from "@/components/HomePage/Section1";
import Section2 from "@/components/HomePage/Section2";
import Section3 from "@/components/HomePage/Section3";
import Section4 from "@/components/HomePage/Section4";
import Section5 from "@/components/HomePage/Section5";
import classes from "@/app/Homepage.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className={classes.home}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
      <Footer />
    </>
  );
}
