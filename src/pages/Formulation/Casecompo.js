import React from "react";
import "../../styles/Casestudycompo.css";
import img1 from "../../data/assets/Durai-Swamy-Rajan-Director.png";
import bco1 from "../../data/assets/b_co_i1.png";
import bco2 from "../../data/assets/b_co_i2.png";
import Contact from "../Home/contact";
import Footer from "../Home/footer";
import Nav from "../nav";

function Casestudycompo() {
    return (
        <>
        <Nav/>
            <div className="compocompo">
                <div id="compocompo_container">
                    <div id="compocompo_container_top1">
                        <div id="compocompo_container_top1_b1">
                            <img src={img1} alt="img" />
                        </div>
                        <div id="compocompo_container_top1_b2">
                            <p1>Duraisamy Rajan Palani</p1>
                            <p2>Executive Director</p2>
                            <p2>5 mins read<span>|</span>24 June 2021</p2>
                        </div>
                    </div>
                    <div id="compocompo_container_top2">
                        <h1>First to develop and complete BE study for Metoprolol - Ivabradine Hydrochloride Tablets in India (product is approved by central Drug Control of India)</h1>
                        <img src={bco1} alt="img1" />
                        <div id="compocompo_container_top2_matter">
                            <p4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit viverra sociis dolor suscipit facilisis sem. Placerat nunc quam bibendum eu amet, viverra ipsum quisque. Scelerisque tincidunt porttitor arcu tempus tincidunt. Non elit massa viverra mattis mattis in eu pharetra. Mauris, et rhoncus, ultrices sed ornare eget.</p4>
                            <p4>Accumsan mauris gravida elit, sit. Blandit consequat arcu ipsum enim sed phasellus. Tortor vel donec aliquet nec eu ipsum morbi. Dictum ut vehicula lectus lorem gravida velit dignissim. Ac scelerisque consequat vulputate eu, commodo at. Mauris tempus duis tempus erat ullamcorper rhoncus in eu, sed. Egestas lorem aliquam felis mauris habitant. Sed arcu risus turpis molestie. Amet, ac neque lectus nibh ut et sed oric metus quam.</p4>
                            <p4>Feugiat sed orci a metus quam nulla in tellus. Feugiat urna tortor, sollicitudin odio integer. Nunc, vel sagittis sit ultrices sagittis, scelerisque elementum. Quam urna, non velit nunc sollicitudin non leo, sapien. Feugiat nulla aliquam neque congue nibh eget. Aliquam augue molestie mattis purus quis nunc.</p4>
                        </div>
                    </div>
                    <div id="compocompo_container_top2">
                        <h1>Lorem Ipsum Dolor</h1>
                        <div id="compocompo_container_top2_matter">
                            <p4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit viverra sociis dolor suscipit facilisis sem. Placerat nunc quam bibendum eu amet, viverra ipsum quisque. Scelerisque tincidunt porttitor arcu tempus tincidunt. Non elit massa viverra mattis mattis in eu pharetra. Mauris, et rhoncus, ultrices sed ornare eget.</p4>
                            <p4>Accumsan mauris gravida elit, sit. Blandit consequat arcu ipsum enim sed phasellus. Tortor vel donec aliquet nec eu ipsum morbi. Dictum ut vehicula lectus lorem gravida velit dignissim. Ac scelerisque consequat vulputate eu, commodo at. Mauris tempus duis tempus erat ullamcorper rhoncus in eu, sed. Egestas lorem aliquam felis mauris habitant. Sed arcu risus turpis molestie. Amet, ac neque lectus nibh ut et sed oric metus quam.</p4>
                        </div>
                        <img src={bco2} alt="img1" />
                        <h1>Lorem Ipsum Dolor</h1>
                        <div id="compocompo_container_top2_matter">
                            <p4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit viverra sociis dolor suscipit facilisis sem. Placerat nunc quam bibendum eu amet, viverra ipsum quisque. Scelerisque tincidunt porttitor arcu tempus tincidunt. Non elit massa viverra mattis mattis in eu pharetra. Mauris, et rhoncus, ultrices sed ornare eget.</p4>
                            <p4>Accumsan mauris gravida elit, sit. Blandit consequat arcu ipsum enim sed phasellus. Tortor vel donec aliquet nec eu ipsum morbi. Dictum ut vehicula lectus lorem gravida velit dignissim. Ac scelerisque consequat vulputate eu, commodo at. Mauris tempus duis tempus erat ullamcorper rhoncus in eu, sed. Egestas lorem aliquam felis mauris habitant. Sed arcu risus turpis molestie. Amet, ac neque lectus nibh ut et sed oric metus quam.</p4>
                        </div>
                    </div>
                </div>
            </div>
            <div id="compocompo2">
                <Contact />
                <Footer />
            </div>
        </>
    )
}
export default Casestudycompo;