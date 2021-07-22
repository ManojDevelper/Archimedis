import React from "react";
import Nav from "./nav";
import Fbanner from "./Formulation/fbanner";
import Fservice from "./Formulation/fservice";
import Ffacility from "./Formulation/ffacility";
import Casestudy from "./Formulation/casestudy";
import Contact from "./Home/contact";
import Footer from "./Home/footer";
import "../styles/Formulation/Formulation.css";
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

const Formulation = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "Formulations/seo.md"}) {
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
      <div id="formulation">
        <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
        <Nav />
        <Fbanner />
        <Fservice />
        <Ffacility />
        <Casestudy />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Formulation;
