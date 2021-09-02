import React, { useState, useEffect } from "react";
import "../../styles/Home/Team.css";
import btnarrow from "../../images/btnarrow.svg";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export const Team = ({ teamtitle, teams }) => {

  return (
    <>
      <div id="team">
        <div>
          <h1>{teamtitle}</h1>
          <div id="team_container">
            {teams && teams.map(teams =>
              <div id="team_container_cards" key={teams.id}>
                <div id="team_container_cards_block1">
                  {(teams.teamimg.publicURL) ?
                    (<img src={teams.teamimg.publicURL} alt={teams.alt_tag} />)
                    :
                    (<img src={teams.teamimg} alt={teams.alt_tag} />)}
                  <p>{teams.teaamname}</p>
                  <p id="designation">{teams.teamdesignation}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <Link to="/Home/bod" id="linktbn"><button>View More<img src={btnarrow} alt="btnimg" /></button></Link>
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
              teamtitle
              teams {
                  id
                  teaamname
                  teamdesignation
                  alt_tag
                  teamimg {
                    publicURL
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
          teamtitle={teamPre.teamtitle}
          teams={teamPre.teams}
        />
      }
    </>
  )
}
export default TeamPrev;