import React from "react";
import "../../styles/Home/Clints.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, useStaticQuery } from "gatsby";

const Clints = () => {
    const data = useStaticQuery(graphql`
    query{
        Clints:file(relativePath: {eq: "clints.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                clintstitle
                clints {
                  id
                  clintname
                  carousaltitle
                  carousalreview
                  clintdesignation
                  clintimg {
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
    }`)
    return (
        <>
            <div id="clints">
                <p>{data.Clints.childMarkdownRemark.frontmatter.clintstitle}</p>
                <div id="clints_container">
                    <Carousel id="main_carousal_control" interval={1000000}>
                        {data.Clints.childMarkdownRemark.frontmatter.clints.map(clintss =>
                            <Carousel.Item key={clintss.id}>
                                <div id="clints_container_main">
                                    <div id="clints_container_main_b1">
                                        <h1>{clintss.carousaltitle}</h1>
                                        <p>{clintss.carousalreview}</p>
                                    </div>
                                    <div id="clints_container_main_b2">
                                        <div id="clints_container_main_b2_b1">
                                            <img src={clintss.clintimg.childImageSharp.fluid.src} alt="img" />
                                        </div>
                                        <div id="clints_container_main_b2_b2">
                                            <p>{clintss.clintname}</p>
                                            <p>{clintss.clintdesignation}</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
            </div>
        </>
    );
};
export default Clints;