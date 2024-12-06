import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";

const skillPage = () => {
  const language = [
    { alt: "TypeScript", className: "devicon-typescript-plain" },
    { alt: "C++", className: "devicon-cplusplus-plain" },
    { alt: "C", className: "devicon-c-plain" },
    { alt: "JavaScript", className: "devicon-javascript-plain" },
    { alt: "MATLAB", className: "devicon-matlab-plain" },
    { alt: "Python", className: "devicon-python-plain" },
  ];

  const framework = [
    { alt: "Next.js", className: "devicon-nextjs-plain" },
    { alt: "React", className: "devicon-react-original" },
    { alt: "Tailwind CSS", className: "devicon-tailwindcss-original" },
    { alt: "Qt", className: "devicon-qt-original" },
  ];

  const tools = [
    { alt: "Git", className: "devicon-git-plain" },
    { alt: "Docker", className: "devicon-docker-plain" },
    { alt: "Bash", className: "devicon-bash-plain" },
    { alt: "Slack", className: "devicon-slack-plain" },
    { alt: "Vercel", className: "devicon-vercel-original-wordmark" },
    { alt: "GitHub", className: "devicon-github-original" },
  ];

  const sql = [
    { alt: "MongoDB", className: "devicon-mongodb-plain" },
    { alt: "SQLite", className: "devicon-sqlite-plain" },
    { alt: "Redis", className: "devicon-redis-plain" },
  ];

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            I am currently studying Bachelor of Computer Science at the University of Adelaide. The program has provided me with a well-rounded education, covering both theoretical foundations and practical applications of computer science. I specialize in building web applications and sites using JavaScript, TypeScript, React, Next.js, and Node.js. I have a solid understanding of HTML5, CSS3, and responsive design principles.
          </p>
        </FramerWrapper>
        <FramerWrapper y={100} delay={0.30} className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <SkillsFooter items={language} />
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.32}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Frameworks/Libraries
          </h1>
          <SkillsFooter items={framework} />
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.34}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Tools
          </h1>
          <SkillsFooter items={tools} />
        </FramerWrapper>
        <FramerWrapper className="block" y={100} delay={0.36}>
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Structured Query Language
          </h1>
          <SkillsFooter items={sql} />
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;