import { workflows } from "./workflows.js";
import {
  generateBlog,
  generateSEO,
  generateLinkedIn,
  generateTwitter,
} from "./generators.js";

export const runWorkflow = async (data) => {
  const steps = workflows[data.workflow];

  const results = {
    blog: null,
    seo: {
      title: null,
      description: null,
    },
    linkedin: null,
    twitter: [],
  };

  for (const step of steps) {
    switch (step) {
      case "blog": {
        results.blog = await generateBlog(data);
        break;
      }

      case "seo": {
        results.seo = await generateSEO({
          blog: results.blog,
        });
        break;
      }

      case "linkedin": {
        results.linkedin = await generateLinkedIn({
          blog: results.blog,
          topic: data.topic,
          writingStyle: data.writingStyle,
          language: data.language,
        });
        break;
      }

      case "twitter": {
        results.twitter = await generateTwitter({
          blog: results.blog,
          topic: data.topic,
          language: data.language,
        });
        break;
      }
    }
  }

  return results;
};
