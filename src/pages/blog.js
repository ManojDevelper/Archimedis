import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import "../styles/Home/Blogs.css";
import Contact from "./Home/contact";
import Footer from "./Home/footer";


const BlogPage = ({ data }) => {

  const blogList = data.blogData.edges;

  const seoData = data.seoData.childMarkdownRemark.frontmatter;

  return (
    <Fragment>
      <div className="blogListContainer">
        <div id="blog">
          <h1>Blogs</h1>
          {
            blogList && blogList.map(blogItem => {
              return (
                <>
                  <div id="blog_container" key={blogItem.node.id}>
                    <Link id="blog_card" to={blogItem.node.fields.slug}>
                      <div id="blog_card_b1">
                        <img src={blogItem.node.frontmatter.previewImage.publicURL} alt="img" />
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
            })
          }
        </div>
      </div>
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    blogData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/src/data/(blog)\\/.*\\\\.md$/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
    seoData: file(relativePath: {eq: "seoBlog.md"}) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          keywords
        }
      }
    }
  }
`
