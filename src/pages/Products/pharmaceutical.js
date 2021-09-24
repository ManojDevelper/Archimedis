import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../styles/Products/pharmaceutical.css";

export const Pharmaceutical = ({ pharmaceutical }) => {

  return (
    <>
      {pharmaceutical && pharmaceutical.map((pharmaceuticals, i) =>
        <div id="pharmaceutical" key={i}>
          <p>{pharmaceuticals.title}</p>
          <p>{pharmaceuticals.description}</p>
          <div id="pharmaceutical_container">
            {pharmaceuticals.pharmaceuticalcards.map((pharmaceuticalcardss, i) =>
              <div className="pharmaceutical_container_cards" id={pharmaceuticalcardss.pharmaceuticalid} key={i}>
                <div id="pharmaceutical_container_cards_block1">
                  <div id="pharmaceutical_container_cards_matter">
                    <h1 id="c_c_title">{pharmaceuticalcardss.title}</h1>
                    <p id="c_c_matter">{pharmaceuticalcardss.description}</p>
                  </div>
                </div>
                <div id="pharmaceutical_container_cards_block2">
                  {(pharmaceuticalcardss.Image.publicURL) ?
                    <img src={pharmaceuticalcardss.Image.publicURL} alt={pharmaceuticalcardss.alt_tag} />
                    :
                    <img src={pharmaceuticalcardss.Image} alt={pharmaceuticalcardss.alt_tag} />
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
const PharmaceuticalPrev = props => {

  const data = useStaticQuery(graphql`
  query{
      file(relativePath: {eq: "Products/pharmaceutical.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
              pharmaceutical {
                id
                title
                description
                pharmaceuticalcards {
                  id
                  title
                  description
                  pharmaceuticalid
                  alt_tag
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
  
      const PharmaceuticalPre = data.file.childMarkdownRemark.frontmatter;

  return (
    <>
      {
        data.file &&
        <Pharmaceutical
          pharmaceutical={PharmaceuticalPre.pharmaceutical}
        />
      }
    </>
  )
}
export default PharmaceuticalPrev;