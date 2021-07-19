import React, { useState, useEffect } from "react";
import "../../styles/Home/Patners.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, useStaticQuery } from "gatsby";

export const Patners = ({ Patnertitle, patnerdescription, patnercarousal }) => {

  return (
    <>
      <div id="patners">
        <div id="patners_container">
          <div id="patners_container_matter">
            <p>{Patnertitle}</p>
            <p>{patnerdescription}</p>
          </div>
          <Carousel interval={10000000} id="carousss">
            {patnercarousal && patnercarousal.map(patnercarousalItem =>
              <Carousel.Item key={patnercarousalItem.id} id="carousss2">
                <div id="patners_container_carousal" className="active-content">
                  {patnercarousalItem && patnercarousalItem.patners.map(patnerss =>
                    <div id="patners_container_carousal_container" key={patnerss.id}>
                      {patnerss && patnerss.patnerimage.map(patnerimages =>
                        <div id="patners_container_carousal_container_container" key={patnerimages.id}>
                          <img src={patnerimages.image.publicURL} alt="img" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      </div>
    </>
  );
};
const PatnerPrev = props => {
  const [patnerPre, setPatnerPre] = useState({});
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "patners.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            Patnertitle
            patnerdescription
            patnercarousal {
              id
              patners {
                id
                patnerimage {
                  id
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
      setPatnerPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Patners
          Patnertitle={patnerPre.Patnertitle}
          patnerdescription={patnerPre.patnerdescription}
          patnercarousal={patnerPre.patnercarousal}
        />
      }
    </>
  )
}
export default PatnerPrev;