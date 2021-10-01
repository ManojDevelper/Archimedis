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
import { Link } from "gatsby";

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
                <Link to="/" id="logo_link"><img src={Logo} alt="img" /></Link>
                <Navbar.Toggle className="toggle" >
                    <Nav id="toggle" aria-controls="basic-navbar-nav" className="ntbtn">
                        <img src={ham} alt="img" />
                    </Nav>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id="collapse_logo">
                        <Link to="#banner" id="logo_link"><img src={Logo} alt="img" id="logo_link" /></Link>
                        <Navbar.Toggle className="toggle" >
                            <Nav id="toggle" aria-controls="basic-navbar-nav" className="ntbtn">
                                <img src={close} alt="img" />
                            </Nav>
                        </Navbar.Toggle>
                    </Nav>
                    <Nav id="navbarResponsive">
                        <Nav id="nav_b1">
                            <Nav id="nav_links"><Link to="/aboutus/" id="nav_main_link" activeClassName='active'>About</Link><span>|</span></Nav>
                            <Nav id="nav_links"><Link to="/#patners" id="nav_main_link" activeClassName='active'>Clients</Link><span>|</span></Nav>
                            <Nav id="nav_links"><Link to="/blog" id="nav_main_link" activeClassName='active'>Insights</Link><span>|</span></Nav>
                            <Nav id="nav_links"><p id="nav_main_link" onClick={() => setContact(false)} role="presentation">Contact</p></Nav>
                        </Nav>
                        <Nav id="nav_b2">
                            <Nav id="nav_links"><Link to="/formulation/" id="nav_main_link" activeClassName='active'>Formulations<Nav id="mark"></Nav>
                                <Nav id="nav_add_menu">
                                    <Nav id="nav_manu_container">
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/formulation/#fservice" style={{ textDecoration: `none`, color: `#200e32` }}><Link to="/formulation/#fservice" style={{ textDecoration: `none`, color: `#200e32` }}>R&D Services</Link></Link></h1>
                                            <Link to="/formulation/#Formulationdev" id="nav_sub_link">Formulation Development</Link>
                                            <Link to="/formulation/#AnalyticalMethod" id="nav_sub_link">Analytical Method Development</Link>
                                            <Link to="/formulation/#AnalyticalMethodValidation" id="nav_sub_link">Analytical Method Validation</Link>
                                            <Link to="/formulation/#RegulatoryAffairs" id="nav_sub_link">Regulatory Affairs</Link>
                                            <Link to="/formulation/#StabilityStudies" id="nav_sub_link">Stability Studies</Link>
                                            {/* <Link to="/formulation/#BEStudies" id="nav_sub_link">BE Studies</Link>
                                            <Link to="/formulation/#ClinicalTrials" id="nav_sub_link">Clinical Trials</Link> */}
                                        </Nav>
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/formulation/#fserviceassurance" style={{ textDecoration: `none`, color: `#200e32` }}>R&D Infrastructure</Link></h1>
                                            <Link to="/formulation/#R&D" id="nav_sub_link">R&D Pilot Plant</Link>
                                            <Link to="/formulation/#AnalyticalLab" id="nav_sub_link">Analytical R&D Lab</Link>
                                            <Link to="/formulation/#StabilityChamber" id="nav_sub_link">Walk-in Stablity chamber</Link>
                                        </Nav>
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/formulation/#caseStudy" style={{ textDecoration: `none`, color: `#200e32` }}>Case Studies</Link></h1>
                                            <Link to="/CaseStudy/cerebroprotein-tablets-development-complete-pending-commercialization/" id="nav_sub_link">Cerebroprotein</Link>
                                            <Link to="/CaseStudy/first-to-develop-and-complete-be-study-for-metoprolol-ivabradine-hydrochloride-tablets-in-india-product-is-approved-by-central-drug-control-of-india/" id="nav_sub_link">Ivabradine + Metoprolol</Link>
                                            <Link to="/CaseStudy/water-soluble-vitamin-d-capsule-major-commercial-success-for-client/" id="nav_sub_link">Vitamin D3 Water Soluble</Link>
                                            <Link to="/CaseStudy/multiple-myoinositol-combination-sachets-for-pcod-infertility-treatment/" id="nav_sub_link">Asvagandha (UK Clinical Trial)</Link>
                                        </Nav>
                                    </Nav>
                                </Nav></Link>
                            </Nav>
                            <Nav id="nav_links"><Link to="/manfacture/" id="nav_main_link" activeClassName='active'>Manufacturing<Nav></Nav>
                                <Nav id="mark"></Nav><Nav id="nav_add_menu">
                                    <Nav id="nav_manu_container">
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/manfacture/#OralSolidForms" style={{ textDecoration: `none`, color: `#200e32` }}>Oral Solid Forms</Link></h1>
                                            <Link to="/manfacture/#tablets" id="nav_sub_link">Tablets</Link>
                                            <Link to="/manfacture/#Capsules" id="nav_sub_link">Capsules</Link>
                                            <Link to="/manfacture/#Powder" id="nav_sub_link">Dry Syrup / Sachet</Link>
                                            {/* <Link to="/manfacture/#Clinicaltrail" id="nav_sub_link">Clinical Trial Supplies</Link> */}
                                            <Link to="/manfacture/#InstalledCapacity" id="nav_sub_link">Installed Capacity</Link>
                                        </Nav>
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/manfacture/#Qualityassurance" style={{ textDecoration: `none`, color: `#200e32` }}>Quality</Link></h1>
                                            <Link to="/manfacture/#Quality_Assurance" id="nav_sub_link">Quality Assurance</Link>
                                            <Link to="/manfacture/#Quality_Control" id="nav_sub_link">Quality Control</Link>
                                        </Nav>
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/manfacture/#facility" style={{ textDecoration: `none`, color: `#200e32` }}>Facility</Link></h1>
                                            <Link to="/manfacture/#Manufacturing" id="nav_sub_link">Manufacturing</Link>
                                            <Link to="/manfacture/#packing" id="nav_sub_link">Packing</Link>
                                            <Link to="/manfacture/#Adherence" id="nav_sub_link">Adherence</Link>
                                            <Link to="/manfacture/#AirHandling" id="nav_sub_link">Air Handling Units (AHUs)</Link>
                                            <Link to="/manfacture/#WaterPurification" id="nav_sub_link">Water Purification</Link>
                                            <Link to="/manfacture/#approvals" id="nav_sub_link">Regulatory Approvals</Link>
                                        </Nav>
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/manfacture/#industry" style={{ textDecoration: `none`, color: `#200e32` }}>ERP should be listed first</Link></h1>
                                            <Link to="/manfacture/#smart" id="nav_sub_link">Smart Dispensing</Link>
                                            <Link to="/manfacture/#Environment" id="nav_sub_link">Environment Monitoring</Link>
                                            <Link to="/manfacture/#ERP" id="nav_sub_link">ERP</Link>
                                        </Nav>
                                    </Nav>
                                </Nav></Link></Nav>
                            <Nav id="nav_links"><Link to="/products/" id="nav_main_link" activeClassName='active'>Products<Nav></Nav>
                                <Nav id="mark"></Nav><Nav id="nav_add_menu">
                                    <Nav id="nav_manu_container">
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/products/#pharmaceutical" style={{ textDecoration: `none`, color: `#200e32` }}>Pharmaceutical</Link></h1>
                                            <Link to="/products/#Therapeutic" id="nav_sub_link">Therapeutic Areas</Link>
                                            <Link to="/products/#Prescription" id="nav_sub_link">Prescription Drugs</Link>
                                            <Link to="/products/#OTC" id="nav_sub_link">OTC</Link>
                                            <Link to="/products/#Flagship" id="nav_sub_link">Flagship Products</Link>
                                        </Nav>
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/products/#foodsupplements" style={{ textDecoration: `none`, color: `#200e32` }}>Food Supplements</Link></h1>
                                            <Link to="/products/#VitaminD" id="nav_sub_link">Vitamin D</Link>
                                            <Link to="/products/#BoneCollagen" id="nav_sub_link">Bone Collagen</Link>
                                            <Link to="/products/#Lola" id="nav_sub_link">Lola</Link>
                                        </Nav>
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/products/#archibranded" style={{ textDecoration: `none`, color: `#200e32` }}>Archimedis Branded</Link></h1>
                                            <Link to="/products/#PCOS" id="nav_sub_link">PCOS (Fertility Enhancer)</Link>
                                            <Link to="/products/#NasalIrrigation" id="nav_sub_link">Nasal Irrigation</Link>
                                            <Link to="/products/#HandSanitizers" id="nav_sub_link">Hand Sanitizers</Link>
                                            {/* <Link to="/products/" id="nav_sub_link">All Products</Link>
                                            <Link to="/products/" id="nav_sub_link">Visit Our Store</Link> */}
                                        </Nav>
                                    </Nav>
                                </Nav></Link></Nav>
                            <Nav id="nav_links"><Link to="/digital/" id="nav_main_link" activeClassName='active'>Digital<Nav></Nav>
                                <Nav id="mark"></Nav><Nav id="nav_add_menu">
                                    <Nav id="nav_manu_container">
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/digital/#dsolutions" style={{ textDecoration: `none`, color: `#200e32` }}>Digital Solutions</Link></h1>
                                            <Link to="/digital/#Formulationdev" id="nav_sub_link">ERP for Life Sciences</Link>
                                            <Link to="/digital/#SmartDispensing" id="nav_sub_link">Smart Dispensing</Link>
                                            <Link to="/digital/#EnvironmentalMonitoring" id="nav_sub_link">Environmental Monitoring</Link>
                                        </Nav>
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/digital/#productdev" style={{ textDecoration: `none`, color: `#200e32` }}>Product Value Stream</Link></h1>
                                            <Link to="/digital/#productdev" id="nav_sub_link">Design / UX</Link>
                                            <Link to="/digital/#productdev" id="nav_sub_link">Engineering & Development</Link>
                                            <Link to="/digital/#productdev" id="nav_sub_link">Test Automation</Link>
                                            <Link to="/digital/#Design" id="nav_sub_link">DevOps (CI/CD)</Link>
                                            <Link to="/digital/#Design" id="nav_sub_link">Product Support Helpdesk</Link>
                                            <Link to="/digital/#Design" id="nav_sub_link">Product Management</Link>
                                        </Nav>
                                        <Nav id="nav_manu_container_card">
                                            <h1><Link to="/digital/#QualityAndCompliance" style={{ textDecoration: `none`, color: `#200e32` }}>Quality & Compliance</Link></h1>
                                            <Link to="/digital/#QualityAndCompliance" id="nav_sub_link">GxP Compliance (QMS / SOPs)</Link>
                                            <Link to="/digital/#QualityAndCompliance" id="nav_sub_link">IT Quality Assurance</Link>
                                            <Link to="/digital/#QualityAndCompliance" id="nav_sub_link">Computerized System Validation (CSV)</Link>
                                            <Link to="/digital/#ComputerizedSystemValidation" id="nav_sub_link">Risk-based Validation</Link>
                                            <Link to="/digital/#ComputerizedSystemValidation" id="nav_sub_link">Part 11 / Annex 11 Assessment</Link>
                                            <Link to="/digital/#ComputerizedSystemValidation" id="nav_sub_link">Training</Link>
                                        </Nav>
                                    </Nav>
                                </Nav></Link></Nav>
                        </Nav>
                    </Nav>
                    <Nav id="navbarResponsive2">
                        <Nav id="nav_b1">
                            {!hide ?
                                <p id="main_top_link"><Nav.Link href="/" id="main_top_links" activeClassName='active'>Home</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHide(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="#about" id="main_top_links" activeClassName='active'>Home</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHide(false)}><img src={minus} alt="img" /></span></p>}
                            {!hide ? null : (
                                <>
                                    <Nav.Link href="/aboutus/" id="nav_main_link" activeClassName='active'>About</Nav.Link>
                                    <Nav.Link href="/#patners" id="nav_main_link" activeClassName='active'>Clients</Nav.Link>
                                    <Nav.Link href="/blog" id="nav_main_link" activeClassName='active'>Insights</Nav.Link>
                                    <p id="nav_main_link" activeClassName='active'>Gallery</p>
                                    <Nav.Link href="" id="nav_main_link" activeClassName='active' onClick={() => setContact(false)} role="presentation">Contact</Nav.Link>
                                </>
                            )}
                        </Nav>
                        <Nav id="nav_b1">
                            {!hides ?
                                <p id="main_top_link"><Nav.Link href="/formulation" id="main_top_links" activeClassName='active'>Formulations</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHides(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="/formulation" id="main_top_links" activeClassName='active'>Formulations</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHides(false)}><img src={minus} alt="img" /></span></p>}
                            {!hides ? null : (
                                <>
                                    <Nav.Link href="/formulation/#fservice" id="nav_main_link" activeClassName='active'>R&D Services</Nav.Link>
                                    <Nav.Link href="/formulation/#fserviceassurance" id="nav_main_link" activeClassName='active'>R&D Infrastructure</Nav.Link>
                                    <Nav.Link href="/formulation/#caseStudy" id="nav_main_link" activeClassName='active'>Case Studies</Nav.Link>
                                </>
                            )}
                        </Nav>
                        <Nav id="nav_b1">
                            {!hidess ?
                                <p id="main_top_link"><Nav.Link href="/manfacture" id="main_top_links" activeClassName='active'>Manufacturing</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHidess(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="/manfacture" id="main_top_links" activeClassName='active'>Manufacturing</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHidess(false)}><img src={minus} alt="img" /></span></p>}
                            {!hidess ? null : (
                                <>
                                    <Nav.Link href="/manfacture/#capable" id="nav_main_link" activeClassName='active'>Capability</Nav.Link>
                                    <Nav.Link href="/manfacture/#quality" id="nav_main_link" activeClassName='active'>Quality</Nav.Link>
                                    <Nav.Link href="/manfacture/#facility" id="nav_main_link" activeClassName='active'>Facility</Nav.Link>
                                    <Nav.Link href="/manfacture/#industry" id="nav_main_link" activeClassName='active'>Industry 4.0</Nav.Link>
                                </>
                            )}
                        </Nav>
                        <Nav id="nav_b1">
                            {!hidesss ?
                                <p id="main_top_link"><Nav.Link href="/products" id="main_top_links" activeClassName='active'>Products</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHidesss(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="/products" id="main_top_links" activeClassName='active'>Products</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHidesss(false)}><img src={minus} alt="img" /></span></p>}
                            {!hidesss ? null : (
                                <>
                                    <Nav.Link href="/products/#pharmaceutical" id="nav_main_link" activeClassName='active'>Pharmaceutical</Nav.Link>
                                    <Nav.Link href="/products/#foodsupplements" id="nav_main_link" activeClassName='active'>Food Supplements</Nav.Link>
                                    <Nav.Link href="/products/#archibranded" id="nav_main_link" activeClassName='active'>Archimedis Branded</Nav.Link>
                                </>
                            )}
                        </Nav>
                        <Nav id="nav_b1">
                            {!hidessss ?
                                <p id="main_top_link"><Nav.Link href="/digital" id="main_top_links" activeClassName='active'>Digital</Nav.Link><span id="mainspan1" role="presentation" onClick={() => setHidessss(true)}><img src={plus} alt="img" /></span></p> : <p id="main_top_link"><Nav.Link href="/digital" id="main_top_links" activeClassName='active'>Digital</Nav.Link><span id="mainspan2" role="presentation" onClick={() => setHidessss(false)}><img src={minus} alt="img" /></span></p>}
                            {!hidessss ? null : (
                                <>
                                    <Nav.Link href="/digital/#dsolutions" id="nav_main_link" activeClassName='active'>Digital Solutions</Nav.Link>
                                    <Nav.Link href="/digital/#productdev" id="nav_main_link" activeClassName='active'>Product Value Stream</Nav.Link>
                                    <Nav.Link href="/digital/#QualityAndCompliance" id="nav_main_link" activeClassName='active'>Quality & Compliance</Nav.Link>
                                </>
                            )}
                        </Nav>
                        <Nav id="nav_b1">
                            <p id="main_top_link"><Nav.Link href="" id="main_top_links" activeClassName='active' onClick={() => setContact(false)} role="presentation">Contact us</Nav.Link></p>
                            <Nav id="navlogoimg">
                                <img src={nav1} alt="src" />
                                <img src={nav2} alt="src" />
                                <img src={nav3} alt="src" />
                                <img src={nav5} alt="src" />
                                <img src={nav6} alt="src" />
                            </Nav>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {!contact ? (
                <Nav id="navcont">
                    <img src={close} alt="img" id="contclose" onClick={() => setContact(true)} role="presentation" />
                    <Contact />
                </Nav>) : null}
        </>
    );
};
export default Navbars;
