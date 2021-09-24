import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../styles/About/Certifications.css";

export const Certification = ({ title, certificationImages }) => {
  return (
    <>
      <div id="Certifications">
        <h1>{title}</h1>
        <div id="Certifications_container">
          {certificationImages && certificationImages.map((certificationImagess, i) =>
            <div id="Certifications_container_block1" ke={i}>
              {certificationImagess.icon.publicURL ?
                <img src={certificationImagess.icon.publicURL} alt={certificationImagess.alt_tag} />
                :
                <img src={certificationImagess.icon} alt={certificationImagess.alt_tag} />
              }
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const CertificationPrev = () => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "About/certification.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                title
                certificationImages {
                  id
                  icon {
                      publicURL
                    }
                }
              }
            }
          }
        }
     `)

      const CertificationPre = data.file.childMarkdownRemark.frontmatter;

  return (
    <>
      {
        data.file &&
        <Certification
          title={CertificationPre.title}
          certificationImages={CertificationPre.certificationImages}
        />
      }
    </>
  )
}
export default CertificationPrev;
