export const blogPrompt = ({ topic, keywords, language, writingStyle }) => `
Generate a comprehensive and engaging article on the topic of '${topic}'.
    Incorporate the following keywords naturally: ${
      keywords && keywords.length > 0 ? keywords.join(", ") : "none"
    }.
    The content should be in ${language} and written in a ${writingStyle} tone.
    Ensure the output is in pure HTML string format.
    Crucially, **DO NOT include <html>, <head>, or <body> tags**.
    Only provide the content that would typically go inside the <body>,
    including appropriate HTML tags for headings (e.g., <h1>, <h2>), paragraphs (<p>),
    lists (<ul>, <ol>, <li>), bold (<strong>), italic (<em>), and any other relevant HTML formatting for an article.
`;

export const seoPrompt = ({ blog }) => `
Based on this blog below, generate an SEO-optimized title and description for it:

${blog}

Return ONLY valid JSON:

{
  "title": "",
  "description": ""
}
`;

export const linkedinPrompt = ({blog, topic, writingStyle, language }) => {
  return `
You are a professional LinkedIn content writer.

Create a high-engagement LinkedIn post based on the blog below.

BLOG:
${blog}

Requirements:
- Hook in the first 2 lines
- Short paragraphs
- Add line breaks for readability
- Include 3–5 relevant hashtags at the end
- Tone: ${writingStyle}
- Language: ${language}



Return ONLY the LinkedIn post text. No JSON, no explanations.
`;
};

export const twitterPrompt = ({blog, topic, language }) => {
  return `
You are a Twitter (X) content strategist.

Create a viral Twitter thread based on this blog below.

BLOG:
${blog}

Rules:
- Break into 6–10 tweets
- Each tweet should be 1–2 sentences max
- Tweet 1 = strong hook
- Last tweet = summary + CTA
- Add no numbering like "1/10"
- Use simple language (${language})



Return ONLY the thread as plain text separated by line breaks.
Each tweet should be separated by a blank line.
`;
};
