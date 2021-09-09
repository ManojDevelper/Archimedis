import React, { useState } from 'react';
import '../styles/Nav.css';
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../images/navlogo.png";
import ham from "../images/ham.svg";
import close from "../images/navclose.svg";
import plus from "../images/navplus.svg";
import minus from "../images/navminus.svg";
import nav1 from "../images/navlinkdin.svg";
import nav2 from "../images/navfacebook.svg";
import nav3 from "../images/navinsta.svg";
import nav5 from "../images/navtwitter.svg";
import nav6 from "../images/navyoutube.svg";
import Contact from "./Home/contact";
import { graphql, useStaticQuery, Link } from "gatsby";

function Navbars() {
    const [hide, setHide] = useState("")
    const [hides, setHides] = useState("")
    const [hidess, setHidess] = useState("")
    const [hidesss, setHidesss] = useState("")
    const [hidessss, setHidessss] = useState("")
    const [contact, setContact] = useState(true)

    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "footer.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                footer {
                  id
                  title
                  link
                  footercontainer {
                    id
                    description
                    Link
                    subconteiner{
                        id
                        head
                        links
                    }
                  }
                }
              }
            }
          }
    }`)

    return (
        <>
            <Navbar id="nav" collapseOnSelect={true} expand="lg" >
                <Link to="/" id="logo_link"><img src={Logo} alt="img" /></Link>
                <Navbar.Toggle className="toggle" >
                    <div id="toggle" aria-controls="basic-navbar-nav" className="ntbtn">
                        <img src={ham} alt="img" />
                    </div>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div id="collapse_logo">
                        <Link to="#banner" id="logo_link"><img src={Logo} alt="img" id="logo_link" /></Link>
                        <Navbar.Toggle className="toggle" >
                            <div id="toggle" aria-controls="basic-navbar-nav" className="ntbtn">
                                <img src={close} alt="img" />
                            </div>
                        </Navbar.Toggle>
                    </div>
                    <Nav id="navbarResponsive">
                        <div id="nav_b1">
                            <div id="nav_links"><Link to="/aboutus/" id="nav_main_link" activeClassName='active'>About Us<span>|</span></Link></div>
                            <div id="nav_links"><Link to="/home/#patners" id="nav_main_link" activeClassName='active'>Our Clients<span>|</span></Link></div>
                            <div id="nav_links"><Link to="/blog" id="nav_main_link" activeClassName='active'>Blog<span>|</span></Link></div>
                            <div id="nav_links"><p id="nav_main_link" onClick={() => setContact(false)} role="presentation">Contact Us</p></div>
                        </div>
                        <div id="nav_b2">
                            {data.file.childMarkdownRemark.frontmatter.footer.map(footerItem =>
                                <>
                                    {
                                        footerItem.title === "Archimedis" ?
                                            ("")
                                            :
                                            <>
                                                {
                                                    footerItem.title === "Contact" ?
                                                        ("")
                                                        :
                                                        <div id="nav_links"><Link to={footerItem.link} id="nav_main_link" activeClassName='active'>{footerItem.title}<div id="mark"></div>
                                                            <div id="nav_add_menu">
                                                                <div id="nav_manu_container">
                                                                    {footerItem.footercontainer.map(footercontainers =>
                                                                        <div id="nav_manu_container_card">
                                                                            <h1>{footercontainers.description}</h1>
                                                                            {footercontainers.subconteiner.map(subconteiners =>
                                                                                <Link to={subconteiners.links} id="nav_sub_link" key={subconteiners.id}>{subconteiners.head}</Link>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div></Link>
                                                        </div>
                                                }
                                            </>
                                    }
                                </>
                            )}
                        </div>
                    </Nav>
                    <Nav id="navbarResponsive2">
                        <div id="nav_b1">
                            {!hide ?
                                <p id="main_top_link"><Nav.Link href="/home" id="main_top_links" activeClassName='active'>Home</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHide(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="#about" id="main_top_links" activeClassName='active'>Home</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHide(false)}><img src={minus} alt="img" /></span></p>}
                            {!hide ? null : (
                                <>
                                    <Nav.Link href="/aboutus/" id="nav_main_link" activeClassName='active'>About Us</Nav.Link>
                                    <Nav.Link href="/home/#team" id="nav_main_link" activeClassName='active'>Our People</Nav.Link>
                                    <Nav.Link href="/home/#patners" id="nav_main_link" activeClassName='active'>Our Clients</Nav.Link>
                                    <Nav.Link href="/blog" id="nav_main_link" activeClassName='active'>Blog</Nav.Link>
                                    <Nav.Link href="" id="nav_main_link" activeClassName='active' onClick={() => setContact(false)} role="presentation">Contact Us</Nav.Link>
                                </>
                            )}
                        </div>
                        <div id="nav_b1">
                            {!hides ?
                                <p id="main_top_link"><Nav.Link href="/formulation" id="main_top_links" activeClassName='active'>Formulations</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHides(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="#about" id="main_top_links" activeClassName='active'>Formulations</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHides(false)}><img src={minus} alt="img" /></span></p>}
                            {!hides ? null : (
                                <>
                                    <Nav.Link href="/formulation/#fservice" id="nav_main_link" activeClassName='active'>Services </Nav.Link>
                                    <Nav.Link href="/formulation/#fserviceassurance" id="nav_main_link" activeClassName='active'>Infrastructure</Nav.Link>
                                    <Nav.Link href="/formulation/#casestudy" id="nav_main_link" activeClassName='active'>Case Studies</Nav.Link>
                                </>
                            )}
                        </div>
                        <div id="nav_b1">
                            {!hidess ?
                                <p id="main_top_link"><Nav.Link href="/manfacture" id="main_top_links" activeClassName='active'>Manufacturing</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHidess(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="#about" id="main_top_links" activeClassName='active'>Manufacturing</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHidess(false)}><img src={minus} alt="img" /></span></p>}
                            {!hidess ? null : (
                                <>
                                    <Nav.Link href="/manfacture/#capable" id="nav_main_link" activeClassName='active'>Capability</Nav.Link>
                                    <Nav.Link href="/manfacture/#quality" id="nav_main_link" activeClassName='active'>Quality</Nav.Link>
                                    <Nav.Link href="/manfacture/#facility" id="nav_main_link" activeClassName='active'>Facility</Nav.Link>
                                    <Nav.Link href="/manfacture/#industry" id="nav_main_link" activeClassName='active'>Industry 4.0</Nav.Link>
                                </>
                            )}
                        </div>
                        <div id="nav_b1">
                            {!hidesss ?
                                <p id="main_top_link"><Nav.Link href="/products" id="main_top_links" activeClassName='active'>Products</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHidesss(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="#about" id="main_top_links" activeClassName='active'>Products</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHidesss(false)}><img src={minus} alt="img" /></span></p>}
                            {!hidesss ? null : (
                                <>
                                    <Nav.Link href="/products/#pharmaceutical" id="nav_main_link" activeClassName='active'>Pharmaceutical</Nav.Link>
                                    <Nav.Link href="/products/#foodsupplements" id="nav_main_link" activeClassName='active'>Food Supplements</Nav.Link>
                                    <Nav.Link href="/products/#archibranded" id="nav_main_link" activeClassName='active'>Archimedis Branded</Nav.Link>
                                </>
                            )}
                        </div>
                        <div id="nav_b1">
                            {!hidessss ?
                                <p id="main_top_link"><Nav.Link href="/digital" id="main_top_links" activeClassName='active'>Digital</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHidessss(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="#about" id="main_top_links" activeClassName='active'>Digital</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHidessss(false)}><img src={minus} alt="img" /></span></p>}
                            {!hidessss ? null : (
                                <>
                                    <Nav.Link href="/digital/#dsolutions" id="nav_main_link" activeClassName='active'>Solutions</Nav.Link>
                                    <Nav.Link href="/digital/#productdev" id="nav_main_link" activeClassName='active'>Product Development</Nav.Link>
                                    <Nav.Link href="/digital/#Quality&Compliance" id="nav_main_link" activeClassName='active'>Quality & Compliance</Nav.Link>
                                </>
                            )}
                        </div>
                        <div id="nav_b1">
                            <p id="main_top_link"><Nav.Link href="" id="main_top_links" activeClassName='active' onClick={() => setContact(false)} role="presentation">Contact us</Nav.Link></p>
                            <div id="navlogoimg">
                                <img src={nav1} alt="src" />
                                <img src={nav2} alt="src" />
                                <img src={nav3} alt="src" />
                                <img src={nav5} alt="src" />
                                <img src={nav6} alt="src" />
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {!contact ? (
                <div id="navcont">
                    <img src={close} alt="img" id="contclose" onClick={() => setContact(true)} role="presentation" />
                    <Contact />
                </div>) : null}
        </>
    );
};
export default Navbars;
