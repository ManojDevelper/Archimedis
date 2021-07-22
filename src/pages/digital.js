import React from "react";
import Dbanner from "./Digital/dbanner";
import Dsolutions from "./Digital/dsolutions";
import Productdev from "./Digital/productdev";
import Contact from "./Home/contact";
import Footer from "./Home/footer";
import "../styles/Digital.css";
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

const Digital = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "Digital/seo.md"}) {
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
            <div id="digital">
                <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
                <Dbanner />
                <Dsolutions />
                <Productdev />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Digital;
