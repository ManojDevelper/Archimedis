import React from "react";
import MBanner from "./Manfacturing/mbanner";
import Capable from "./Manfacturing/capable";
import Quality from "./Manfacturing/quality";
import Qualityassurance from "./Manfacturing/qualityassurance";
import Facility from "./Manfacturing/facility";
import Industry from "./Manfacturing/industry";
import Contact from "./Home/contact";
import Footer from "./Home/footer";
import "../styles/Manfacturing.css";
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

const Manfacturing = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "Manfacturing/seo.md"}) {
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
      <div id="manfacturing">
        <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
        <MBanner />
        <Capable />
        <Quality />
        <Qualityassurance />
        <Facility />
        <Industry />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Manfacturing;
