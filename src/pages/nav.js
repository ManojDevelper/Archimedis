import React, { useState } from 'react';
import '../styles/Nav.css';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "gatsby"
import Logo from "../images/Logo.png";
import ham from "../images/ham.svg";
import close from "../images/navclose.svg";
import plus from "../images/navplus.svg";
import minus from "../images/navminus.svg";
import nav1 from "../images/navlinkdin.svg";
import nav2 from "../images/navfacebook.svg";
import nav3 from "../images/navinsta.svg";
import nav5 from "../images/navtwitter.svg";
import nav6 from "../images/navyoutube.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./Home/contact";

function Navbars() {
    const [hide, setHide] = useState("")
    const [hides, setHides] = useState("")
    const [hidess, setHidess] = useState("")
    const [hidesss, setHidesss] = useState("")
    const [hidessss, setHidessss] = useState("")
    const [contact, setContact] = useState(true)
    
    return (
        <>
            <Navbar id="nav" collapseOnSelect={true} expand="lg" >
                <Nav.Link href="/" id="logo_link"><img src={Logo} alt="img" /></Nav.Link>
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
                        <ul id="nav_b1">
                            <li id="nav_links"><Nav.Link href="/home/#about" id="nav_main_link" activeClassName='active'>About Us<span>|</span></Nav.Link></li>
                            <li id="nav_links"><Nav.Link href="/home/#team" id="nav_main_link" activeClassName='active'>Our People<span>|</span></Nav.Link></li>
                            <li id="nav_links"><Nav.Link href="/home/#patners" id="nav_main_link" activeClassName='active'>Our Clients<span>|</span></Nav.Link></li>
                            <li id="nav_links"><Nav.Link href="/home/#blog" id="nav_main_link" activeClassName='active'>Blog<span>|</span></Nav.Link></li>
                            <li id="nav_links"><Nav.Link id="nav_main_link" onClick={() => setContact(false)} role="presentation">Contact Us</Nav.Link></li>
                        </ul>
                        <ul id="nav_b2">
                            <li id="nav_links"><Link to="/formulation/" id="nav_main_link" activeClassName='active'>Formulations<div id="mark"></div>
                                <div id="nav_add_menu">
                                    <div id="nav_manu_container">
                                        <div id="nav_manu_container_card">
                                            <h1>Services</h1>
                                            <Link to="/formulation/#Formulationdev" id="nav_sub_link">Formulation Development</Link>
                                            <Link to="/formulation/#AnalyticalMethod" id="nav_sub_link">Analytical Method Development</Link>
                                            <Link to="/formulation/#AnalyticalMethodValidation" id="nav_sub_link">Analytical Method Validation</Link>
                                            <Link to="/formulation/#RegulatoryAffairs" id="nav_sub_link">Regulatory Affairs</Link>
                                            <Link to="/formulation/#StabilityStudies" id="nav_sub_link">Stability Studies</Link>
                                            <Link to="/formulation/#BEStudies" id="nav_sub_link">BE Studies</Link>
                                            <Link to="/formulation/#ClinicalTrials" id="nav_sub_link">Clinical Trials</Link>
                                        </div>
                                        <div id="nav_manu_container_card">
                                            <h1>Infrastructure</h1>
                                            <Link to="/formulation/#R&D" id="nav_sub_link">R&D Pilot Plant</Link>
                                            <Link to="/formulation/#AnalyticalLab" id="nav_sub_link">Analytical Lab</Link>
                                            <Link to="/formulation/#StabilityChamber" id="nav_sub_link">Stability Chamber</Link>
                                        </div>
                                        <div id="nav_manu_container_card">
                                            <h1>Case Studies</h1>
                                            <Link to="/formulation/#IvabradineMetoprolol" id="nav_sub_link">Ivabradine + Metoprolol</Link>
                                            <Link to="/formulation/#Cerebroprotein" id="nav_sub_link">Cerebroprotein</Link>
                                            <Link to="/formulation/#VitaminD3" id="nav_sub_link">Vitamin D3 Water Soluble</Link>
                                            <Link to="/formulation/#Asvagandha" id="nav_sub_link">Asvagandha (UK Clinical Trial)</Link>
                                        </div>
                                    </div>
                                </div></Link>
                            </li>
                            <li id="nav_links"><Link to="/manfacture/" id="nav_main_link" activeClassName='active'>Manufacturing<div></div>
                                <div id="mark"></div><div id="nav_add_menu">
                                    <div id="nav_manu_container">
                                        <div id="nav_manu_container_card">
                                            <h1>Capability</h1>
                                            <Link to="/manfacture/#tablets" id="nav_sub_link">Tablets</Link>
                                            <Link to="/manfacture/#Capsules" id="nav_sub_link">Capsules</Link>
                                            <Link to="/manfacture/#Powder" id="nav_sub_link">Dry Syrup / Sachet</Link>
                                            <Link to="/manfacture/#Clinicaltrail" id="nav_sub_link">Clinical Trial Supplies</Link>
                                            <Link to="/manfacture/#Commercial" id="nav_sub_link">Commercial Scale</Link>
                                        </div>
                                        <div id="nav_manu_container_card">
                                            <h1>Quality</h1>
                                            <Link to="/manfacture/#Qualityassurance" id="nav_sub_link">Quality Assurance</Link>
                                            <Link to="" id="nav_sub_link">QC & Microbiology Labs</Link>
                                        </div>
                                        <div id="nav_manu_container_card">
                                            <h1>Facility</h1>
                                            <Link to="/manfacture/#Manufacturing" id="nav_sub_link">Manufacturing</Link>
                                            <Link to="/manfacture/#packing" id="nav_sub_link">Packing</Link>
                                            <Link to="/manfacture/#Warehouse" id="nav_sub_link">Warehouse</Link>
                                            <Link to="/manfacture/#utilities" id="nav_sub_link">Utilities (HVAC / Water)</Link>
                                            <Link to="/manfacture/#approvals" id="nav_sub_link">Regulatory Approvals</Link>
                                        </div>
                                        <div id="nav_manu_container_card">
                                            <h1>Industry 4.0</h1>
                                            <Link to="/manfacture/#smart" id="nav_sub_link">Smart Dispensing</Link>
                                            <Link to="/manfacture/#Environment" id="nav_sub_link">Environment Monitoring</Link>
                                            <Link to="/manfacture/#ERP" id="nav_sub_link">ERP</Link>
                                        </div>
                                    </div>
                                </div></Link></li>
                            <li id="nav_links"><Link to="/products/" id="nav_main_link" activeClassName='active'>Products<div></div>
                                <div id="mark"></div><div id="nav_add_menu">
                                    <div id="nav_manu_container">
                                        <div id="nav_manu_container_card">
                                            <h1>Pharmaceutical</h1>
                                            <Link to="/products/#Therapeutic" id="nav_sub_link">Therapeutic Areas</Link>
                                            <Link to="/products/#Prescription" id="nav_sub_link">Prescription Drugs</Link>
                                            <Link to="/products/#OTC" id="nav_sub_link">OTC</Link>
                                            <Link to="/products/#Flagship" id="nav_sub_link">Flagship Products</Link>
                                        </div>
                                        <div id="nav_manu_container_card">
                                            <h1>Food Supplements</h1>
                                            <Link to="/products/#product1" id="nav_sub_link">Product 1</Link>
                                            <Link to="/products/#product2" id="nav_sub_link">Product 2</Link>
                                            <Link to="/products/#product3" id="nav_sub_link">Product 3</Link>
                                        </div>
                                        <div id="nav_manu_container_card">
                                            <h1>Archimedis Branded</h1>
                                            <Link to="/products/#PCOS" id="nav_sub_link">PCOS (Fertility Enhancer)</Link>
                                            <Link to="/products/#NasalIrrigation" id="nav_sub_link">Nasal Irrigation</Link>
                                            <Link to="/products/#HandSanitizers" id="nav_sub_link">Hand Sanitizers</Link>
                                            {/* <Link to="/products/" id="nav_sub_link">All Products</Link>
                                            <Link to="/products/" id="nav_sub_link">Visit Our Store</Link> */}
                                        </div>
                                    </div>
                                </div></Link></li>
                            <li id="nav_links"><Link to="/digital/" id="nav_main_link" activeClassName='active'>Digital<div></div>
                                <div id="mark"></div><div id="nav_add_menu">
                                    <div id="nav_manu_container">
                                        <div id="nav_manu_container_card">
                                            <h1>Solutions</h1>
                                            <Link to="/digital/#Formulationdev" id="nav_sub_link">ERP for Life Sciences</Link>
                                            <Link to="/digital/#SmartDispensing" id="nav_sub_link">Smart Dispensing</Link>
                                            <Link to="/digital/#EnvironmentalMonitoring" id="nav_sub_link">Environmental Monitoring</Link>
                                        </div>
                                        <div id="nav_manu_container_card">
                                            <h1>Product Development</h1>
                                            <Link to="/digital/#productdev" id="nav_sub_link">Design / UX</Link>
                                            <Link to="/digital/#productdev" id="nav_sub_link">Engineering & Development</Link>
                                            <Link to="/digital/#productdev" id="nav_sub_link">Test Automation</Link>
                                            <Link to="/digital/#Design" id="nav_sub_link">DevOps (CI/CD)</Link>
                                            <Link to="/digital/#Design" id="nav_sub_link">Product Support Helpdesk</Link>
                                            <Link to="/digital/#Design" id="nav_sub_link">Product Management</Link>
                                        </div>
                                        <div id="nav_manu_container_card">
                                            <h1>Quality & Compliance</h1>
                                            <Link to="/digital/#Quality&Compliance" id="nav_sub_link">GxP Compliance (QMS / SOPs)</Link>
                                            <Link to="/digital/#Quality&Compliance" id="nav_sub_link">IT Quality Assurance</Link>
                                            <Link to="/digital/#Quality&Compliance" id="nav_sub_link">Computerized System Validation (CSV)</Link>
                                            <Link to="/digital/#ComputerizedSystemValidation" id="nav_sub_link">Risk-based Validation</Link>
                                            <Link to="/digital/#ComputerizedSystemValidation" id="nav_sub_link">Part 11 / Annex 11 Assessment</Link>
                                            <Link to="/digital/#ComputerizedSystemValidation" id="nav_sub_link">Training</Link>
                                        </div>
                                    </div>
                                </div></Link></li>
                        </ul>
                    </Nav>
                    <Nav id="navbarResponsive2">
                        <div id="nav_b1">
                            {!hide ?
                                <p id="main_top_link"><Nav.Link href="/home" id="main_top_links" activeClassName='active'>Home</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHide(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="#about" id="main_top_links" activeClassName='active'>Home</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHide(false)}><img src={minus} alt="img" /></span></p>}
                            {!hide ? null : (
                                <>
                                    <Nav.Link href="/home/#about" id="nav_main_link" activeClassName='active'>About Us</Nav.Link>
                                    <Nav.Link href="/home/#team" id="nav_main_link" activeClassName='active'>Our People</Nav.Link>
                                    <Nav.Link href="/home/#patners" id="nav_main_link" activeClassName='active'>Our Clients</Nav.Link>
                                    <Nav.Link href="/home/#blog" id="nav_main_link" activeClassName='active'>Blog</Nav.Link>
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
