import React from "react";
import Pbanner from "./Products/pbanner";
import Pharmaceutical from "./Products/pharmaceutical";
import Foodsupplements from "./Products/foodsupplements";
import Archibranded from "./Products/archibranded";
import Online from "./Home/online";
import Contact from "./Home/contact";
import Footer from "./Home/footer";
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

const Products = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "Products/seo.md"}) {
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
      <div id="products">
        <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
        <Pbanner />
        <Pharmaceutical />
        <Foodsupplements />
        <Archibranded />
        <Online />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Products;
