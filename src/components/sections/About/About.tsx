import { RevealOnScroll } from "../../RevealOnScroll";
import { SkillSection } from "./SkillSection";
import { WorkExperienceItem } from "./WorkExperienceItem";
import {
  backendSkills,
  frontendSkills,
  otherSkills,
  languages,
} from "./Data/Skills";
import { workExperience } from "./Data/WorkExp";
import { aboutText } from "./Data/AboutText";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border transition-all">
            <p className="text-gray-300 mb-6">{aboutText}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillSection
                skillArray={frontendSkills}
                sectionName="Frontend"
              />
              <SkillSection skillArray={backendSkills} sectionName="Backend" />
              <SkillSection
                skillArray={otherSkills}
                sectionName="Other Technical Skills"
              />
              <SkillSection skillArray={languages} sectionName="Languages" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-6 text-gray-300">
                {workExperience.map((item, index) => (
                  <WorkExperienceItem
                    key={index}
                    jobTitle={item.jobTitle}
                    companyDate={item.companyDate}
                    jobDesc={item.jobDesc}
                    projects={item.projects}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
