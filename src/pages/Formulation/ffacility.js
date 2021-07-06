import React from "react";
import "../../styles/Formulation/ffacility.css";
import { graphql, useStaticQuery } from "gatsby";

const Ffacility = () => {
    const data = useStaticQuery(graphql`
    query{
        ffacility:  file(relativePath: {eq: "Formulations/ffacility.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                Ffacility {
                  id
                  Ffacilitytitle
                  Ffacilitydis
                  Ffacilitycards {
                    id
                    Ffacilityblockid
                    Ffacilitydesc
                    Ffacilityname
                      ffacilitypic {
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
            {data.ffacility.childMarkdownRemark.frontmatter.Ffacility.map(Ffacilitys =>
                <div id="ffacility" key={Ffacilitys.id}>
                    <p>{Ffacilitys.Ffacilitytitle}</p>
                    <p>{Ffacilitys.Ffacilitydis}</p>
                    <div id="ffacility_container">
                        {Ffacilitys.Ffacilitycards.map(Ffacilitycardss =>
                            <>
                                <div className="ffacility_container_cards" id={Ffacilitycardss.Ffacilityblockid} key={Ffacilitycardss.id}>
                                    <div id="ffacility_container_cards_block2">
                                        <img src={Ffacilitycardss.ffacilitypic.childImageSharp.fluid.src} alt="img" />
                                    </div>
                                    <div id="ffacility_container_cards_block1">
                                        <div id="ffacility_container_cards_matter">
                                            <h1 id="c_c_title">{Ffacilitycardss.Ffacilityname}</h1>
                                            <p id="c_c_matter">{Ffacilitycardss.Ffacilitydesc}</p>
                                        </div>
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
export default Ffacility;