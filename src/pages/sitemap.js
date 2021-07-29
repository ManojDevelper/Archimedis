import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/sitemap.css";

const Sitemap = () => {
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "footer.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                footer {
                  id
                  title
                  link
                  footercontainer {
                    id
                    description
                    Link
                  }
                }
              }
            }
          }
    }`)
    return (
        <>
        <div id="sitemap_main">
        <h1>SiteMap</h1>
            <div id="sitemap">
                {data.file.childMarkdownRemark.frontmatter.footer.map(footerItem =>
                    <>{
                        footerItem.title === "Archimedis" || footerItem.title === "Contact" || footerItem.title === "SiteMap" ?
                            (<></>) :
                            (
                                <div id="sitemap_container" key={footerItem.id}>
                                    <Link to={footerItem.link} id="title">{footerItem.title}</Link>
                                    {footerItem && footerItem.footercontainer.map(footercontainers =>
                                        <div key={footercontainers.id}>
                                            <Link to={footercontainers.Link} id="sublnk">{footercontainers.description}</Link>
                                        </div>
                                    )}
                                </div>
                            )
                    }
                    </>
                )}
            </div>
            </div>
        </>
    )
}
export default Sitemap;