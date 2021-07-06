import React from "react";
import "../../styles/Manfacture/Industry.css";
import { graphql, useStaticQuery } from "gatsby";

const Industry = () => {
    const data = useStaticQuery(graphql`
    query {
        Industry: file(relativePath: {eq: "Manfacturing/industry.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                industry {
                  id
                  title
                  description
                  industrycards {
                    id
                    industryid
                    title
                    description
                    Image {
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
    }
  `)
    return (
        <>
            {data.Industry.childMarkdownRemark.frontmatter.industry.map(industrys =>
                <div id="industry">
                    <p>{industrys.title}</p>
                    <p>{industrys.description}</p>
                    <div id="industry_container">
                        {industrys.industrycards.map(industrycardss =>
                            <>
                                <div className="industry_container_cards" id={industrycardss.industryid} key={industrycardss.id}>
                                    <div id="industry_container_cards_block1">
                                        <div id="industry_container_cards_matter">
                                            <h1 id="c_c_title">{industrycardss.title}</h1>
                                            <p id="c_c_matter">{industrycardss.description}</p>
                                        </div>
                                    </div>
                                    <div id="industry_container_cards_block2">
                                        <img src={industrycardss.Image.childImageSharp.fluid.src} alt="img" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
export default Industry;