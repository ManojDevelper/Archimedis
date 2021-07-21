import React, { useState, useEffect } from "react";
import "../../styles/Manfacture/Facility.css";
import { graphql, useStaticQuery } from "gatsby";

export const Facility = ({ Facility }) => {

  return (
    <>
      {Facility && Facility.map(Facilitys =>
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
                      {(Facilitycardss.description1 === "") ? (<></>) : (<li>{Facilitycardss.description1}: <span style={{fontWeight: `lighter`}}>{Facilitycardss.descriptionSpan1}</span></li>)}
                        {(Facilitycardss.description2 === "") ? (<></>) : (<li>{Facilitycardss.description2}: <span style={{fontWeight: `lighter`}}>{Facilitycardss.descriptionSpan2}</span></li>)}
                        {(Facilitycardss.description3 === "") ? (<></>) : (<li>{Facilitycardss.description3}: <span style={{fontWeight: `lighter`}}>{Facilitycardss.descriptionSpan3}</span></li>)}
                        {(Facilitycardss.description4 === "") ? (<></>) : (<li>{Facilitycardss.description4}: <span style={{fontWeight: `lighter`}}>{Facilitycardss.descriptionSpan4}</span></li>)}
                        {(Facilitycardss.description5 === "") ? (<></>) : (<li>{Facilitycardss.description5}: <span style={{fontWeight: `lighter`}}>{Facilitycardss.descriptionSpan5}</span></li>)}
                        
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
const FacilityPrev = props => {
  const [facilityPre, setfacilityPre] = useState({});
  const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "Manfacturing/facility.md"}) {
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
                    description4
                    description5
                    descriptionSpan1
                    descriptionSpan2
                    descriptionSpan3
                    descriptionSpan4
                    descriptionSpan5
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
  useEffect(() => {
    if (data.file) {
      setfacilityPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Facility
          Facility={facilityPre.Facility}
        />
      }
    </>
  )
}
export default FacilityPrev;