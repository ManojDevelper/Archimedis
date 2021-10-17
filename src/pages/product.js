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
  const schema = {
    "@context": "http://www.schema.org",
    "@type": "product",
    "brand": "Archimedis",
    "name": "Archimedis Product ",
    "image": "https://archimedis.global/products/",
    "description": ": Archimedis offers pharmaceutical products in therapeutic areas, OTC, Flagship drugs - food supplements -Vitamin D, Bone collagen, Lola and Branded products - Fertility enhancer and hand sanitizer",
    "aggregateRating": {
      "@type": "aggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "6"
    }

  }

  const seoData = data.file.childMarkdownRemark.frontmatter;
  return (
    <>
      <div id="products">
        <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} SchemaMarkup={schema}/>
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
