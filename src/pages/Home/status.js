import React, { useState, useEffect } from "react";
import "../../styles/Home/Status.css";
import { graphql, useStaticQuery } from "gatsby";

export const Status = ({ Status }) => {
  return (
    <>
      <div id="status">
        <div id="status_container">
          {Status && Status.map((Statuss, i) => (
            <div id="status_card1" key={i}>
              <div id="status_card1_img_block">
                <img src={Statuss.statusimage.publicURL} alt="img1" />
              </div>
              <div id="status_card1_matter_block">
                <p>{Statuss.statusnumber}+</p>
                <p>{Statuss.statustitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const StatusPrev = props => {
  const [statusPre, setStatusPre] = useState({});
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "status.md"}) {
        id
        childMarkdownRemark {
          frontmatter {
            Status {
              id
              statusnumber
              statustitle
              statusimage {
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
      setStatusPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Status
          Status={statusPre.Status}
        />
      }
    </>
  )
}
export default StatusPrev;