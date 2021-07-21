import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../styles/Products/pharmaceutical.css";

export const Pharmaceutical = ({ pharmaceutical }) => {

  return (
    <>
      {pharmaceutical && pharmaceutical.map(pharmaceuticals =>
        <div id="pharmaceutical" key={pharmaceuticals.id}>
          <p>{pharmaceuticals.title}</p>
          <p>{pharmaceuticals.description}</p>
          <div id="pharmaceutical_container">
            {pharmaceuticals.pharmaceuticalcards.map(pharmaceuticalcardss =>
              <div className="pharmaceutical_container_cards" id={pharmaceuticalcardss.pharmaceuticalid} key={pharmaceuticalcardss.id}>
                <div id="pharmaceutical_container_cards_block1">
                  <div id="pharmaceutical_container_cards_matter">
                    <h1 id="c_c_title">{pharmaceuticalcardss.title}</h1>
                    <p id="c_c_matter">{pharmaceuticalcardss.description}</p>
                  </div>
                </div>
                <div id="pharmaceutical_container_cards_block2">
                  <img src={pharmaceuticalcardss.Image.childImageSharp.fluid.src} alt="img" />
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
  const [PharmaceuticalPre, setPharmaceuticalPre] = useState({});
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
                  Image {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
   `)
  useEffect(() => {
    if (data.file) {
      setPharmaceuticalPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
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