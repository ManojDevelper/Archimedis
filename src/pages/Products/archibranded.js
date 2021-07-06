import React from "react";
import "../../styles/Products/Archibranded.css";
import arrow from "../../images/arow.svg";
import { graphql, useStaticQuery } from "gatsby";

const Archibranded = () => {
    const data = useStaticQuery(graphql`
    query{
        Archibrand:  file(relativePath: {eq: "Products/archibrand.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                archibrand {
                  id
                  title
                  description
                  archibrandcards {
                    id
                    archibrandid
                    title
                    description
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
    return (
        <>
            {data.Archibrand.childMarkdownRemark.frontmatter.archibrand.map(archibrands =>
                <div id="archibranded" key={archibrands.id}>
                    <p>{archibrands.title}</p>
                    <p>{archibrands.description}</p>
                    <div id="archibranded_container">
                        {archibrands.archibrandcards.map(archibrandcardss =>
                            <>
                                <div className="archibranded_container_cards" id={archibrandcardss.archibrandid} key={archibrandcardss.id}>
                                    <div id="archibranded_container_cards_block1">
                                        <div id="archibranded_container_cards_matter">
                                            <h1>{archibrandcardss.title}</h1>
                                            <h2>{archibrandcardss.description}</h2>
                                            <button>View More<img src={arrow} alt="img" /></button>
                                        </div>
                                    </div>
                                    <div id="archibranded_container_cards_block2">
                                        <img src={archibrandcardss.Image.publicURL} alt="img" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
export default Archibranded;