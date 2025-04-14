import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const words = ["Video Script", "Article", "Rewrite Article", "Ads Content"];

const Details = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [speed, setSpeed] = useState(300);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const fullText = currentWord;

    const handleTyping = () => {
      setText((prevText) => {
        const updatedText = isDeleting
          ? fullText.slice(0, prevText.length - 1)
          : fullText.slice(0, prevText.length + 1);

        if (!isDeleting && updatedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && updatedText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }

        return updatedText;
      });

      setSpeed(isDeleting ? 50 : 150);
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, speed]);

  return (
    <>
      <Typography
        component={"h1"}
        sx={{
          fontSize: {
            lg: "45px",
            xs: "35px",
            xxs: "27px",
          },
          fontWeight: 700,
          lineHeight: 1.3,
          textAlign: "center",
          "& span": {
            fontWeight: 700,
            display: "block",
            minHeight: "59px"
          },
        }}
      >
        Fastest Way To Write <br />
        <span className="text-gradient">{text}</span>
      </Typography>
      <Typography
        component={"p"}
        sx={{
          textAlign: "center",
          color: "text.secondary",
          fontSize: {
            lg: "16px",
            xs: "14px",
            xxs: "12px",
          },
        }}
      >
        CopyForge is your copywriter assistant that uses AI and a deep
        understanding of your content to help you write text faster.
      </Typography>
      <Box sx={{ marginTop: "10px" }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "999px",
            fontSize: {
              xxs: "12px",
              xs: "14px",
            },
            lineHeight: {
              xs: 1.75,
              xxs: 1.5,
            },
            fontWeight: 600,
          }}
          size="medium"
        >
          Purchase Now
        </Button>
      </Box>
    </>
  );
};

export default Details;
