import React, { useState, useEffect } from "react";
import "../../styles/Home/Standout.css";
import { graphql, useStaticQuery } from "gatsby";

export const Standout = ({ title, description, Standoutcontainer }) => {

  return (
    <>
      <div id="standout">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div id="standout_container">
          {Standoutcontainer && Standoutcontainer.map(Standoutcontainers =>
            <>
              {Standoutcontainers.standimage !== null &&
                <div id="standout_card1" key={Standoutcontainers.id}>
                  {(Standoutcontainers.standimage !== null)
                    ? (<img src={Standoutcontainers.standimage.publicURL} alt="img" />) :
                    (<img src={Standoutcontainers.standimage} alt="img" />)}
                  <p id="p4_c_dis">{Standoutcontainers.standname}</p>
                </div>
              }
            </>
          )}
        </div>
      </div>
    </>
  );
};
const StandoutPrev = props => {
  const [standoutPre, setStandoutPre] = useState({});
  const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "Standout.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
                title
                description
                Standoutcontainer {
                  id
                  standname
                  standimage {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                    publicURL
                  }
                }
              }
            }
          }
    }`)
  useEffect(() => {
    if (data.file) {
      setStandoutPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Standout
          title={standoutPre.title}
          description={standoutPre.description}
          Standoutcontainer={standoutPre.Standoutcontainer}
        />
      }
    </>
  )
}
export default StandoutPrev;