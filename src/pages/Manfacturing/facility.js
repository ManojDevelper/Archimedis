import React from "react";
import "../../styles/Manfacture/Facility.css";
import { graphql, useStaticQuery } from "gatsby";

const Facility = () => {
    const data = useStaticQuery(graphql`
    query {
        Facility: file(relativePath: {eq: "Manfacturing/facility.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                Facility {
                  id
                  title
                  description
                  Facilitycards {
                    id
                    facilityid
                    title
                    description
                    description1
                    description2
                    description3
                    fimage {
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
            {data.Facility.childMarkdownRemark.frontmatter.Facility.map(Facilitys =>
                <div id="facility" key={Facilitys.id}>
                    <p>{Facilitys.title}</p>
                    <p>{Facilitys.description}</p>
                    <div id="facility_container">
                        {Facilitys.Facilitycards.map(Facilitycardss =>
                            <>
                                <div className="facility_container_cards" id={Facilitycardss.facilityid} key={Facilitycardss.id}>
                                    <div id="facility_container_cards_block1">
                                        <div id="facility_container_cards_matter">
                                            <h1 id="c_c_title">{Facilitycardss.title}</h1>
                                            <p id="c_c_matter">{Facilitycardss.description}</p>
                                            <div id="facility_container_cards_block">
                                                <li>{Facilitycardss.description1}</li>
                                                <li>{Facilitycardss.description2}</li>
                                                <li>{Facilitycardss.description3}</li>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="facility_container_cards_block2">
                                        <img src={Facilitycardss.fimage.childImageSharp.fluid.src} alt="img" />
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
export default Facility;