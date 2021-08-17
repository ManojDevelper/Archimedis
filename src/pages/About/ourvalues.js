import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../styles/About/Ourvalues.css";

export const Ourvalues = ({ title, ourValues }) => {
    return (
        <>
            <div id="Ourvalues">
                <h1>{title}</h1>
                <div id="Ourvalues_container">
                    {ourValues && ourValues.map(ourValuess =>
                        <div id="Ourvalues_container_block1">
                        {ourValuess.image.publicURL ?
                            <img src={ourValuess.image.publicURL} alt="img" />
                            :
                            <img src={ourValuess.image} alt="img" />
                        }
                            <p>{ourValuess.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const OurvaluesPrev = () => {
    const [OurvaluesPre, setOurvaluesPre] = useState({});
    const data = useStaticQuery(graphql`
      query{
          file(relativePath: {eq: "About/ourvalues.md"}) {
              id
              childMarkdownRemark {
                frontmatter {
                  title
                  ourValues {
                    id
                    description
                    image {
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
            setOurvaluesPre(data.file.childMarkdownRemark.frontmatter);
        }
    }, [data.file]);
    return (
        <>
            {
                data.file &&
                <Ourvalues
                    title={OurvaluesPre.title}
                    ourValues={OurvaluesPre.ourValues}
                />
            }
        </>
    )
}
export default OurvaluesPrev;

