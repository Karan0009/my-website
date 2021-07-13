import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Blog = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allMarkdownRemark(
  //       sort: { order: DESC, fields: frontmatter___publishedDate }
  //     ) {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             isActive
  //             publishedDate(fromNow: true)
  //             featuredImage
  //           }
  //           html
  //         }
  //       }
  //     }
  //   }
  // `);
  // console.log(data);
  return (
    <Layout>
      <Seo title="blog" />
    </Layout>
  );
};

export default Blog;
