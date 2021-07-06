import React from "react";
import "../../styles/Home/Online.css";
// import arrow from "../../images/arow.svg";
import { graphql, useStaticQuery } from "gatsby";

const Online = () => {
    const data = useStaticQuery(graphql`
    query{
        Online:file(relativePath: {eq: "online.md"}) {
              id
              childMarkdownRemark {
                frontmatter {
                  onlinetitle
                  onlinedesc
                  onlineimg {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
    }`)
    return (
        <>
            <div id="online">
                <div id="online_container">
                    <div id="online_container_block1">
                        <p>{data.Online.childMarkdownRemark.frontmatter.onlinetitle}</p>
                        <p>{data.Online.childMarkdownRemark.frontmatter.onlinedesc}</p>
                        {/* <button>Comming Soon<img src={arrow} alt="img" /></button> */}
                        <h1 id="onlinebutton">Coming Soon...</h1>
                    </div>
                    <div id="online_container_block1">
                        <img src={data.Online.childMarkdownRemark.frontmatter.onlineimg.childImageSharp.fluid.src} alt="img" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Online;