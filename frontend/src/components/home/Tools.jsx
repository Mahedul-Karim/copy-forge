import React from "react";
import Container from "../ui/Container";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import ToolsCard from "./tools/ToolsCard";
import {
  Layers,
  NotebookPen,
  Tag,
  ChartPie,
  FileType2,
  LetterText,
  Film,
  ShieldAlert,
  ClipboardPen,
} from "lucide-react";
import Title from "../ui/section/Title";

const CARD_DATA = [
  {
    Icon: Layers,
    title: "Article Generator",
    description:
      "Article Generator uses advanced algorithms to automatically create articles, saving effort for writers and marketers.",
  },
  {
    Icon: NotebookPen,
    title: "Rewrite Article",
    description:
      "Instructions to paraphrase an article while preserving its meaning, structure, and tone without infringing on plagiarism.",
  },
  {
    Icon: Tag,
    title: "Tags Generator",
    description:
      "A tool that generates relevant and popular tags for online content, such as blog posts, videos, and social media.",
  },
  {
    Icon: ChartPie,
    title: "Ads Content",
    description:
      "Automatically creates advertising copy any platforms, such as Google, Facebook, and Instagram, to attract customers.",
  },
  {
    Icon: FileType2,
    title: "Write Title",
    description:
      "Creates compelling written content that accurately and creatively describes AI products, highlighting their unique features and benefits.",
  },
  {
    Icon: LetterText,
    title: "Write Description",
    description:
      "Description Writer is a tool that generates concise, informative summaries on various topics, providing key details efficiently and effectively.",
  },
  {
    Icon: Film,
    title: "Video Script",
    description:
      "Video Script Writer is a tool that creates engaging and effective scripts for videos, ensuring clear and compelling storytelling.",
  },
  {
    Icon: ShieldAlert,
    title: "Grammar Checker",
    description:
      "AI Grammar Checker: Instantly corrects grammar, spelling, and punctuation errors for more accurate and polished written content.",
  },
  {
    Icon: ClipboardPen,
    title: "Name Generator",
    description:
      "Name Generator is a tool that generates creative and unique names for individuals, businesses, products, or any other naming needs.",
  },
];

const Tools = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: `${
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : theme.palette.background.paper
        }`,
      }}
    >
      <Container
        sx={{
          paddingBlock: {
            xxs: "45px",
            md: "64px",
          },
        }}
      >
        <Title
          highlight={"awesome tools"}
          text={"Things you can do with \n our awesome tools"}
        ></Title>

        <Box
          sx={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: {
              lg: "repeat(4,1fr)",
              md: "repeat(3,1fr)",
              xs: "repeat(2,1fr)",
            },
            gap: {
              lg: "20px",
              xxs: "10px",
            },
          }}
        >
          {CARD_DATA.map((card, i) => (
            <ToolsCard
              key={i}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Tools;
