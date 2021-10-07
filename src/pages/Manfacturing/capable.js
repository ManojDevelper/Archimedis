import React from "react";
import "../../styles/Manfacture/Capable.css";
import { graphql, useStaticQuery } from "gatsby";

export const Capable = ({ Capabilities, Status }) => {

  return (
    <>
      {Capabilities && Capabilities.map((Capabilitiess, i) =>
        <div id="OralSolidForms" key={i}>
          <h1>{Capabilitiess.capabilitiestitle}</h1>
          <h2>{Capabilitiess.capabilitiesdesc}</h2>
          <div id="capable_container">
            {Capabilitiess.capabilitiescards.map((capabilitiescardss, i) =>
              <div className="capable_container_cards" key={i} id={capabilitiescardss.capabilitiescardid}>
                <div id="capable_container_cards_block1">
                  <div id="capable_container_cards_matter">
                    <h1 id="c_c_title">{capabilitiescardss.capabilitiescardtitle}</h1>
                    <p id="c_c_matter">{capabilitiescardss.capabilitiescarddesc}</p>
                    <div id="capable_container_cards_block">
                      <p id="block_title">Available as</p>
                      <div id="capable_container_cards_block_card_container">
                        {capabilitiescardss.capabilitiesminicards.map((capabilitiesminicardss, i) =>
                          <div id="capable_container_cards_block_card_container_blocks" key={i}>
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
      <div id="status">
        <div id="status_container">
          {Status && Status.map((Statuss, i) => (
            <div id="status_card1" key={i}>
              <div id="status_card1_img_block">
                {Statuss.statusimage.publicURL ? 
                <img src={Statuss.statusimage.publicURL} alt="img1" />
                :
                <img src={Statuss.statusimage} alt="img1" />
}
              </div>
              <div id="status_card1_matter_block">
                <p>{Statuss.statusnumber}<span>million</span></p>
                <p>{Statuss.statustitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const CapablePrev = props => {

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
            Status {
              statusnumber
              statustitle
              statusimage {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  const CapablePre = data.file.childMarkdownRemark.frontmatter;

  return (
    <>
      {
        <Capable
          Capabilities={CapablePre.Capabilities}
          Status={CapablePre.Status}
        />
      }
    </>
  )
}
export default CapablePrev;