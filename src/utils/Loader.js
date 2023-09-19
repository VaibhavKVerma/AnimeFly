import React from "react";

export const LoaderSmall = React.memo(() => {
  return (
    <div className="h-full">
      <div className="loader top-1/2 left-1/2" />
    </div>
  );
});

const Loader = () => {
  return (
    <div className="h-screen">
      <div className="loader top-1/2 left-1/2" />
    </div>
  );
};

export default React.memo(Loader);
