import React, { useState, useEffect } from "react";
import "../../styles/Formulation/fservice.css";
import { graphql, useStaticQuery } from "gatsby";

export const Fservice = ({fservices}) => {
  
  return (
    <>
      {fservices && fservices.map(fservicess =>
        <div id="fservice">
          <p>{fservicess.fservicetitle}</p>
          <p>{fservicess.fservicedesc}</p>
          {fservicess.fservicecards.map(fservicecardss =>
            <div id="fservice_container_main" key={fservicecardss.id}>
              <div id="fservice_container">
                <div className="fservice_container_cards" id={fservicecardss.fservicecardid}>
                  <div id="fservice_container_cards_block1">
                    <div id="fservice_container_cards_matter">
                      <h1 id="c_c_title">{fservicecardss.fservicecardtitle}</h1>
                      <p id="c_c_matter">{fservicecardss.fservicecarddesc}</p>
                      <p id="c_c_matter">{fservicecardss.fc}
                      {fservicecardss.fli.map(flis =>
                      <>
                      <li key={flis.id}>{flis.list}</li>
                      </>
                      )}</p>
                      
                    </div>
                  </div>
                  <div id="fservice_container_cards_block2">
                    <img src={fservicecardss.fservicepic.publicURL} alt="img" />
                  </div>
                </div>

              </div>
              <div id="fserviceassurance">
                <div id="fservice_matter">
                  <p id="fserviceassurance_title">{fservicecardss.fserviceminicardsmaintitle}</p>
                  <div id="fserviceassurance_container">
                    {fservicecardss.fserviceminicards.map(fserviceminicardsss =>
                      <>
                        <div id="fserviceassurance_container_card1">
                          <img src={fserviceminicardsss.fserviceminicardsimg.publicURL} alt="img" />
                          <p id="p4_c_dis">{fserviceminicardsss.fserviceminicardstitle}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

const FServiceprev = props => {
  const [FServicepre, setFServicepre] = useState({})
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
                fc
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
  useEffect(() => {
    if (data.file) {
      setFServicepre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return(
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