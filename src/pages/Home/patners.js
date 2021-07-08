import React, { useState } from "react";
import "../../styles/Home/Patners.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, useStaticQuery } from "gatsby";
import next from "../../images/next.svg";
import prev from "../../images/prev.svg";

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
  return (
    <>
      <div id="patners">
        <div id="patners_container">
          <div id="patners_container_matter">
            <p>{data.patners.childMarkdownRemark.frontmatter.Patnertitle}</p>
            <p>{data.patners.childMarkdownRemark.frontmatter.patnerdescription}</p>
          </div>
          <Carousel interval={10000000} id="carousss">
            {data.patners.childMarkdownRemark.frontmatter.patnercarousal.map(patnercarousals =>
              <Carousel.Item key={patnercarousals.id} id="carousss2">
                <div id="patners_container_carousal" className="active-content">
                  {patnercarousals.patners.map(patnerss =>
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