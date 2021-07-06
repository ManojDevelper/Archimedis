import React, { useState, useEffect } from "react";
import top from "../images/backtotop.svg";
import { Link } from "gatsby";
import "../styles/Nav.css";

const MBanner = (props) => {
    useEffect(() => {
        window.addEventListener('resize', showButton);

        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('resize', showButton);

            window.removeEventListener('scroll', changeBackground);
        }
    }, [])


    const [navbar, setNavbar] = useState(false);
    const [button, setButton] = useState();
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true); 
        }
    };
    useEffect(() => {
        showButton();
        // eslint-disable-next-line
    }, [])

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    };
    return (
        <>
            <Link to={props.link} className={button ? "" : ""} id={navbar ? 'toplink' : 'toplink2'}><img src={top} alt="img" id="taketop" /></Link>
        </>
    );
};
export default MBanner;