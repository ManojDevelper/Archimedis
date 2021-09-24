import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import "../../styles/About/Aboutstatus.css";

export const Aboutstatus = ({ Aboutstatus }) => {
  return (
    <>
      <div id="aboutstatus">
        <div id="aboutstatus_container">
          {Aboutstatus && Aboutstatus.map((Aboutstatuss, i) =>
            <div id="aboutstatus_container_block1" key={i}>
            {(Aboutstatuss.icon.publicURL) ? 
              <img src={Aboutstatuss.icon.publicURL} alt="img" />
              :
              <img src={Aboutstatuss.icon} alt="img" />
            }
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
  
      const aboutStatus = data.file.childMarkdownRemark.frontmatter;

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