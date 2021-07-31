import React, { useState, useEffect } from "react";
import "../../styles/Products/Archibranded.css";
import arrow from "../../images/arow.svg";
import { graphql, useStaticQuery } from "gatsby";

export const Archibranded = ({ archibrand }) => {

    return (
        <>
            {archibrand && archibrand.map(archibrands =>
                <div id="archibranded" key={archibrands.id}>
                    <h1>{archibrands.title}</h1>
                    <h2>{archibrands.description}</h2>
                    <div id="archibranded_container">
                        {archibrands.archibrandcards.map(archibrandcardss =>
                            <>
                                <div className="archibranded_container_cards" id={archibrandcardss.archibrandid} key={archibrandcardss.id}>
                                    <div id="archibranded_container_cards_block1">
                                        <div id="archibranded_container_cards_matter">
                                            <p>{archibrandcardss.title}</p>
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