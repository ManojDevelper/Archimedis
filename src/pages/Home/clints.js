import React, { useState, useEffect } from "react";
import "../../styles/Home/Clints.css";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, useStaticQuery } from "gatsby";

export const Clints = ({ clintstitle, clints }) => {

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
                                        {clintItem.clintimg !== null &&
                                            <div id="clints_container_main_b2_b1">
                                                {(clintItem.clintimg !== null && clintItem.clintimg.childImageSharp)
                                                    ? (<img src={clintItem.clintimg.childImageSharp.fluid.src} alt="img" />) :
                                                    (<img src={clintItem.clintimg} alt="img" />)}
                                            </div>
                                        }
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
const ClintsPrev = () => {
    const [clintsprePre, setClintspre] = useState({});
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "clints.md"}) {
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
                    publicURL
                  }
                }
              }
            }
          }
    }`)
    useEffect(() => {
        if (data.file) {
            setClintspre(data.file.childMarkdownRemark.frontmatter);
        }
    }, [data.file]);
    return (
        <>
            {
                data.file &&
                <Clints
                    clintstitle={clintsprePre.clintstitle}
                    clints={clintsprePre.clints}
                />
            }
        </>
    )
}
export default ClintsPrev;