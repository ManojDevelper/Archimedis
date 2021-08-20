import React from "react";
import Home from "./home";
import CookieConsent from "react-cookie-consent";

const IndexPage = () => {
  return (
    <>
      <Home />
      <CookieConsent
        location="bottom"
        buttonText="Accept!!"
        cookieName="Archimedis"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#ffffff", fontSize: "16px", background: "#2d307b", width: "180.999999999999px", height: "48px",  borderRadius: "8px" }}
        expires={30}
      >
        <span style={{fontSize: `18px`}}>This website uses cookies to enhance the user experience.</span>
      </CookieConsent>
    </>
  )
}

export default IndexPage