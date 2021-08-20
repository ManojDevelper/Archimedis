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
        buttonStyle={{ color: "#ffffff", fontSize: "1.15107913669065vw", background: "#2d307b", width: "13.0215827338129vw", height: "3.45323741007194vw",  borderRadius: "0.575539568345324vw" }}
        expires={30}
      >
        <span style={{fontSize: `1.3vw`}}>This website uses cookies to enhance the user experience.</span>
      </CookieConsent>
    </>
  )
}

export default IndexPage