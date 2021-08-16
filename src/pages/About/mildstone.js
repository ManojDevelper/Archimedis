import React, { useState, useEffect } from "react";
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
                        {mildstone && mildstone.map(mildstones =>
                            <div id="Mildstone_container_blocks" key={mildstones.id}>
                                <p id="date">{mildstones.date}</p>
                                <img src={mildstones.mildstonecontainericon.publicURL} alt="img" />
                                <div>
                                    <h1>{mildstones.title}</h1>
                                    <p>{mildstones.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
const MildstonePrev = () => {
    const [MildstonePre, setMildstonePre] = useState({});
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
    useEffect(() => {
        if (data.file) {
            setMildstonePre(data.file.childMarkdownRemark.frontmatter);
        }
    }, [data.file]);
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


