import React, { useState, useEffect } from "react";
import "../../styles/Manfacture/Quality.css";
import { graphql, useStaticQuery } from "gatsby";

export const Quality = ({ Quality }) => {

  return (
    <>
      {Quality && Quality.map(qualitys =>
        <div id="quality" key={qualitys.id}>
          <h1 id="q_title">{qualitys.title}</h1>
          <h2 id="q_desc">{qualitys.description}</h2>
          <div id="quality_container">
            <div id="quality_container_b1">
              <img src={qualitys.image.publicURL} alt="img" />
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
  const [QualityPre, setQualityPre] = useState({});
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
  useEffect(() => {
    if (data.file) {
      setQualityPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
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