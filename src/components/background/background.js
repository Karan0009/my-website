import React from "react";
import Blobs from "../blobs/blobs";

// styles in global.css

const Background = () => {
  return (
    <div className="background">
      <div className="background__overlay"></div>
      <Blobs />
    </div>
  );
};

export default Background;
