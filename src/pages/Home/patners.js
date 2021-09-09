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
            <h1>{Patnertitle}</h1>
            <h2>{patnerdescription}</h2>
          </div>
          <Carousel interval={10000000} id="carousss">
            {patnercarousal && patnercarousal.map((patnercarousalItem, i) =>
              <Carousel.Item key={i} id="carousss2">
                <div id="patners_container_carousal" className="active-content">
                  {patnercarousalItem && patnercarousalItem.patners.map((patnerss, i) =>
                    <div id="patners_container_carousal_container" key={i}>
                      {patnerss && patnerss.patnerimage.map((patnerimages, i) =>
                        <div id="patners_container_carousal_container_container" key={i}>
                          {patnerimages.image.publicURL ?
                            <img src={patnerimages.image.publicURL} alt="img" />
                            :
                            <img src={patnerimages.image} alt="img" />
                          }
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
const PatnerPrev = () => {
  const [patnerPre, setPatnerPre] = useState({});
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "patners.md"}) {
        childMarkdownRemark {
          frontmatter {
            Patnertitle
            patnerdescription
            patnercarousal {
              patners {
                patnerimage {
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