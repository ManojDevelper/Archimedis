import React, { useState, useEffect } from "react";
import "../../styles/Formulation/ffacility.css";
import { graphql, useStaticQuery } from "gatsby";

export const Ffacility = ({ Ffacility }) => {

  return (
    <>
      {Ffacility && Ffacility.map(Ffacilitys =>
        <div id="ffacility" key={Ffacilitys.id}>
          <h1>{Ffacilitys.Ffacilitytitle}</h1>
          <h2>{Ffacilitys.Ffacilitydis}</h2>
          <div id="ffacility_container">
            {Ffacilitys.Ffacilitycards.map(Ffacilitycardss =>
              <>
                <div className="ffacility_container_cards" id={Ffacilitycardss.Ffacilityblockid} key={Ffacilitycardss.id}>
                  <div id="ffacility_container_cards_block2">
                  {(Ffacilitycardss.ffacilitypic.publicURL) ? 
                    <img src={Ffacilitycardss.ffacilitypic.publicURL} alt="img" />
                    :
                    <img src={Ffacilitycardss.ffacilitypic} alt="img" />
                  }
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
const FfacilityPrev = props => {
  const [Ffacilityss, setFfacilityss] = useState({});
  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "Formulations/ffacility.md"}) {
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
                      publicURL
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
      setFfacilityss(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Ffacility
          Ffacility={Ffacilityss.Ffacility}
        />
      }
    </>
  )
}
export default FfacilityPrev;