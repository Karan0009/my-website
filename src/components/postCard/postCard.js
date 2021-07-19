import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./postCard.scss";

const PostCard = () => {
  return (
    <div className="postCard">
      <div className="postCard__imgContainer">
        <StaticImage
          className="postCard__img"
          src="../../../static/assets/smallthings.jpg"
          // src="https://picsum.photos/400/400"
          quality="100"
          alt="a kitten"
        />
        {/* <img className="postCard__img" src="https://placekitten.com/200/200" /> */}
      </div>
      <div className="postCard__body">
        <h4 className="postCard__title">Game developemnt, I guess??</h4>
        <div className="postCard__details">
          <p className="postCard__category">GameDev</p>
          <p className="postCard__date">Sept 9, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
