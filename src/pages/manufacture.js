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
const schema = {
  "@context": "http://www.schema.org",
  "@type": "product",
  "brand": "Archimedis",
  "name": "Manufacturing Product ",
  "image": "https://archimedis.global/manufacture/",
  "description": ":Fastest growing pharmaceutical contract manufacturing company in India offers tablets, capsules and dry syrup at an affordable price with quality assurance ",
  "aggregateRating": {
    "@type": "aggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "6"
  }
}
  const seoData = data.file.childMarkdownRemark.frontmatter;
  return (
    <>
      <div id="manfacturing">
        <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} SchemaMarkup={schema}/>
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
