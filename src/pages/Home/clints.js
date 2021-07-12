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
                    publicURL
                  }
                }
              }
            }
          }
    }`)
    const clintstitle = data.Clints.childMarkdownRemark.frontmatter.clintstitle;
    const clints = data.Clints.childMarkdownRemark.frontmatter.clints;
    return (
        <>
            <div id="clints">
                <p>{clintstitle}</p>
                <div id="clints_container">
                    <Carousel id="main_carousal_control" interval={1000000}>
                        {clints && clints.map(clintItem =>
                            <Carousel.Item key={clintItem.id}>
                                <div id="clints_container_main">
                                    <div id="clints_container_main_b1">
                                        <h1>{clintItem.carousaltitle}</h1>
                                        <p>{clintItem.carousalreview}</p>
                                    </div>
                                    <div id="clints_container_main_b2">
                                        <div id="clints_container_main_b2_b1">
                                            <img src={clintItem.clintimg.publicURL} alt="img" />
                                        </div>
                                        <div id="clints_container_main_b2_b2">
                                            <p>{clintItem.clintname}</p>
                                            <p>{clintItem.clintdesignation}</p>
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