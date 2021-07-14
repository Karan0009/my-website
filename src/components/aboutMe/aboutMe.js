import React from "react";
import "./aboutMe.scss";

const AboutMeSection = () => {
  return (
    <section className="aboutMeSection" id="aboutMeSection">
      <main className="aboutMe__container">
        <h1 className="aboutMe__title">i am KARAN</h1>
        <div className="aboutMe__body">
          <p>
            I try to make things <span className="highlight--red">work</span>
          </p>
          <p>
            i have a <span className="highlight--yellow">degree</span> in
            computer science and lorem ipsum dolor amit ses tori.
          </p>
          <p>
            Anyways I like
            <span className="hightlight--blue">problem solving</span>, and am
            basically a "developer".
          </p>
        </div>
      </main>
    </section>
  );
};

export default AboutMeSection;
