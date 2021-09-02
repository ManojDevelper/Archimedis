import React, { useState, useEffect } from "react";
import "../../styles/Digital/dbanner.css";
import Nav from "../nav";
import Top2 from "../../components/Taketop";
import { graphql, useStaticQuery } from "gatsby";

export const Dbanner = ({description}) => {
    return (
        <>            <Nav />
            <div id="dbanner">
                <div id="dbanner_container">
                    <h1>{description}</h1>
                </div>
            </div>
            <Top2 link="/digital/" />
        </>
    );
};
const DBannerPre = props => {
  const [DbannerPre, setDbannerPre] = useState({});
  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "Digital/dbanner.md"}) {
            childMarkdownRemark {
              frontmatter {
                description
              }
            }
          }
        }
     `)
  useEffect(() => {
    if (data.file) {
      setDbannerPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Dbanner
          description={DbannerPre.description}
        />
      }
    </>
  )
}
export default DBannerPre;
