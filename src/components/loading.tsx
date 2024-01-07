import React from "react";

// Loading component
// will take full width and height
const Loading = () => {
  return (
    <div className="hero z-10 w-screen h-screen absolute top-0 left-0 bg-base-200">
      <div className="hero-content text-center">
        <span className="loading loading-spinner text-accent w-20"></span>
      </div>
    </div>
  );
};

export default Loading;
