import React from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import bannerImg from "../../../assets/images/bannerImg.png";
// import { ButtonThree } from "../../atoms";
import "../../../shared/Shared.css";
import AttendanceForm from "./AttendanceForm";
import DigitalClock from "./DigitalClock";
import Timer from "./Timer";
import "./banner.css"

const Banner = () => {
  return (
    <div className="parent flex min-h-[100vh] flex-col items-center justify-between pt-14 dark:bg-boxdark lg:flex-row xl:ml-30">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="clock-container mx-auto">
          <DigitalClock />
          <Timer />
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <AttendanceForm />
      </motion.div>
    </div>
  );
};

export default Banner;
