import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import "../styles/blog.css"
import Contact from "./Home/contact"
import Footer from "./Home/footer"
import SEO from "../components/seo"
import Nav from "./nav"

const BlogPage = ({ data }) => {
  const blogList = data.blogData.edges

  const BBanner = data.BBanner.childMarkdownRemark.frontmatter

  const seoData = data.seoData.childMarkdownRemark.frontmatter

  return (
    <Fragment>
      <Nav />
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
      />
      <div id="bbanner">
        <div id="bbanner_container">
          <h1>{BBanner.blogsBannerDescription}</h1>
        </div>
      </div>
      <div className="blogListContainer">
        <div id="blog">
          <h1>Blogs</h1>
          <h1>Our Latest Thinking</h1>
          {blogList &&
            blogList.map(blogItem => {
              return (
                <>
                  <div id="blog_container" key={blogItem.node.id}>
                    <Link id="blog_card" to={blogItem.node.fields.slug}>
                      <div id="blog_card_b1">
                        <img
                          src={blogItem.node.frontmatter.previewImage.publicURL}
                          alt="img"
                        />
                      </div>
                      <div id="blog_card_b2">
                        <p id="bcc2title">{blogItem.node.frontmatter.title}</p>
                        <p>{blogItem.node.frontmatter.excerpt}</p>
                        <p>{blogItem.node.frontmatter.date}</p>
                      </div>
                    </Link>
                  </div>
                </>
              )
            })}
        </div>
      </div>
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    blogData: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/data/(blog)/.*\\\\.md$/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
            author
            previewImage {
              publicURL
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    seoData: file(relativePath: { eq: "seoBlog.md" }) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          keywords
        }
      }
    }
    BBanner: file(relativePath: { eq: "blogsBanner.md" }) {
      childMarkdownRemark {
        frontmatter {
          blogsBannerDescription
        }
      }
    }
  }
`
