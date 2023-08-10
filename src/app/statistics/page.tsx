"use client";
// Import required libraries
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import {
  registerables,
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import "chartjs-adapter-moment";
import BarGraph from "@/components/StatisStics/BarGraph";
import LineGraph from "@/components/StatisStics/LineGraph";

const Statistics = () => {
  return (
    <>
      <BarGraph />
      <LineGraph />
    </>
  );
};
export default Statistics;
