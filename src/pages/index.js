import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Blobs from "../components/blobs/blobs";
import AboutMeSection from "../components/aboutMe/aboutMe";
import PostCardsGrid from "../components/postCardsGrid/postCardsGrid";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <AboutMeSection />
    <PostCardsGrid />
  </Layout>
);

export default IndexPage;
