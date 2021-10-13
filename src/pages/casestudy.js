import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import "../styles/casestudy.css"
import arrow from "../images/arow.svg"
import arrow2 from "../images/blog_btn_blue.svg"
import SEO from "../components/seo"
import Contact from "../pages/Home/contact";
import close from "../images/navclose.svg";

const CasePage = ({ data, title, description, keywords }) => {
  const blogList = data

  console.log(blogList)

  const [caseStudys, setCaseStudys] = useState(false)

  return (
    <Fragment>
      <SEO title={title} description={description} keywords={keywords} />
      <div className="blogListContainer">
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
                                View Case Study
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
      {caseStudys ? (
        <div id="navcont">
          <img src={close} alt="img" id="contclose" onClick={() => setCaseStudys(false)} role="presentation" />
          <Contact contactSol={caseStudys ? "R&D Services" : ""} />
        </div>) : null}
    </Fragment>
  )
}

export default CasePage
