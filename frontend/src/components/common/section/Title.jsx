import React from "react";

const Title = ({ text, highlight }) => {
  const textArray = text.split(new RegExp(`(${highlight})`, "i"));

  return (
    <h3 className="text-center text-2xl xs:text-[26px] sm:text-[36px] font-bold leading-[1.3] whitespace-pre-wrap">
      {textArray.map((text, i) =>
        text?.toLowerCase() === highlight?.toLowerCase() ? (
          <span className="text-gradient" key={`highlight-${i}`}>
            {text}
          </span>
        ) : (
          text
        )
      )}
    </h3>
  );
};

export default Title;
