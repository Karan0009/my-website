import React from "react";
import PostCardsGrid from "../postCardsGrid/postCardsGrid";

import "./sectionLayout.scss";

const SectionLayout = (props) => {
  const { children, hasPostCards } = props;
  return (
    <section className="sectionContainer">
      <h3 className="sectionContainer__title">
        {props?.title ? props.title : "this is new section"}
      </h3>
      <main className="sectionContainer__content">
        {hasPostCards && <PostCardsGrid />}
      </main>
    </section>
  );
};

export default SectionLayout;
