import React from "react";
import Banner from "./Home/banner";
import Status from "./Home/status";
import Patners from "./Home/patners";
import Standout from "./Home/standout";
import Wedo from "./Home/wedo";
import Online from "./Home/online";
import About from "./Home/about";
import Team from "./Home/team";
import Clints from "./Home/clints";
import Blogs from "./Home/blogs";
import Contact from "./Home/contact";
import Footer from "./Home/footer";
import Nav from "./nav";

const Home = () => {
  return (
    <>
    <div id="home">
    <Nav />
      <Banner />
      <Patners />
      <Wedo />
      <Status />
      <Standout />
      <Online />
      <Clints />
      <About />
      <Team />
      <Blogs />
      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default Home
