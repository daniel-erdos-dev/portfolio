export const SkillSection: React.FC<SkillSectionProps> = ({
  skillArray,
  sectionName,
}) => {
  return (
    <div className="rounded-xl p-6 hover:-translate-y-1  transition-all">
      <h3 className="text-xl font-bold mb-4">{sectionName}</h3>
      <div className="flex flex-wrap gap-2">
        {skillArray.map((skill, key) => (
          <span
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm cursor-default
                               hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
            key={key}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

interface SkillSectionProps {
  skillArray: string[];
  sectionName: string;
}
