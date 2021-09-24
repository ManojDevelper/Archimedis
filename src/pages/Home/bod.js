import React, { useState, useEffect, Fragment } from "react"
import "../../styles/Home/Team.css"
import btn1 from "../../images/btnhover.svg"
import btn2 from "../../images/btnnormal.svg"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import backarrow from "../../images/backarrow.svg"

export const Team2 = ({ teams2 }) => {

  return (
    <>
      <div id="team" className="team">
        <Link to="/#team" id="backarrow">
          <img src={backarrow} alt="backarrow" />
          Back
        </Link>
        {teams2 &&
          teams2.map((teamssr, i) => (
            <Fragment key={i}>
              <h1>{teamssr.teamtitle}</h1>
              <div id="team_container">
                {teamssr &&
                  teamssr.team.map((teams, i) => (
                    <div id="team_container_cards" key={i}>
                      <div id="team_container_cards_block1">
                        {teams.teamimg.publicURL ? (
                          <img src={teams.teamimg.publicURL} alt="img" />
                        ) : (
                          <img src={teams.teamimg} alt="img" />
                        )}
                        <p>{teams.teaamname}</p>
                        <p id="designation">{teams.teamdesignation}</p>
                      </div>
                      <div id="team_container_cards_block2">
                        <a
                          href={teams.linkdin}
                          id="team_container_cards_block2_container"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={btn1} alt="img" id="btnnormal" />
                          <img src={btn2} alt="img" id="btnhover" />
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </Fragment>
          ))}
      </div>
    </>
  )
}
const Team2Prev = props => {
  const [lteamPre, setLTeamPre] = useState({})
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bod.md" }) {
        id
        childMarkdownRemark {
          frontmatter {
            teams2 {
              teamtitle
              team {
                teaamname
                teamdesignation
                linkdin
                teamimg {
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
      setLTeamPre(data.file.childMarkdownRemark.frontmatter)
    }
  }, [data.file])
  return <>{data.file && <Team2 teams2={lteamPre.teams2} />}</>
}
export default Team2Prev
