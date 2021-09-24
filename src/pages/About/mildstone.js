import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../styles/About/Mildstone.css";

export const Mildstone = ({ title, description, mildstone }) => {
    return (
        <>
            <div id="Mildstone">
                <h1>{title}</h1>
                <h2>{description}</h2>
                <div id="Mildstone_container">
                    <div id="Mildstone_container_block">
                        {mildstone && mildstone.map((mildstones, i) =>
                            <div id="Mildstone_container_blocks" key={i}>
                                <p id="date">{mildstones.date}</p>
                                {mildstones.mildstonecontainericon.publicURL ?
                                    <img src={mildstones.mildstonecontainericon.publicURL} alt="img" />
                                    :
                                    <img src={mildstones.mildstonecontainericon} alt="img" />
                                }
                                <div>
                                    <h1>{mildstones.title}</h1>
                                    <p>{mildstones.description}</p>
                                </div>
                                <div id="dotted_line"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
const MildstonePrev = () => {
    
    const data = useStaticQuery(graphql`
      query{
          file(relativePath: {eq: "About/mildstone.md"}) {
              id
              childMarkdownRemark {
                frontmatter {
                    title
                    description
                    mildstone {
                            id
                            title
                            description
                            date
                            mildstonecontainericon {
                                publicURL
                            }
                        }
                }
              }
            }
          }
       `)
   
            const MildstonePre = data.file.childMarkdownRemark.frontmatter;

    return (
        <>
            {
                data.file &&
                <Mildstone
                    title={MildstonePre.title}
                    description={MildstonePre.description}
                    mildstone={MildstonePre.mildstone}
                />
            }
        </>
    )
}
export default MildstonePrev;


