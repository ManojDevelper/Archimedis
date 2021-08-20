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
        buttonStyle={{ color: "#2d307b", fontSize: "16px", background: "white", width: "180.999999999999px", height: "48px", borderRadius: "8px", fontStyle: "normal", fontWeight: "bold" }}
        expires={30}
        enableDeclineButton
        declineButtonText="Decline"
        declineButtonStyle={{fontSize: "16px", background: "none"}}
      >
        <span style={{ fontSize: `18px` }}>This website uses cookies to enhance the user experience.</span>
      </CookieConsent>
    </>
  )
}

export default IndexPage