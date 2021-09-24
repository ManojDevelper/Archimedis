import React, { useState, useEffect } from "react";
import "../../styles/Products/Archibranded.css";
import arrow from "../../images/arow.svg";
import { graphql, useStaticQuery } from "gatsby";

export const Archibranded = ({ archibrand }) => {

    return (
        <>
            {archibrand && archibrand.map((archibrands, i) =>
                <div id="archibranded" key={i}>
                    <h1>{archibrands.title}</h1>
                    <h2>{archibrands.description}</h2>
                    <div id="archibranded_container">
                        {archibrands.archibrandcards.map((archibrandcardss, id) =>
                            <div className="archibranded_container_cards" key={i} id={archibrandcardss.archibrandid}>
                                <div id="archibranded_container_cards_block1">
                                    <div id="archibranded_container_cards_matter">
                                        <p>{archibrandcardss.title}</p>
                                        <h2>{archibrandcardss.description}</h2>
                                        <button>View More<img src={arrow} alt="img" /></button>
                                    </div>
                                </div>
                                <div id="archibranded_container_cards_block2">
                                    {(archibrandcardss.Image.publicURL) ?
                                        <img src={archibrandcardss.Image.publicURL} alt="img" />
                                        :
                                        <img src={archibrandcardss.Image} alt="img" />
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
const ArchiBrandedPrev = props => {
    const [ArchiBrandedPre, setArchiBrandedPre] = useState({});
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "Products/archibrand.md"}) {
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
    useEffect(() => {
        if (data.file) {
            setArchiBrandedPre(data.file.childMarkdownRemark.frontmatter);
        }
    }, [data.file]);
    return (
        <>
            {
                data.file &&
                <Archibranded
                    archibrand={ArchiBrandedPre.archibrand}
                />
            }
        </>
    )
}
export default ArchiBrandedPrev;