import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import "../styles/Home/Blogs.css";
import "../styles/casestudy.css";
import arrow from "../images/arow.svg";
import arrow2 from "../images/blog_btn_blue.svg";
import SEO from "../components/seo";


const CasePage = ({ data }) => {

  const blogList = data.caseData.edges;

  const seoData = data.seoData.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <div className="blogListContainer">
        <div id="blog">
          <div id="blogtitle">
            <h1 id="h2">Case Studies</h1>
            </div>
          {
            blogList && blogList.map(blogItem => {
              return (
                <>
                  <div id="casestudy" key={blogItem.node.id}>
                    <div id="casestudy_container">
                      <>
                        <div className="casestudy_card">
                          <div id="casestudy_card_b1">
                            <img src={blogItem.node.frontmatter.previewImage.publicURL} alt="img" />
                          </div>
                          <div id="casestudy_card_b2">
                            <p>{blogItem.node.frontmatter.title}</p>
                            <Link to={blogItem.node.fields.slug}><button id="csbtn">View Case Study<img src={arrow} alt="img" id="blod_btn1" /><img src={arrow2} alt="img" id="blod_btn2" /></button></Link>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </Fragment>
  )
}

export default CasePage