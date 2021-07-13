import React from "react";
import "../../styles/Home/Patners.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, useStaticQuery } from "gatsby";

const Patners = () => {
  const data = useStaticQuery(graphql`
    query {
      patners:  file(relativePath: {eq: "patners.md"}) {
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
  const Patnertitle = data.patners.childMarkdownRemark.frontmatter.Patnertitle;
  const patnerdescription = data.patners.childMarkdownRemark.frontmatter.patnerdescription;
  const patnercarousal = data.patners.childMarkdownRemark.frontmatter.patnercarousal;
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
                  {patnercarousalItem.patners.map(patnerss =>
                    <div id="patners_container_carousal_container" key={patnerss.id}>
                      {patnerss.patnerimage.map(patnerimages =>
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
export default Patners;