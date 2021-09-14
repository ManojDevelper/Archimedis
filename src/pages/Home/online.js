import React, { useState, useEffect } from "react";
import "../../styles/Home/Online.css";
import { graphql, useStaticQuery } from "gatsby";

export const Online = ({ onlinetitle, onlinedesc, onlineimg }) => {
  return (
    <>
      <div id="online">
        <div id="online_container">
          <div id="online_container_block1">
            <h1>{onlinetitle}</h1>
            <h2>{onlinedesc}</h2>
            <h1 id="onlinebutton">Coming Soon...</h1>
          </div>
          <div id="online_container_block1">
            <img src={onlineimg} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};
const OnlinePrev = props => {
  const [onlinePre, setOnlinePre] = useState({});
  const data = useStaticQuery(graphql`
    query{
       file(relativePath: {eq: "online.md"}) {
              id
              childMarkdownRemark {
                frontmatter {
                  onlinetitle
                  onlinedesc
                  onlineimg {
                    publicURL
                  }
                }
              }
            }
    }`)
  useEffect(() => {
    if (data.file) {
      setOnlinePre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);

  let OnlineImage;
  if (data.file.childMarkdownRemark.frontmatter.onlineimg.publicURL) {
    OnlineImage = data.file.childMarkdownRemark.frontmatter.onlineimg.publicURL;
  } else {
    OnlineImage = data.file.childMarkdownRemark.frontmatter.onlineimg;
  }

  return (
    <>
      {
        data.file &&
        <Online
          onlinetitle={onlinePre.onlinetitle}
          onlinedesc={onlinePre.onlinedesc}
          onlineimg={OnlineImage}
        />
      }
    </>
  )
}
export default OnlinePrev;