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
import Blogs from "./Home/blogs";
import Contact from "./Home/contact";
import Footer from "./Home/footer";
import Nav from "./nav";
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

const Home = () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "seo.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            description
            keywords
          }
        }
      }
    }
  `);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Archimedis ",
    "url": "https://www.archimedis.global",
    "logo": "https://www.archimedis.global",
    "address": { "@type": "PostalAddress", "streetAddress": "C-27, SIPCOT Industrial park, Irungattukottai, Sriperumbudur", "addressLocality": "Chennai", "addressRegion": "Tamilnadu", "postalCode": "602117", "addressCountry": "India" },
    "contactPoint": { "@type": "ContactPoint", "contactType": "contact", "telephone": "044 47171111", "email": "care@archimedis.net" },
  }

  const seoData = data.file.childMarkdownRemark.frontmatter;
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
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home
