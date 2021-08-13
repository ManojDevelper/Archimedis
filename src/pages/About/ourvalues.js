import React from "react";
import "../../styles/About/Ourvalues.css";
import b1 from "../../data/assets/1.svg";
import b2 from "../../data/assets/2.svg";
import b3 from "../../data/assets/3.svg";
import b4 from "../../data/assets/4.svg";

const Ourvalues = () => {
    return (
        <>
            <div id="Ourvalues">
                <h1>Our Values</h1>
                <div id="Ourvalues_container">
                    <div id="Ourvalues_container_block1">
                        <img src={b1} alt="img" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sociis adipiscing morbi eget pharetra. Convallis ut blandit feugiat mollis auctor.</p>
                    </div>
                    <div id="Ourvalues_container_block1">
                        <img src={b2} alt="img" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sociis adipiscing morbi eget pharetra. Convallis ut blandit feugiat mollis auctor.</p>
                    </div>
                    <div id="Ourvalues_container_block1">
                        <img src={b3} alt="img" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sociis adipiscing morbi eget pharetra. Convallis ut blandit feugiat mollis auctor.</p>
                    </div>
                    <div id="Ourvalues_container_block1">
                        <img src={b4} alt="img" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sociis adipiscing morbi eget pharetra. Convallis ut blandit feugiat mollis auctor.</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Ourvalues;
