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
       }
  `)
  const [bhide, setBhide] = useState(true)
  const directionButtons = (direction) => {
    return (
      <>
        {!bhide ?
          <span
            aria-hidden="true"
            className={direction === "Next" ? "button-next" : "button-prev"}
            onClick={() => setBhide(true)}
          >
            <img src={next} alt="img" id="nxt_img" />
          </span> : <span
            aria-hidden="true"
            className={direction === "Previous" ? "button-next" : "button-prev"}
            onClick={() => setBhide(false)}
          >
            <img src={prev} alt="img" id="prev_img" />
          </span>}
      </>
    );
  };
  return (
    <>
      <div id="patners">
        <div id="patners_container">
          <div id="patners_container_matter">
            <p>{data.patners.childMarkdownRemark.frontmatter.Patnertitle}</p>
            <p>{data.patners.childMarkdownRemark.frontmatter.patnerdescription}</p>
          </div>
          <Carousel interval={10000000} nextLabel={"Next"}
            prevLabel={"Previous"}
            nextIcon={directionButtons("Next")}
            prevIcon={directionButtons("Previous")}>
            {data.patners.childMarkdownRemark.frontmatter.patnercarousal.map(patnercarousals =>
              <Carousel.Item key={patnercarousals.id}>
                <div id="patners_container_carousal" className="active-content">
                  {patnercarousals.patners.map(patnerss =>
                    <div id="patners_container_carousal_container" key={patnerss.id}>
                      {patnerss.patnerimage.map(patnerimages =>
                        <div id="patners_container_carousal_container_container" key={patnerimages.id}>
                          <img src={patnerimages.image.childImageSharp.fluid.src} alt="img" />
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