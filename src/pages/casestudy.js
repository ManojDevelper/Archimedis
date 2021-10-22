import React, { Fragment, useState } from "react"
import "../styles/casestudy.css"
import arrow from "../images/arow.svg"
import arrow2 from "../images/blog_btn_blue.svg"
import Contact from "../pages/Home/contact";
import { Modal } from 'antd';

const CasePage = ({ data }) => {
  const blogList = data

  console.log(blogList)

  const [caseStudys, setCaseStudys] = useState(false)

  const handelCancel = () => {
    setCaseStudys(false)
  }

  return (
    <Fragment>
      {/* <SEO title={title} description={description} keywords={keywords} /> */}
      <div className="blogListContainer" id="caseStudy">
        <div id="blog">
          <div id="blogtitle">
            <h1 id="h2">Case Studies</h1>
          </div>
          {blogList &&
            blogList.map(blogItem => {
              return (
                <>
                  <div id="casestudy" key={blogItem.node.id}>
                    <div id="casestudy_container">
                      <>
                        <div className="casestudy_card">
                          <div id="casestudy_card_b1">
                            <img
                              src={
                                blogItem.node.frontmatter.previewImage.publicURL
                              }
                              alt="img"
                            />
                          </div>
                          <div id="casestudy_card_b2">
                            <p>{blogItem.node.frontmatter.title}</p>
                            <button id="csbtn" onClick={() => setCaseStudys(true)}>
                              Request Info
                              <img src={arrow} alt="img" id="blod_btn1" />
                              <img src={arrow2} alt="img" id="blod_btn2" />
                            </button>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </>
              )
            })}
        </div>
      </div>

      <Modal
        centered
        visible={caseStudys}
        width={1000}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        onCancel={handelCancel}
        bodyStyle={{ backgroundColor: `white`, height: `100%` }}
        style={{ backgroundColor: `white`, height: `100%` }}
        maskStyle={{ backgroundColor: `white`, height: `fit-content`, padding: `0` }}
      >
        <div id="navcont">
          <Contact contactSol={caseStudys ? "R&D Services" : ""} />
        </div>
      </Modal>
    </Fragment>
  )
}

export default CasePage
