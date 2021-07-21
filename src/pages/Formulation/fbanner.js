import React, { useState, useEffect } from "react";
import "../../styles/Formulation/fbanner.css";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

export const Fbanner = ({ Formulationsdescription }) => {
  return (
    <>
      <div id="fbanner">
        <div id="mbanner_container">
          <h1>{Formulationsdescription}</h1>
        </div>
      </div>
      <Top2 link="/formulation/" />
    </>
  )
}

const FBannerPre = props => {
  const [FbannerPre, setFbannerPre] = useState({});
  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "Formulations/fbanner.md"}) {
            childMarkdownRemark {
              frontmatter {
                Formulationsdescription
              }
            }
          }
        }
     `)
  useEffect(() => {
    if (data.file) {
      setFbannerPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Fbanner
          Formulationsdescription={FbannerPre.Formulationsdescription}
        />
      }
    </>
  )
}
export default FBannerPre;
