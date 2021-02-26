import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="text-center">
                    We're crunching digits to bring your your blog posts now!
                </h1>
            </div>
        </div>
      <div className="row">
        <div className="col">
          <PacmanLoader color={"#1baaf7"} loading={true} size={150} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
