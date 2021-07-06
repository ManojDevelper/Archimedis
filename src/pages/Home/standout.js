import React from "react";
import "../../styles/Home/Standout.css";
import { graphql, useStaticQuery } from "gatsby";

const Standout = () => {
  const data = useStaticQuery(graphql`
    query{
        Standout: file(relativePath: {eq: "standout.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                standout {
                  id
                  title
                  description
                  standoutcontainer {
                    id
                    title
                    image {
                      publicURL
                    }
                  }
                }
              }
            }
          }
    }`)
  return (
    <>
      {data.Standout.childMarkdownRemark.frontmatter.standout.map(standouts =>
        <div id="standout" key={standouts.id}>
          <p>{standouts.title}</p>
          <p>{standouts.description}</p>
          <div id="standout_container">
            {standouts.standoutcontainer.map(standoutcontainers =>
              <>
                <div id="standout_card1" key={standoutcontainers.id}>
                  <img src={standoutcontainers.standimage.publicURL} alt="img" />
                  <p id="p4_c_dis">{standoutcontainers.title}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Standout;