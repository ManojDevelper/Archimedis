import React, { Fragment } from "react";
import "../../styles/Formulation/fservice.css";
import { graphql, useStaticQuery } from "gatsby";

export const Fservice = ({ fservices }) => {

  return (
    <>
      {fservices && fservices.map((fservicess, i) =>
        <div id="fservice" key={i}>
          <h1>{fservicess.fservicetitle}</h1>
          <h2>{fservicess.fservicedesc}</h2>
          <div>
            {fservicess.fservicecards.map((fservicecardss, i) =>
              <div id="fservice_container_main" key={i}>
                <div id="fservice_container">
                  <div className="fservice_container_cards" id={fservicecardss.fservicecardid}>
                    <div id="fservice_container_cards_block1">
                      <div id="fservice_container_cards_matter">
                        <h1 id="c_c_title">{fservicecardss.fservicecardtitle}</h1>
                        <p id="c_c_matter">{fservicecardss.fservicecarddesc}</p>
                        <p id="c_c_matter">
                          {fservicecardss.fli.map(flis =>
                            <>
                              <li key={flis.id}>{flis.list}</li>
                            </>
                          )}</p>

                      </div>
                    </div>
                    <div id="fservice_container_cards_block2">
                      {(fservicecardss.fservicepic.publicURL) ?
                        <img src={fservicecardss.fservicepic.publicURL} alt={fservicecardss.alt_tag} />
                        :
                        <img src={fservicecardss.fservicepic} alt={fservicecardss.alt_tag} />
                      }
                    </div>
                  </div>

                </div>
                <div id="fserviceassurance">
                  <div id="fservice_matter">
                    <p id="fserviceassurance_title">{fservicecardss.fserviceminicardsmaintitle}</p>
                    <div id="fserviceassurance_container">
                      {fservicecardss.fserviceminicards.map((fserviceminicardsss, i) =>
                        <Fragment key={i}>
                          <div id="fserviceassurance_container_card1">
                            {(fserviceminicardsss.fserviceminicardsimg.publicURL) ?
                              <img src={fserviceminicardsss.fserviceminicardsimg.publicURL} alt="img" />
                              :
                              <img src={fserviceminicardsss.fserviceminicardsimg} alt="img" />
                            }
                            <p id="p4_c_dis">{fserviceminicardsss.fserviceminicardstitle}</p>
                          </div>
                        </Fragment>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

const FServiceprev = props => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "Formulations/fservices.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            fservices {
              id
              fservicetitle
              fservicedesc
              fservicecards {
                id
                fservicecardid
                fservicecardtitle
                fservicecarddesc
                fserviceminicardsmaintitle
                alt_tag
                fservicepic {
                  publicURL
                  }
                fserviceminicards {
                  id
                  fserviceminicardstitle
                  fserviceminicardsimg {
                    publicURL
                  }
                }
                fli{
                  id
                  list
                }
              }
            }
          }
        }
      }
    }
  `)

      const FServicepre = data.file.childMarkdownRemark.frontmatter;
   
  return (
    <>
      {
        data.file &&
        <Fservice
          fservices={FServicepre.fservices}
        />
      }
    </>
  )
}
export default FServiceprev;