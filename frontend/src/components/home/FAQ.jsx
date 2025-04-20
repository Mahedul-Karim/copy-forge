import React, { useState } from "react";
import Container from "../ui/Container";
import Title from "../ui/section/Title";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@emotion/react";

const faqData = [
  {
    title: "What is a text image generator?",
    description:
      "A text image generator is a tool that converts text into visually appealing images, often used for social media posts, banners, or digital designs. It allows you to customize fonts, colors, and layouts to make the text stand out as an image.",
  },
  {
    title: "How does the AI text generator work?",
    description:
      "The AI text generator uses advanced natural language processing models to understand input prompts and generate human-like text. It learns from vast datasets to predict and form coherent, context-aware sentences tailored to your needs.",
  },
  {
    title: "Is this AI text generator for beginners?",
    description:
      "Yes, it's designed to be user-friendly and intuitive, making it accessible even for beginners. With simple prompts and a clean interface, anyone can start generating quality content in seconds without needing technical knowledge.",
  },
  {
    title: "What kind of content can the AI generator create?",
    description:
      "The AI generator can create a wide variety of content, including blog posts, video scripts, ad copy, article rewrites, product descriptions, and much more — all tailored to your specific goals or tone.",
  },
  {
    title: "Can I customize the tone and style of the content?",
    description:
      "Absolutely! You can adjust the tone, style, and length of the content by simply specifying your preferences. Whether you want it to sound professional, friendly, or persuasive, the generator adapts to your input.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const theme = useTheme();

  return (
    <Container
      sx={{
        paddingBlock: {
          xxs: "45px",
          md: "64px",
        },
      }}
    >
      <Title
        text={"You might have some questions,\n lets talk about it"}
        highlight={"questions,"}
      />
      <Box
        sx={{
          maxWidth: "630px",
          marginInline: "auto",
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {faqData.map((data, i) => (
          <Accordion
            expanded={expanded === `panel${i + 1}`}
            onChange={handleChange(`panel${i + 1}`)}
            sx={{
              boxShadow: "0 0px 6px rgba(0, 0, 0, 0.15)",
              borderRadius: "16px !important",
              paddingBlock: "6px",
              backgroundColor: `${
                theme.palette.mode === "dark"
                  ? theme.palette.background.paper
                  : theme.palette.background.default
              } `,
              "&:before": { display: "none" },
            }}
            key={i}
          >
            <AccordionSummary
              expandIcon={<ChevronDown />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                component="span"
                sx={{
                  fontSize: {
                    xs: "16px",
                    xxs: "14px",
                  },
                  fontWeight: 700,
                }}
              >
                {data.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontWeight: 400,
                  fontSize: {
                    xs: "16px",
                    xxs: "14px",
                  },
                  lineHeight: 1.7,
                }}
                component="p"
              >
                {data.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
