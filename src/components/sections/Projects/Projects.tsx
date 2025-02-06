import { RevealOnScroll } from "../../RevealOnScroll";
import { Project } from "./Project";

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Project
              projectName="Recommend to Watch"
              projectDesc="A movie recommendation application that utilizes:"
              usedOutsideSources={[
                "- TheMovieDatabase's API to handle favorite movie selection and get movie details",
                "- ChatGPT API to get recommendations from an AI",
                "- JustWatch API (through TMDB's API) to get info about where you can stream/buy the recommended movies",
              ]}
              usedTech={[
                "React",
                "NextJS",
                "Typescript",
                "Redux",
                "Redux toolkit",
                "TailwindCSS",
                "NodeJS",
                "AWS Lambda",
                "AWS API Gateway",
                "Jest",
                "Cypress",
              ]}
              githubLink={
                "https://github.com/daniel-erdos-dev/recommend-to-watch"
              }
            />
            <Project
              projectName="SightReadR"
              projectDesc="An application that helps practicing sightreading sheet music, by utilizing:"
              usedOutsideSources={[
                "- Web Midi API to handle midi connection with a keyboard",
                "- abcjs, to create beautiful sheet music on the fly based on configuration",
              ]}
              usedTech={[
                "React",
                "NextJS",
                "Typescript",
                "Redux",
                "Redux toolkit",
                "Material UI React",
                "Jest",
              ]}
              githubLink={null}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
