import React, { useState, useEffect } from "react";
import "../../styles/Home/Team.css";
import btn1 from "../../images/btnhover.svg";
import btn2 from "../../images/btnnormal.svg";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import backarrow from "../../images/backarrow.svg";

export const Team2 = ({ teams2 }) => {
    console.log(teams2)
    return (
        <>
            <div id="team">
                <Link to="/#team" id="backarrow"><img src={backarrow} alt="backarrow" />Back</Link>
                {teams2 && teams2.map(teamssr =>
                    <div key={teamssr.id}>
                        <h1>{teamssr.teamtitle}</h1>
                        <div id="team_container">
                            {teamssr && teamssr.team.map(teams =>
                                <div id="team_container_cards" key={teams.id}>
                                    <div id="team_container_cards_block1">
                                        <img src={teams.teamimg.publicURL} alt="img" />
                                        <p>{teams.teaamname}</p>
                                        <p id="designation">{teams.teamdesignation}</p>
                                    </div>
                                    <div id="team_container_cards_block2">
                                        <a href={teams.linkdin} id="team_container_cards_block2_container" target="_blank">
                                            <img src={btn1} alt="img" id="btnnormal" />
                                            <img src={btn2} alt="img" id="btnhover" />
                                        </a>
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
const Team2Prev = props => {
    const [lteamPre, setLTeamPre] = useState({});
    const data = useStaticQuery(graphql`
  query{
      file(relativePath: {eq: "bod.md"}) {
          id
          childMarkdownRemark {
            frontmatter {
                teams2 {
                id
                teamtitle
                team {
                  id
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
  }`)
    useEffect(() => {
        if (data.file) {
            setLTeamPre(data.file.childMarkdownRemark.frontmatter);
        }
    }, [data.file]);
    return (
        <>
            {
                data.file &&
                <Team2
                    teams2={lteamPre.teams2}
                />
            }
        </>
    )
}
export default Team2Prev;