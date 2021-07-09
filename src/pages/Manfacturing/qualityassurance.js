import React from "react";
import "../../styles/Manfacture/Qualityassurance.css";
import { graphql, useStaticQuery } from "gatsby";

const Qualityassurance = () => {
    const data = useStaticQuery(graphql`
    query {
        Qualityassurancess: file(relativePath: {eq: "Manfacturing/qualityassurance.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                qualityassurance {
                  id
                  title
                  description
                  qualityassuranceminicontainer {
                    id
                    title
                    description
                    image {
                      publicURL
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

            <div id="Qualityassurance">
                {data.Qualityassurancess.childMarkdownRemark.frontmatter.qualityassurance.map(qualityassurances =>
                    <>
                        <div id="quality_matter" key={qualityassurances.id}>
                            <p id="Qualityassurance_title">{qualityassurances.title}</p>
                            <p id="Qualityassurance_desc">{qualityassurances.description}</p>
                            <div id="Qualityassurance_container">
                                {qualityassurances.qualityassuranceminicontainer.map(qualityassuranceminicontainers =>
                                    <>
                                        <div id="Qualityassurance_container_card1" key={qualityassuranceminicontainers.id}>
                                        <div id="Qualityassurance_container_card1_block1">
                                            <img src={qualityassuranceminicontainers.image.publicURL} alt="img" />
                                            <p id="p4_c_dis">{qualityassuranceminicontainers.title}</p>
                                            </div>
                                            <div id="Qualityassurance_container_card1_block2">
                                            <p id="p4_c_dis2">{qualityassuranceminicontainers.description}</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
export default Qualityassurance;