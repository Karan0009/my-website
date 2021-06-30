import * as React from "react";
// import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query blogsQuery {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
          edges {
            node {
              html
              wordCount {
                words
              }
              frontmatter {
                date(fromNow: true)
                path
                title
              }
            }
          }
        }
      }
    `
  );
  //   console.log(allMarkdownRemark.edges[0].node.frontmatter);
  return (
    <>
      <Layout>
        {/* <Seo title="blogs" /> */}
        <section className="blogs-grid">
          {allMarkdownRemark.edges.map((d) => (
            <article className="blog-card">
              <header className="blog-card-title">
                {d.node.frontmatter.title}
              </header>
            </article>
          ))}
        </section>

        {/* <p style={{ color: "white" }}>{site.siteMetadata.title}</p> */}
        {/* {data.MyQuery.allMarkdownRemark.edges.map((d) => (
      <p style={{ color: "white" }}>{d.node.frontmatter.title}</p>
    ))} */}
      </Layout>
    </>
  );
};

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

export default BlogPage;
