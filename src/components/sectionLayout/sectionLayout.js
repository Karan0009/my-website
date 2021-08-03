import React from "react";
import CustomButton from "../button/customButton";
import PostCardsGrid from "../postCardsGrid/postCardsGrid";

import "./sectionLayout.scss";

const SectionLayout = (props) => {
  const { children, hasPostCards, id } = props;
  return (
    <section
      className="sectionContainer pageMainSection"
      id={id || `section__${Math.floor(Math.random() * 1000)}`}
    >
      <h3 className="sectionContainer__title">
        {props?.title ? props.title : "this is new section"}
      </h3>
      <main className="sectionContainer__content">
        {hasPostCards && (
          <>
            <PostCardsGrid />
          </>
        )}
      </main>
      <CustomButton buttonText="See more work" />
    </section>
  );
};

export default SectionLayout;
