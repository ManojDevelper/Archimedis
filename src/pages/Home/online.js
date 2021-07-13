import React from "react";
import "../../styles/Home/Online.css";
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
    const onlinetitle = data.Online.childMarkdownRemark.frontmatter.onlinetitle;
    const onlinedesc = data.Online.childMarkdownRemark.frontmatter.onlinedesc;
    const onlineimg = data.Online.childMarkdownRemark.frontmatter.onlineimg.childImageSharp.fluid.src;
    return (
        <>
            <div id="online">
                <div id="online_container">
                    <div id="online_container_block1">
                        <p>{onlinetitle}</p>
                        <p>{onlinedesc}</p>
                        <h1 id="onlinebutton">Coming Soon...</h1>
                    </div>
                    <div id="online_container_block1">
                        <img src={onlineimg} alt="img" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Online;