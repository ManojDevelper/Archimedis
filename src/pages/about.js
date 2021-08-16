import React from "react";
import Nav from "./nav";
import Aboutbanner from "./About/aboutBanner";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";
import Aboutus from "./About/aboutus";
import Certification from "./About/certification";
import Aboutstatus from "./About/aboutStatus";
import Ourvalues from "./About/ourvalues";
import Mildstone from "./About/mildstone";
import Contact from "./Home/contact";
import Footer from "./Home/footer";

const About = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "About/seo.md"}) {
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

  const seoData = data.file.childMarkdownRemark.frontmatter;
  return (
    <>
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <Nav />
      <Aboutbanner />
      <Aboutus />
      <Certification />
      <Aboutstatus />
      <Ourvalues />
      <Mildstone />
      <Contact />
      <Footer />
    </>
  )
}

export default About;
