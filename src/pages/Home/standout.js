import React from "react";
import "../../styles/Home/Standout.css";
import { graphql, useStaticQuery } from "gatsby";

const Standout = () => {
  const data = useStaticQuery(graphql`
    query{
        Standout: file(relativePath: {eq: "Standout.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
              standout {
                id
                head
                content
                Standoutcontainer {
                  id
                  standname
                  standimage {
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
        <p>{standouts.head}</p>
        <p>{standouts.content}</p>
        <div id="standout_container">
          {standouts.Standoutcontainer.map(Standoutcontainers =>
            <div id="standout_card1" key={Standoutcontainers.id}>
              <img src={Standoutcontainers.standimage.publicURL} alt="img" />
              <p id="p4_c_dis">{Standoutcontainers.standname}</p>
            </div>
          )}
        </div>
      </div>
    )}
    </>
  );
};
export default Standout;