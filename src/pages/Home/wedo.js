import React from "react";
import "../../styles/Home/Wedo.css";
import arrow from "../../images/arow.svg";
import { graphql, useStaticQuery } from "gatsby";

const Wedo = () => {
  return (
    <>
      <div id="wedo">
        <p>s</p>
        <div id="wedo_container">
  
            <div id="wedo_container_cards" >
              <div id="wedo_container_cards_block1">
                <div id="wedo_container_cards_matter">
                  <h1>ssssssssssssssssssssssssssssssssss</h1>
                  <p>sssssssssssssssssssssssssssssssssssss</p>
                  <button>View More<img src={arrow} alt="img" /></button>
                </div>
              </div>
              <div id="wedo_container_cards_block2">
                <img src="" alt="img" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Wedo;