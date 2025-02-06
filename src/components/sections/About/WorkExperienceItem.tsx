export const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  jobTitle,
  companyDate,
  jobDesc,
}) => {
  return (
    <div>
      <h4 className="font-semibold text-lg">{jobTitle}</h4>
      <h4 className="italic mb-2">{companyDate}</h4>
      <p className="text-sm">{jobDesc}</p>
    </div>
  );
};

interface WorkExperienceItemProps {
  jobTitle: string;
  companyDate: string;
  jobDesc: string;
}
