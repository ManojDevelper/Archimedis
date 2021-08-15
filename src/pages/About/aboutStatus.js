import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby"
import "../../styles/About/Aboutstatus.css";

export const Aboutstatus = ({ Aboutstatus }) => {
  return (
    <>
      <div id="aboutstatus">
        <div id="aboutstatus_container">
          {Aboutstatus && Aboutstatus.map(Aboutstatuss =>
            <div id="aboutstatus_container_block1">
              <img src={Aboutstatuss.icon.publicURL} alt="img" />
              <h1>{Aboutstatuss.title}</h1>
              <p>{Aboutstatuss.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const AboutstatusPrev = props => {
  const [aboutStatus, setaboutStatus] = useState({});
  const data = useStaticQuery(graphql`
  query{
      file(relativePath: {eq: "About/aboutstatus.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
              Aboutstatus {
                id
                title
                description
                icon {
                  publicURL
                }
              }
            }
          }
        }
  }`)
  useEffect(() => {
    if (data.file) {
      setaboutStatus(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Aboutstatus
          Aboutstatus={aboutStatus.Aboutstatus}
        />
      }
    </>
  )
}
export default AboutstatusPrev;