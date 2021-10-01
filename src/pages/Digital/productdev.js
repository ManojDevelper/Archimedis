import React from "react";
import "../../styles/Digital/productdev.css";
import { graphql, useStaticQuery } from "gatsby";

export const Productdev = ({ prodev }) => {

  return (
    <>
      {prodev && prodev.map((prodevs, i) =>
        <div className="productdev" id={prodevs.pdid} key={i}>
          <div className="quality_matter">
            <p className={prodevs.pdclass}>{prodevs.title}</p>
            <p id="productdev_desc">{prodevs.description}</p>
            <div id="productdev_container">
              {prodevs && prodevs.prodevminicontainer.map((prodevminicontainers, i) =>
                <div className="productdev_container_card1" id={prodevminicontainers.pdcontid} key={i}>
                  <div id="productdev_container_card1_block1">
                    {(prodevminicontainers.Image.publicURL) ?
                      <img src={prodevminicontainers.Image.publicURL} alt="img" />
                      :
                      <img src={prodevminicontainers.Image} alt="img" />
                    }
                    <p id="p4_c_dis">{prodevminicontainers.title}</p>
                  </div>
                  <div id="productdev_container_card1_block2">
                    <p id="p4_c_dis2">{prodevminicontainers.title2}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const ProductdevPrev = () => {

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

  const ProductdevPre = data.file.childMarkdownRemark.frontmatter;

  return (
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