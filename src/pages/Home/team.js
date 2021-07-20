import React, { useState, useEffect } from "react";
import "../../styles/Home/Team.css";
import btn1 from "../../images/btnhover.svg";
import btn2 from "../../images/btnnormal.svg";
import { graphql, useStaticQuery } from "gatsby";

export const Team = ({ teams }) => {

  return (
    <>
      <div id="team">
        {teams && teams.map(teamss =>
          <div key={teamss.id}>
            <h1 style={{ marginTop: (teamss.teamstyle) }}>{teamss.teamtitle}</h1>
            <div id="team_container">
              {teamss && teamss.team.map(teams =>
                <div id="team_container_cards" key={teams.id}>
                  <div id="team_container_cards_block1">
                    <img src={teams.teamimg.publicURL} alt="img" />
                    <p>{teams.teaamname}</p>
                    <p id="designation">{teams.teamdesignation}</p>
                  </div>
                  <div id="team_container_cards_block2">
                    <div id="team_container_cards_block2_container">
                      <img src={btn1} alt="img" id="btnnormal" />
                      <img src={btn2} alt="img" id="btnhover" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
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
                teamstyle
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