import React from "react";
import "../../styles/Home/Status.css";
import { graphql, useStaticQuery } from "gatsby";

const Status = () => {
    const data = useStaticQuery(graphql`
    query {
      Status: file(relativePath: {eq: "status.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            Status {
              id
              statusnumber
              statustitle
              statusimage {
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
       }
  `)
    return (
        <>
            <div id="status">
                <div id="status_container">
                    {data.Status.childMarkdownRemark.frontmatter.Status.map(Statuss => (
                        <div id="status_card1" key={Statuss.id}>
                            <div id="status_card1_img_block">
                                <img src={Statuss.statusimage.childImageSharp.fluid.src} alt="img1" />
                            </div>
                            <div id="status_card1_matter_block">
                                <p>{Statuss.statusnumber}+</p>
                                <p>{Statuss.statustitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Status;