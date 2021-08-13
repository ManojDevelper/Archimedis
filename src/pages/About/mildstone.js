import React from "react";
import "../../styles/About/Mildstone.css";
import b1 from "../../data/assets/about_mildstone_1.svg";
import b2 from "../../data/assets/about_mildstone_2.svg";
import b3 from "../../data/assets/about_mildstone_3.svg";
import b4 from "../../data/assets/about_mildstone_4.svg";
import b5 from "../../data/assets/about_mildstone_5.svg";

const Mildstone = () => {
    return (
        <>
            <div id="Mildstone">
                <h1>Milestones</h1>
                <h2>Our single-minded focus on superior quality leading to client success.</h2>
                <div id="Mildstone_container">
                    <div id="Mildstone_container_block">
                        <div id="Mildstone_container_blocks">
                            <img src={b1} alt="img" />
                            <h1>Humble Beginning</h1>
                            <p>Safetab Life Science starts pharma manufacturing at Pondicherry, India.</p>
                        </div>
                        <div id="Mildstone_container_blocks">
                            <img src={b2} alt="img" />
                            <h1>Robust Foundation</h1>
                            <p>Archimedis is fully operational and completes 100 commercial batches.</p>
                        </div>
                        <div id="Mildstone_container_blocks">
                            <img src={b3} alt="img" />
                            <h1>Truly Global</h1>
                            <p>Trusted global brand focused on quality product development & supply.</p>
                        </div>
                    </div>
                    <div id="Mildstone_container_block">
                        <div id="Mildstone_container_blocks">
                            <img src={b4} alt="img" />
                            <div>
                                <h1>Aspiring Global</h1>
                                <p>Archimedis is born with acquisition of a WHO-GMP facility at Chennai, India.</p>
                            </div>
                        </div>
                        <div id="Mildstone_container_blocks">
                            <img src={b5} alt="img" />
                            <div>
                                <h1>UK MHRA Approved</h1>
                                <p>Archimedis is MHRA approved and exports its first consignment to the UK.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Mildstone;
