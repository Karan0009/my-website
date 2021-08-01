import React from "react";
import Background from "../background/background";
import PostCard from "../postCard/postCard";
import "./postCardsGrid.scss";

const PostCardsGrid = () => {
  return (
    // <div className="container">
    //   <div className="container__inner">
    <div className="postCardsGrid">
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div> */}
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
    //   </div>
    // </div>
  );
};

export default PostCardsGrid;
