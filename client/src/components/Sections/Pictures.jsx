import React from "react";

const Pictures = ({ data }) => {
  return (
    <div className="content-image">
      {data && (
        <div>
          <h1 className="title-img">Biggest Picture:</h1>
          <img src={data.biggestPicture} alt="the biggest" />
        </div>
      )}
      {data && (
        <div>
          <h1 className="title-img">Smallest Picture:</h1>
          <img src={data.smallestPicture} alt="the smallest" />
        </div>
      )}
    </div>
  );
};

export default Pictures;
