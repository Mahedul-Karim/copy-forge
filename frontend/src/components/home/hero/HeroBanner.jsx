import React from "react";

const HeroBanner = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="max-h-[250px] xs:max-h-[350px] md:max-h-[450px]"
        src="/banner.png"
      />
    </div>
  );
};

export default HeroBanner;
