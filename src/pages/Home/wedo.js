import React, { useState, useEffect } from "react";
import "../../styles/Home/Wedo.css";
import arrow from "../../images/arow.svg";
import { graphql, useStaticQuery } from "gatsby";

export const Wedo = ({ wedotitle, wedo, html }) => {
  return (
    <>
      <div id="wedo">
        <h1>{wedotitle}</h1>
        <div id="wedo_container">
          {wedo && wedo.map(wedos =>
            <div id="wedo_container_cards" key={wedos.id}>
              <div id="wedo_container_cards_block1">
                <div id="wedo_container_cards_matter">
                  <h1>{wedos.wedoname}</h1>
                  <p>{wedos.wedodesc}</p>
                  <button>View More<img src={arrow} alt="img" /></button>
                </div>
              </div>
              <div id="wedo_container_cards_block2">
              {(wedos.wedoimg.publicURL) ? (
                <img src={wedos.wedoimg.publicURL} alt="img" />
              ) : (<img src={wedos.wedoimg} alt="img" />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const WedoPrev = props => {
  const [statusPre, setStatusPre] = useState({});
  const data = useStaticQuery(graphql`
  query{
  file(relativePath: {eq: "wedo.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
              wedotitle
              wedo {
                id
                wedoname
                wedodesc
                wedoimg {
                  publicURL
                }
              }
            }
          }
        }
  }`)
  useEffect(() => {
    if (data.file) {
      setStatusPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Wedo
          wedotitle={statusPre.wedotitle}
          wedo={statusPre.wedo}
        />
      }
    </>
  )
}
export default WedoPrev;