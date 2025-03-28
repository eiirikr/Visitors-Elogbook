import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./About.css";
import aboutImg from '../../assets/images/aboutSipeka.svg'
import '../../shared/Shared.css'
import { BottomLine } from "../../components/atoms";
import { Footer, Navbar } from "../../components";

const About = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            <Navbar />
            <div className="dark:bg-boxdark">
                <div className="parent pt-16 my-16">
                    <div>
                        <motion.div
                            className="mb-10"
                            initial={{ y: -200, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1, type: "spring" },
                            }}
                        >
                            <h3 className="text-neutral text-center dark:text-white">Tracking and Integrating Management of Visitor Logs</h3>
                            <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
                                About <span className="text-primary">Us</span>
                            </h1>
                            <BottomLine />
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ x: -200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <img
                                    src={aboutImg}
                                    alt="About SiPeKa"
                                    className="w-100 h-100 transform translate-y-[-12%]"
                                    title="About SiPeKa"
                                />

                            </motion.div>
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <p className="font-medium text-center translate-y-[-60%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    Tracking and Integrating Management of Visitor Logs (TIMELOG) is a system designed to efficiently and accurately manage the visitor logbook process within an organization. This system automates several tasks related to visitor management, such as registering visitor details, tracking entry and exit times, and maintaining security protocols. By streamlining the process, the system ensures that all visitors are properly identified and recorded, improving both safety and operational efficiency.
                                </p>
                                <br />
                                <p className="font-medium text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    In the TIMELOG, visitor information such as personal details, purpose of visit, and the person being visited are stored in a centralized database. Each time a visitor arrives, the system captures their entry data, including the time of arrival, the intended duration of their visit, and the areas they will be accessing. This data is then used to generate a complete log of visitor activity, including exit times. The system can also track any special requests, such as escort requirements or access restrictions, ensuring that each visit is properly monitored and secured.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                {!isHomePage && <Footer />}
            </div>
        </>
    );
};

export default About;
