import React from "react";
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
                            <p><span>{ourValuess.title} : </span>{ourValuess.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const OurvaluesPrev = () => {
   
    const data = useStaticQuery(graphql`
      query{
          file(relativePath: {eq: "About/ourvalues.md"}) {
              id
              childMarkdownRemark {
                frontmatter {
                  title
                  ourValues {
                    id
                    title
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
    
            const OurvaluesPre = data.file.childMarkdownRemark.frontmatter;
    
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

