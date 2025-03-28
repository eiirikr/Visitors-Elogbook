import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { motion, useAnimation } from "framer-motion";
import {
    FaUserAlt,
    FaPhoneAlt,
    FaLocationArrow,
    FaFacebook ,
    FaYoutube ,
    FaGlobe ,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../../hooks/useAnimation";
import '../../shared/Shared.css'
import { BottomLine, ButtonThree } from "../../components/atoms";
import { Footer, Navbar } from "../../components";

const Contact = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
    const [viewDiv, setViewDiv] = useState(false);
    const animation = useAnimation();

    const handleSend = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_6xnj05v",
                "template_exk29f8",
                form.current,
                "kLfLk-o6LKj-L9c77"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Message has been sent",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate("/");
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    
    useEffect(() => {
        if (inView) {
            setViewDiv(true);
        } else {
            setViewDiv(false);
        }
    }, [inView, animation]);

    return (
        <>
            <div className="dark:bg-boxdark">
                <Navbar />
                <div className="parent py-16 my-16 dark:bg-boxdark">
                    <motion.div
                        initial="hidden"
                        animate={viewDiv && "visible"}
                        variants={headingAnimation}
                    >
                        <h3 className="text-neutral text-center dark:text-white">Contact</h3>
                        <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
                            Contact  <span className="text-primary">Us</span>
                        </h1>
                        <BottomLine />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <motion.div
                            className=""
                            ref={ref}
                            initial="hidden"
                            animate={viewDiv && "visible"}
                            variants={contactAnimation}
                        >
                            <form ref={form} onSubmit={handleSend}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                                    <input
                                        className="input-field"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        required
                                    />
                                    <input
                                        className="input-field"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <input
                                    className="input-field"
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    required
                                />
                                <textarea
                                    className="input-field"
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="5"
                                    placeholder="Message"
                                    required
                                ></textarea>
                                <ButtonThree
                                    type="submit"
                                    value="Send Message"
                                    className=""
                                >
                                    <span>Send</span>
                                    <span><MdSend /></span>
                                </ButtonThree>
                            </form>
                        </motion.div>
                        <motion.div
                            className=""
                            initial={{ y: 50, opacity: 0 }}
                            animate={viewDiv && "visible"}
                            variants={contactAnimation}
                        >
                            <div className="flex items-center my-6">
                                <FaUserAlt className="text-2xl mr-8 text-primary duration-300"></FaUserAlt>
                                <h3 className="font-medium dark:text-white">DICT Provincial Office</h3>
                            </div>
                            <div className="flex items-center my-6">
                                <FaPhoneAlt className="text-2xl mr-8 text-primary duration-300"></FaPhoneAlt>
                                <h3 className="font-medium dark:text-white">(078) 307 9792</h3>
                            </div>
                            <div className="flex items-center my-6">
                                <MdEmail className="text-3xl mr-8 text-primary duration-300"></MdEmail>
                                <h3 className="font-medium dark:text-white"> information@dict.gov.ph </h3>
                            </div>
                            <div className="flex items-center my-6">
                                <FaLocationArrow className="text-2xl mr-8 text-primary duration-300"></FaLocationArrow>

                                <h3 className="font-medium dark:text-white">
                                    #30 Pilar Street, District 3, Cauayan, Philippines
                                </h3>
                            </div>
                            <div className="mt-8 flex items-center">
                                <h3 className="text-xl dark:text-white">Social</h3>
                                <div className="bg-black dark:bg-white w-10 h-[2px] mx-4"></div>
                                <a
                                    href="https://dict.gov.ph/"
                                    target="blank"
                                    className="text-3xl text-primary hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                                >
                                    <FaGlobe ></FaGlobe >
                                </a>
                                <a
                                    href="https://www.facebook.com/DICTIsabela"
                                    target="blank"
                                    className="text-3xl text-primary hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                                >
                                    <FaFacebook ></FaFacebook >
                                </a>
                                <a
                                    href="https://www.youtube.com/@dictph"
                                    target="blank"
                                    className="text-3xl text-primary hover:text-accent hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                                >
                                    <FaYoutube ></FaYoutube >
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Contact;
