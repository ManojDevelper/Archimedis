import React from "react";
import "../../styles/Formulation/casestudy.css";
import arrow from "../../images/arow.svg";
import arrow2 from "../../images/blog_btn_blue.svg";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export const Casestudy = ({ Casestudy }) => {

  return (
    <>
      {Casestudy && Casestudy.map((Casestudys, i) =>
        <div id="casestudy" key={i}>
          <h1>{Casestudys.Casestudytitle}</h1>
          <div id="casestudy_container">
            {Casestudys && Casestudys.Casestudycards.map((Casestudycardss, i) =>
              <div key={i}>
                <div className="casestudy_card" id={Casestudycardss.Casestudyblockid}>
                  <div id="casestudy_card_b1">
                  {(Casestudycardss.image.publicURL) ? 
                    <img src={Casestudycardss.image.publicURL} alt="img" />
                    :
                    <img src={Casestudycardss.image} alt="img" />
                  }
                  </div>
                  <div id="casestudy_card_b2">
                    <p>{Casestudycardss.Casestudyname}</p>
                    <p>{Casestudycardss.Casestudydesc}</p>
                    <Link to={Casestudycardss.mainlink}><button id="csbtn">View Case Study<img src={arrow} alt="img" id="blod_btn1" /><img src={arrow2} alt="img" id="blod_btn2" /></button></Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
const CasestudyPrev = () => {

  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "Formulations/casestudy.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                Casestudy {
                  id
                  Casestudytitle
                  Casestudycards {
                    id
                    Casestudyname
                    Casestudydesc
                    mainlink
                    Casestudyblockid
                    image {
                      publicURL
                    }
                  }
                }
              }
            }
          }
        }
     `)
      const casestudypre = data.file.childMarkdownRemark.frontmatter;
  return (
    <>
      {
        data.file &&
        <Casestudy
          Casestudy={casestudypre.Casestudy}
        />
      }
    </>
  )
}
export default CasestudyPrev;