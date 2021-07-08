import React from "react";
import "../../styles/Home/Team.css";
import fb from "../../images/t_fb.svg";
import li from "../../images/t_li.svg";
import tw from "../../images/t_tw.svg";
import btn1 from "../../images/btnhover.svg";
import btn2 from "../../images/btnnormal.svg";
import { graphql, useStaticQuery } from "gatsby";

const Team = () => {
  const data = useStaticQuery(graphql`
    query{
        Team:file(relativePath: {eq: "team.md"}) {
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
                      childImageSharp {
                        fluid {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }
    }`)
  return (
    <>
      <div id="team">
        {data.Team.childMarkdownRemark.frontmatter.teams.map(teamss =>
          <div key={teamss.id}>
            <h1 style={{ marginTop: (teamss.teamstyle) }}>{teamss.teamtitle}</h1>
            <div id="team_container">
              {teamss.team.map(teams =>
                <div id="team_container_cards" key={teams.id}>
                  <div id="team_container_cards_block1">
                    <img src={teams.teamimg.childImageSharp.fluid.src} alt="img" />
                    <p>{teams.teaamname}</p>
                    <p id="designation">{teams.teamdesignation}</p>
                  </div>
                  <div id="team_container_cards_block2">
                    <div id="team_container_cards_block2_container">
                      <img src={btn1} alt="img" id="btnnormal"/>
                      <img src={btn2} alt="img" id="btnhover"/>
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
export default Team;