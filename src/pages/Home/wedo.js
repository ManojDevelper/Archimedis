import React from "react";
import "../../styles/Home/Wedo.css";
import arrow from "../../images/arow.svg";
import { graphql, useStaticQuery } from "gatsby";

const Wedo = () => {
  const data = useStaticQuery(graphql`
    query{
        Wedo: file(relativePath: {eq: "wedo.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                wedotitle
                wedo {
                  id
                  wedoname
                  wedodesc
                  wedoimg {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
    }`)
  return (
    <>
      <div id="wedo">
        <p>{data.Wedo.childMarkdownRemark.frontmatter.wedotitle}</p>
        <div id="wedo_container">
          {data.Wedo.childMarkdownRemark.frontmatter.wedo.map(wedos =>
            <div id="wedo_container_cards" key={wedos.id}>
              <div id="wedo_container_cards_block1">
                <div id="wedo_container_cards_matter">
                  <h1>{wedos.wedoname}</h1>
                  <p>{wedos.wedodesc}</p>
                  <button>View More<img src={arrow} alt="img" /></button>
                </div>
              </div>
              <div id="wedo_container_cards_block2">
                <img src={wedos.wedoimg.childImageSharp.fluid.src} alt="img" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Wedo;