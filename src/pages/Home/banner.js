import React, { useState, useEffect } from 'react';
import "../../styles/Home/Banner.css";
import img1 from "../../images/play_btn.svg";
import img2 from "../../images/medal.svg";
import { graphql, useStaticQuery } from "gatsby";
import Typewriter from "typewriter-effect";
import Top from "../../components/Taketop";
import Contact from "./contact";
import close from "../../images/navclose.svg";
import "../../styles/Nav.css";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export const Banner = ({ title, description, boxdescription }) => {

    const [bcontact, setBcontact] = useState(true)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div id="banner">
                <div id="banner_container">
                    <div id="banner_container_matter">
                        <div id="banner_title">
                            <div id="static-txt">{title}</div>
                            <Typewriter id="Typewriter"
                                options={{
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString("Consistency")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .pauseFor(500)
                                        .typeString("Life Science")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .pauseFor(500)
                                        .typeString("Digital Transformation")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .pauseFor(500)
                                        .typeString("Client Success")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .pauseFor(500)
                                        .typeString("Clarity")
                                        .pauseFor(2000)
                                        .deleteAll()
                                        .start()
                                }}
                            />
                        </div>
                        <p id="banner_desc">{description}</p>
                        <div id="banner_btn_container">
                            <button onClick={handleClickOpen}><img src={img1} alt="img" />Watch Video</button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                id="pop1"
                            >
                                <DialogActions>
                                    <img src={close} alt="img" onClick={handleClose} id="popupclose" role="presentation" />
                                </DialogActions>
                                <DialogContent id="popup">
                                    <iframe width="900" height="500"
                                        src="https://www.youtube.com/embed/pR195-H96Eo?autoplay=1&mute=0" id="popvideo" title="videopopup">
                                    </iframe>
                                </DialogContent>
                            </Dialog>
                            <button onClick={() => setBcontact(false)}>Contact Us</button>
                        </div>
                        <div id="banner_mini_container">
                            <div id="banner_mini_container_img">
                                <img src={img2} alt="img" />
                            </div>
                            <div id="banner_mini_container_matter">
                                <p>{boxdescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Top link="/home/" />
            {!bcontact ? (
                <div id="navcont">
                    <img src={close} alt="img" id="contclose" onClick={() => setBcontact(true)} role="presentation" />
                    <Contact />
                </div>) : null}
        </>
    );
};
const BannerPrev = props => {
    const [bannerPre, setBannerPre] = useState({});
    const data = useStaticQuery(graphql`
    query{
      file(relativePath: {eq: "banner.md"}) {
            id
            childMarkdownRemark {
              id
              frontmatter {
                title
                description
                boxdescription
              }
            }
          }
        }
     `)
    useEffect(() => {
        if (data.file) {
            setBannerPre(data.file.childMarkdownRemark.frontmatter);
        }
    }, [data.file]);
    return (
        <>
            {data.file &&
                <Banner
                    title={bannerPre.title}
                    description={bannerPre.description}
                    boxdescription={bannerPre.boxdescription}
                />
            }
        </>
    )
}
export default BannerPrev;