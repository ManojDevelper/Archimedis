import React, { useState, useEffect } from "react";
import "../../styles/Digital/productdev.css";
import { graphql, useStaticQuery } from "gatsby";

export const Productdev = ({prodev}) => {
    
    return (
        <>
            <div id="productdev">
                {prodev && prodev.map(prodevs =>
                    <>
                        <div id="quality_matter">
                            <p className={prodevs.pdclass} id={prodevs.pdid}>{prodevs.title}</p>
                            <p id="productdev_desc">{prodevs.description}</p>
                            <div id="productdev_container">
                                {prodevs && prodevs.prodevminicontainer.map(prodevminicontainers =>
                                    <>
                                        <div className="productdev_container_card1" id={prodevminicontainers.pdcontid} key={prodevminicontainers.id}>
                                        <div id="productdev_container_card1_block1">
                                            <img src={prodevminicontainers.Image.publicURL} alt="img" />
                                            <p id="p4_c_dis">{prodevminicontainers.title}</p>
                                            </div>
                                            <div id="productdev_container_card1_block2">
                                            <p id="p4_c_dis2">{prodevminicontainers.title2}</p>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>

        </>
    );
};
const ProductdevPrev = () => {
  const [ProductdevPre, setProductdevPre] = useState({});
  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "Digital/productdev.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                prodev {
                  id
                  pdid
                  pdclass
                  title
                  description
                  prodevminicontainer {
                    id
                    pdcontid
                    title
                    title2
                    Image {
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
          setProductdevPre(data.file.childMarkdownRemark.frontmatter);
      }
    }, [data.file]);
  return(
    <>
    {
      data.file &&
      <Productdev
        prodev={ProductdevPre.prodev}
      />
    }
    </>
  )
}
export default ProductdevPrev;