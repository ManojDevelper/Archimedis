import React from "react";
import "../../styles/Manfacture/Quality.css";
import { graphql, useStaticQuery } from "gatsby";

const Quality = () => {
    const data = useStaticQuery(graphql`
    query {
      Quality: file(relativePath: {eq: "Manfacturing/quality.md"}) {
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
    return (
        <>
            {data.Quality.childMarkdownRemark.frontmatter.Quality.map(qualitys =>
                <div id="quality" key={qualitys.id}>
                    <p id="q_title">{qualitys.title}</p>
                    <p id="q_desc">{qualitys.description}</p>
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
export default Quality;