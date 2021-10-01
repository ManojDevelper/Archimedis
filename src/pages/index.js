import React from "react";
import Banner from "./Home/banner";
import Status from "./Home/status";
import Patners from "./Home/patners";
import Standout from "./Home/standout";
import Wedo from "./Home/wedo";
import Online from "./Home/online";
import About from "./Home/about";
import Team from "./Home/team";
import Clints from "./Home/clints";
import BlogPage from "./blog";
import Nav from "./nav";
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import CookieConsent from "react-cookie-consent";
import "../styles/index.css"

const IndexPage = ({data}) => {


const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Archimedis ",
  "url": "https://www.archimedis.global",
  "logo": "https://www.archimedis.global",
  "address": { "@type": "PostalAddress", "streetAddress": "C-27, SIPCOT Industrial park, Irungattukottai, Sriperumbudur", "addressLocality": "Chennai", "addressRegion": "Tamilnadu", "postalCode": "602117", "addressCountry": "India" },
  "contactPoint": { "@type": "ContactPoint", "contactType": "contact", "telephone": "044 47171111", "email": "care@archimedis.net" },
}

const seoData = data.HomeSeo.childMarkdownRemark.frontmatter;
  return (
    <>
      <div id="home">
        <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} SchemaMarkup={schema} />
        <Nav />
        <Banner />
        <Patners />
        <Wedo />
        <Status />
        <Standout />
        <Clints />
        <Online />
        <About />
        <Team />
        <BlogPage data={data}/>
      </div>
      <CookieConsent
        location="bottom"
        buttonText="Accept!!"
        cookieName="Archimedis"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#2d307b", fontSize: "16px", background: "white", width: "180.999999999999px", height: "48px", borderRadius: "8px", fontStyle: "normal", fontWeight: "bold" }}
        expires={30}
        enableDeclineButton
        declineButtonText="Decline"
        declineButtonStyle={{ fontSize: "16px", background: "none" }}
      >
        <span style={{ fontSize: `18px` }}>This website uses cookies to enhance the user experience.</span>
      </CookieConsent>
    </>
  )
}

export default IndexPage

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
    HomeSeo: file(relativePath: {eq: "seo.md"}) {
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
