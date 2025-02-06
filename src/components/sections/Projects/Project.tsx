export const Project: React.FC<ProjectProps> = ({
  projectName,
  projectDesc,
  usedOutsideSources,
  usedTech,
  githubLink,
}) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
      <h3 className="text-xl font-bold mb-2">{projectName}</h3>
      <p className="text-gray-400 mb-4">{projectDesc}</p>
      <ul className="text-gray-400 mb-4">
        {usedOutsideSources.map((sourceDesc, key) => {
          return <li key={key}>{sourceDesc}</li>;
        })}
      </ul>
      <div className="flex flex-wrap gap-1 mb-4">
        {usedTech.map((skill, key) => (
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
        {githubLink ? (
          <a
            href="https://github.com/daniel-erdos-dev/recommend-to-watch"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
          >
            View Project on Github -&gt;
          </a>
        ) : (
          <p className="text-gray-400 my-4">
            Project is in early phase, link is coming soon!
          </p>
        )}
      </div>
    </div>
  );
};

interface ProjectProps {
  projectName: string;
  projectDesc: string;
  usedOutsideSources: string[];
  usedTech: string[];
  githubLink: string | null;
}
