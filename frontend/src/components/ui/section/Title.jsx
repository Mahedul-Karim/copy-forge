import { Typography } from "@mui/material";
import React, { Fragment } from "react";

const Title = ({ text, highlight }) => {
  const textArray = text.split(new RegExp(`(${highlight})`, "i"));

  return (
    <Typography
      component={"h3"}
      sx={{
        textAlign: "center",
        fontSize: {
          sm: "36px",
          xs: "26px",
          xxs: "24px",
        },
        fontWeight: 700,
        lineHeight: 1.3,
        whiteSpace: "pre-wrap",
      }}
    >
      {textArray.map((text, i) =>
        text?.toLowerCase() === highlight?.toLowerCase() ? (
          <span className="text-gradient" key={`highlight-${i}`}>
            {text}
          </span>
        ) : (
          // <Fragment key={`normal-${i}`}>
            text
            // </Fragment>
        )
      )}
    </Typography>
  );
};

export default Title;
