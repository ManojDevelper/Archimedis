import React, { useState, useEffect } from "react";
import "../../styles/Home/Team.css";
import btnarrow from "../../images/btnarrow.svg";
import { graphql, useStaticQuery } from "gatsby";
import {Link} from "gatsby";

export const Team = ({ teams }) => {

  return (
    <>
      <div id="team">
        {teams && teams.map(teamss =>
          <div key={teamss.id}>
            <h1>{teamss.teamtitle}</h1>
            <div id="team_container">
              {teamss && teamss.team.map(teams =>
                <div id="team_container_cards" key={teams.id}>
                  <div id="team_container_cards_block1">
                    <img src={teams.teamimg.publicURL} alt="img" />
                    <p>{teams.teaamname}</p>
                    <p id="designation">{teams.teamdesignation}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <Link to="/Home/bod" id="linktbn"><button>View More<img src={btnarrow} alt="btnimg"/></button></Link>
      </div>
    </>
  );
};
const TeamPrev = props => {
  const [teamPre, setTeamPre] = useState({});
  const data = useStaticQuery(graphql`
  query{
      file(relativePath: {eq: "team.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
              teams {
                id
                teamtitle
                team {
                  id
                  teaamname
                  teamdesignation
                  teamimg {
                    publicURL
                  }
                }
              }
            }
          }
        }
  }`)
  useEffect(() => {
    if (data.file) {
      setTeamPre(data.file.childMarkdownRemark.frontmatter);
    }
  }, [data.file]);
  return (
    <>
      {
        data.file &&
        <Team
          teams={teamPre.teams}
        />
      }
    </>
  )
}
export default TeamPrev;