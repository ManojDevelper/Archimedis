import React from 'react';
import "../../styles/Home/Footer.css";
import img1 from "../../images/linkdin.svg";
import img2 from "../../images/facebook.svg";
import img3 from "../../images/insta.svg";
import img4 from "../../images/twitter.svg";
import img5 from "../../images/youtube.svg";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        Footer: file(relativePath: {eq: "footer.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                footer {
                  id
                  title
                  footercontainer {
                    id
                    description
                  }
                }
              }
            }
          }
    }`)
    const footer = data.Footer.childMarkdownRemark.frontmatter.footer;
    return (
        <>
            <div id="footer">
                <div id="footer_container">
                    <div id="footer_container_top">
                        {footer && footer.map(footerItem =>
                            <div id="footer_cards" key={footerItem.id}>
                                <h1>{footerItem.title}</h1>
                                {footerItem.footercontainer.map(footercontainers =>
                                    <div key={footercontainers.id}>
                                        <p>{footercontainers.description}</p>
                                    </div>
                                )}
                            </div>
                        )}
                        <div id="footer_cards2">
                            <iframe title="Archimedis" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.306655100214!2d80.0145069!3d12.9989065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd072fdf7b5826742!2sArchimedis%20Healthcare%20Private%20Limited%20-%20Reputed%20Pharma%20Manufacturers%20Chennai!5e0!3m2!1sen!2sin!4v1623929915150!5m2!1sen!2sin" id="footermap"></iframe>
                        </div>
                    </div>
                    <div id="footer_container_bottom">
                        <div id="footer_container_bottom_icons">
                            <img src={img1} alt="img" />
                            <img src={img2} alt="img" />
                            <img src={img3} alt="img" />
                            <img src={img4} alt="img" />
                            <img src={img5} alt="img" />
                        </div>
                        <p>Copyright © 2021 Archimedis. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;