import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../styles/About/Certifications.css";

export const Certification = ({ title, certificationImages }) => {
  return (
    <>
      <div id="Certifications">
        <h1>{title}</h1>
        <div id="Certifications_container">
          {certificationImages && certificationImages.map(certificationImagess =>
            <div id="Certifications_container_block1">
            {certificationImagess.icon.publicURL ? 
              <img src={certificationImagess.icon.publicURL} alt="img" />
              :
              <img src={certificationImagess.icon} alt="img" />
            }
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const CertificationPrev = () => {
  const [CertificationPre, setCertificationPre] = useState({});
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
  useEffect(() => {
    if (data.file) {
      setCertificationPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
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
