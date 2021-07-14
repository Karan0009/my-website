import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Blobs from "../components/blobs/blobs";
import AboutMeSection from "../components/aboutMe/aboutMe";
import PostCard from "../components/postCard/postCard";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <AboutMeSection />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "40px",
        // justifyContent: "center",
      }}
    >
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  </Layout>
);

export default IndexPage;
