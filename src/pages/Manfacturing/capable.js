import React, { useState, useEffect } from "react";
import "../../styles/Manfacture/Capable.css";
import { graphql, useStaticQuery } from "gatsby";

export const Capable = ({ Capabilities }) => {

  return (
    <>
      {Capabilities && Capabilities.map(Capabilitiess =>
        <div id="capable">
          <h1>{Capabilitiess.capabilitiestitle}</h1>
          <h2>{Capabilitiess.capabilitiesdesc}</h2>
          <div id="capable_container">
            {Capabilitiess.capabilitiescards.map(capabilitiescardss =>
              <div className="capable_container_cards" id={capabilitiescardss.capabilitiescardid}>
                <div id="capable_container_cards_block1">
                  <div id="capable_container_cards_matter">
                    <h1 id="c_c_title">{capabilitiescardss.capabilitiescardtitle}</h1>
                    <p id="c_c_matter">{capabilitiescardss.capabilitiescarddesc}</p>
                    <div id="capable_container_cards_block">
                      <p id="block_title">Available as</p>
                      <div id="capable_container_cards_block_card_container">
                        {capabilitiescardss.capabilitiesminicards.map(capabilitiesminicardss =>
                          <div id="capable_container_cards_block_card_container_blocks">
                            {(capabilitiesminicardss.image.publicURL) ?
                              <img src={capabilitiesminicardss.image.publicURL} alt={capabilitiesminicardss.alt_tag} />
                              :
                              <img src={capabilitiesminicardss.image} alt={capabilitiesminicardss.alt_tag} />
                            }
                            <p>{capabilitiesminicardss.capabilitiesminicardstitle}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div id="capable_container_cards_block2">
                  {(capabilitiescardss.image.publicURL) ?
                    <img src={capabilitiescardss.image.publicURL} alt="img" />
                    :
                    <img src={capabilitiescardss.image} alt="img" />
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
const CapablePrev = props => {
  const [CapablePre, setCapablePre] = useState({});
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "Manfacturing/capabilities.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            Capabilities {
              id
              capabilitiestitle
              capabilitiesdesc
              capabilitiescards {
                id
                capabilitiescardtitle
                capabilitiescardid
                capabilitiescarddesc
                alt_tag
                image {
                  publicURL
                }
                capabilitiesminicards {
                  id
                  capabilitiesminicardstitle
                  image {
                    publicURL
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  useEffect(() => {
    if (data.file) {
      setCapablePre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        <Capable
          Capabilities={CapablePre.Capabilities}
        />
      }
    </>
  )
}
export default CapablePrev;