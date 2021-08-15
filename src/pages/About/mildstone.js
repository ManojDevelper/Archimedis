import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../styles/About/Mildstone.css";

const Mildstone = ({ mildstonetitle, mildstonedescription, mildstonemain }) => {
    return (
        <>
            <div id="Mildstone">
                <h1>{mildstonetitle}</h1>
                <h2>{mildstonedescription}</h2>
                <div id="Mildstone_container">
                    {mildstonemain && mildstonemain.map(mildstonemains =>
                        <div id="Mildstone_container_block" key={mildstonemains.id}>
                            {mildstonemains && mildstonemains.mildstonecontainer.map(mildstonecontainers =>
                                <div id="Mildstone_container_blocks" key={mildstonecontainers.id}>
                                    <img src={mildstonecontainers.mildstonecontainericon.publicURL} alt="img" />
                                    <h1>{mildstonecontainers.title}</h1>
                                    <p>{mildstonecontainers.description}</p>
                                </div>
                            )}
                        </div>
                    )}
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
                    mildstoneTitle
                    mildstonedescription
                    mildstonemain {
                        id
                        mildstonecontainer {
                            id
                            title
                            description
                            mildstonecontainericon {
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
            setMildstonePre(data.file.childMarkdownRemark.frontmatter);
        }
    }, [data.file]);
    return (
        <>
            {
                data.file &&
                <Mildstone
                    mildstonetitle={MildstonePre.mildstoneTitle}
                    mildstonedescription={MildstonePre.mildstonedescription}
                    mildstonemain={MildstonePre.mildstonemain}
                />
            }
        </>
    )
}
export default MildstonePrev;


