import React from "react";
import Nav from "./nav";
import Fbanner from "./Formulation/fbanner";
import Fservice from "./Formulation/fservice";
import Ffacility from "./Formulation/ffacility";
import CasePage from "./casestudy";
import Contact from "./Home/contact";
import Footer from "./Home/footer";
import "../styles/Formulation/Formulation.css";
import { graphql } from "gatsby"
import SEO from "../components/seo"

const Formulation = ({data}) => {

  const seoData = data.FormSeo.childMarkdownRemark.frontmatter;

  const data2 = data.caseData.edges

  const seoData2 = data.seoDatas.childMarkdownRemark.frontmatter

  return (
    <>
      <div id="formulation">
        <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
        <Nav />
        <Fbanner />
        <Fservice />
        <Ffacility />
        <CasePage data={data2} title={seoData2.title} description={seoData2.description} keywords={seoData2.keywords}/>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Formulation;

export const pageQuery = graphql`
  query {
    caseData: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/src/data/(CaseStudy)\\/.*\\\\.md$/"}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
    seoDatas: file(relativePath: {eq: "seoBlog.md"}) {
      childMarkdownRemark {
        frontmatter {
          title
          description
          keywords
        }
      }
    }
    FormSeo: file(relativePath: {eq: "Formulations/seo.md"}) {
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
