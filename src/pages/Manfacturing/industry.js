import React from "react";
import "../../styles/Manfacture/Industry.css";
import { graphql, useStaticQuery } from "gatsby";

export const Industry = ({ industry }) => {

  return (
    <>
      {industry && industry.map(industrys =>
        <div id="industry">
          <h1>{industrys.title}</h1>
          <h2>{industrys.description}</h2>
          <div id="industry_container">
            {industrys && industrys.industrycards.map((industrycardss, i) =>
              <div className="industry_container_cards" id={industrycardss.industryid} key={i}>
                <div id="industry_container_cards_block1">
                  <div id="industry_container_cards_matter">
                    <h1 id="c_c_title">{industrycardss.title}</h1>
                    <p id="c_c_matter">{industrycardss.description}
                      {industrycardss && industrycardss.li.map(lis =>
                        <li key={lis.id}>{lis.list}</li>
                      )}
                      Thus, resulting in quality output with minimal to no defects.</p>
                  </div>
                </div>
                <div id="industry_container_cards_block2">
                  {(industrycardss.Image.publicURL) ?
                    <img src={industrycardss.Image.publicURL} alt="img" />
                    :
                    <img src={industrycardss.Image} alt="img" />
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const IndustryPre = props => {

  const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "Manfacturing/industry.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                industry {
                  id
                  title
                  description
                  industrycards {
                    id
                    industryid
                    title
                    description
                    li {
                      id
                      list
                    }
                    Image {
                      publicURL
                    }
                  }
                }
              }
            }
          }
    }
  `)

      const IndustryPre = data.file.childMarkdownRemark.frontmatter;
  
  return (
    <>
      {
        data.file &&
        <Industry
          industry={IndustryPre.industry}
        />
      }
    </>
  )
}
export default IndustryPre;