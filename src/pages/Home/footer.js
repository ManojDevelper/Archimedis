import React, { useState, useEffect } from "react"
import "../../styles/Home/Footer.css"
import btnarrow from "../../images/btnhover2.svg"
// import img2 from "../../images/facebook.svg"
// import img5 from "../../images/youtube.svg"
import { graphql, useStaticQuery, Link } from "gatsby"
import Contact from "./contact"
import { Modal } from 'antd';

export const Footer = ({ footer }) => {

  const [footerPop, setFooterPop] = useState(false)

  const handelCancel = () => {
    setFooterPop(false)
  }


  return (
    <>
      <div id="footer">
        <div id="footer_container">
          <div id="footer_container_top">
            {footer &&
              footer.map((footerItem, i) => (
                <div id="footer_cards" key={i}>
                  {
                    footerItem.link === ""
                      ?
                      <>
                        {
                          footerItem.title === "Contact"
                            ?
                            <p id="h1" onClick={() => setFooterPop(true)} role="presentation">
                              {footerItem.title}
                            </p>
                            :
                            <p to={footerItem.link} id="h1">
                              {footerItem.title}
                            </p>
                        }
                      </>
                      :
                      <Link to={footerItem.link} id="h1">
                        {footerItem.title}
                      </Link>
                  }
                  {footerItem &&
                    footerItem.footercontainer.map((footercontainers, i) => (
                      <div key={i}>
                        {
                          footercontainers.Link === ""
                            ?
                            <p to={footercontainers.Link} id="p" style={{ cursor: `default` }}>
                              {footercontainers.description}
                            </p>
                            :
                            <Link to={footercontainers.Link} id="p">
                              {footercontainers.description}
                            </Link>
                        }

                      </div>
                    ))}
                </div>
              ))}
            <div id="footer_cards2">
              <iframe
                title="Archimedis"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.306655100214!2d80.0145069!3d12.9989065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd072fdf7b5826742!2sArchimedis%20Healthcare%20Private%20Limited%20-%20Reputed%20Pharma%20Manufacturers%20Chennai!5e0!3m2!1sen!2sin!4v1623929915150!5m2!1sen!2sin"
                id="footermap"
              ></iframe>
            </div>
          </div>
          <div id="footer_container_bottom">
            <div id="footer_container_bottom_icons">
              <a
                href="https://in.linkedin.com/company/archimedis-healthcare-private-limited"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={btnarrow} alt="img" />
              </a>
              {/* <a
                href="https://www.facebook.com/Archimedis-Healthcare-Private-Limited-701554783269319"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={img2} alt="img" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCFPUJdjRjqnEPCfuJhZsErw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={img5} alt="img" />
              </a> */}
            </div>
            <p>Copyright © 2021 Archimedis. All rights reserved.</p>
          </div>
        </div>
      </div>

      <Modal
        centered
        visible={footerPop}
        width={1000}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        onCancel={handelCancel}
        bodyStyle={{ backgroundColor: `white`, height: `100%` }}
        style={{ backgroundColor: `white`, height: `100%` }}
        maskStyle={{ backgroundColor: `white`, height: `fit-content`, padding: `0` }}
      >
        <div id="navcont">
          <Contact />
        </div>
      </Modal>
    </>
  )
}
const FooterPrev = props => {
  const [footerPre, setFooterPre] = useState({})
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "footer.md" }) {
        id
        childMarkdownRemark {
          frontmatter {
            footer {
              id
              title
              link
              footercontainer {
                id
                description
                Link
              }
            }
          }
        }
      }
    }
  `)
  useEffect(() => {
    if (data.file) {
      setFooterPre(data.file.childMarkdownRemark.frontmatter)
    }
  }, [data.file])
  return <>{data.file && <Footer footer={footerPre.footer} />}</>
}
export default FooterPrev
