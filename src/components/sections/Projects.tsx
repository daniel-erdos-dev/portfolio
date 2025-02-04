import { RevealOnScroll } from "../RevealOnScroll";

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
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Recommend to Watch</h3>
              <p className="text-gray-400 mb-4">
                A movie recommendation application that utilizes:
              </p>
              <ul className="text-gray-400 mb-4">
                <li>
                  - TheMovieDatabase's API to handle favorite movie selection
                  and get movie details
                </li>
                <li>- ChatGPT API to get recommendations from an AI</li>
                <li>
                  - JustWatch API (through TMDB's API) to get info about where
                  you can stream/buy the recommended movies
                </li>
              </ul>
              <div className="flex flex-wrap gap-1 mb-4">
                {[
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
                ].map((skill, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm cursor-default mb-2
                               hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                    key={key}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-end items-center">
                <a
                  href="https://github.com/daniel-erdos-dev/recommend-to-watch"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project on Github -&gt;
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">SightReadR</h3>
              <p className="text-gray-400 mb-4">
                An application that helps practicing sightreading sheet music,
                by utilizing:
              </p>
              <ul className="text-gray-400 mb-4">
                <li>
                  - Web Midi API to handle midi connection with a keyboard
                </li>
                <li>
                  - abcjs, to create beautiful sheet music on the fly based on
                  configuration
                </li>
              </ul>
              <div className="flex flex-wrap gap-1 mb-4">
                {[
                  "React",
                  "NextJS",
                  "Typescript",
                  "Redux",
                  "Redux toolkit",
                  "Material UI React",
                  "Jest",
                ].map((skill, key) => (
                  <span
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm cursor-default mb-2
                               hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                    key={key}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-end items-center">
                <p className="text-gray-400 my-4">
                  Project is in early phase, link is coming soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
