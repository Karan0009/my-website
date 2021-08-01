import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Blobs from "../components/blobs/blobs";
import AboutMeSection from "../components/aboutMe/aboutMe";
import PostCardsGrid from "../components/postCardsGrid/postCardsGrid";
import SectionLayout from "../components/sectionLayout/sectionLayout";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <AboutMeSection />
    <SectionLayout hasPostCards title="Blog" id="blog__section" />
    <SectionLayout hasPostCards title="Projects" id="projects__section" />
    {/* <PostCardsGrid /> */}
  </Layout>
);

export default IndexPage;
