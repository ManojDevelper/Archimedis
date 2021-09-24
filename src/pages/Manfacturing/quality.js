import React from "react";
import "../../styles/Manfacture/Quality.css";
import { graphql, useStaticQuery } from "gatsby";

export const Quality = ({ Quality }) => {

  return (
    <>
      {Quality && Quality.map((qualitys, i) =>
        <div id="quality" key={i}>
          <h1 id="q_title">{qualitys.title}</h1>
          <h2 id="q_desc">{qualitys.description}</h2>
          <div id="quality_container">
            <div id="quality_container_b1">
              {(qualitys.image.publicURL) ?
                <img src={qualitys.image.publicURL} alt="img" />
                :
                <img src={qualitys.image} alt="img" />
              }
            </div>
            <div id="quality_container_b2">
              <p>{qualitys.description1}</p>
              <p>{qualitys.description2}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const QualityPrev = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "Manfacturing/quality.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            Quality {
              title
              description
              description1
              description2
              id
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `)
  
      const QualityPre = data.file.childMarkdownRemark.frontmatter;
 
  return (
    <>
      {
        data.file &&
        <Quality
          Quality={QualityPre.Quality}
        />
      }
    </>
  )
}
export default QualityPrev;