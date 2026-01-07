export const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  jobTitle,
  companyDate,
  jobDesc,
  projects,
}) => {
  return (
    <div>
      <h4 className="font-semibold text-lg">{jobTitle}</h4>
      <h4 className="italic mb-2">{companyDate}</h4>
      <p className="text-sm">{jobDesc}</p>
      {projects && projects.length > 0 && (
        <div className="mt-4 ml-4">
          <h5 className="font-semibold">Projects:</h5>
          <ul className="list-disc list-inside">
            {projects.map((project, index) => (
              <li key={index}>
                <span className="italic">{project.name}</span>: <br />
                <span className="text-sm">{project.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

interface WorkExperienceItemProps {
  jobTitle: string;
  companyDate: string;
  jobDesc: string;
  projects?: {
    name: string;
    description: string;
  }[];
}
