import React from "react";
import "../../styles/Home/Team.css";
import fb from "../../images/t_fb.svg";
import li from "../../images/t_li.svg";
import tw from "../../images/t_tw.svg";
import { graphql, useStaticQuery } from "gatsby";

const Team = () => {
  return (
    <>
      <div id="team">
          <div>
            <h1 >sssssssss</h1>
            <div id="team_container">
            
                <div id="team_container_cards" >
                  <div id="team_container_cards_block1">
                    <img src="" alt="img" />
                    <p>ssssssssssssssssssssssssssssss</p>
                    <p id="designation">ssssssssssssssssssssssssss</p>
                  </div>
                  <div id="team_container_cards_block2">
                    <div id="team_container_cards_block2_container">
                      <img src={li} alt="img" />
                      <img src={tw} alt="img" />
                      <img src={fb} alt="img" />
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        
      </div>
    </>
  );
};
export default Team;