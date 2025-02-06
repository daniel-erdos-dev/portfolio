import { RevealOnScroll } from "../RevealOnScroll";

export const About: React.FC = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "Redux",
    "NextJS",
    "TailwindCSS",
    "Material UI",
    "Angular",
  ];
  const backendSkills = ["ASP.NET", "NodeJS", "Express", "AWS"];
  const otherSkills = [
    "Unit Testing",
    "UI Testing",
    "Application Security",
    "Agile",
    "Git",
    "CI/CD",
  ];
  const languages = [
    "Hungarian - native",
    "English - fluent/professional",
    "Spanish - conversational",
    "Italian - understanding",
  ];

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
            <p className="text-gray-300 mb-6">
              I first dipped my toes into coding and web development in 2015,
              and over the years, I’ve worn many hats—working in different
              roles, exploring a variety of technologies, and gaining experience
              in both frontend and backend development, as well as automation
              testing. I thrive on learning, constantly pushing myself to
              improve, and I bring strong communication skills, a proactive
              mindset, and a team-oriented approach to my work. With experience
              in both large-scale applications and fast-paced MVP projects, I’ve
              developed a keen ability to adapt, iterate quickly, and build
              solutions that are both functional and user-friendly. I also have
              extensive experience working remotely. In 2023, I embraced a new
              challenge and moved to Valencia, Spain, where I explored
              solopreneurship in a different creative field—portrait, branding,
              and product photography, as well as videography. After returning
              to Budapest in 2024 and briefly working as a videographer and
              video editor for a marketing agency, I found myself drawn back to
              IT. By mid-to-late 2024, I began transitioning back into
              development, refreshing my knowledge, and diving into new
              technologies with renewed enthusiasm.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1  transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
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
              <div className="rounded-xl p-6 hover:-translate-y-1  transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
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
              <div className="rounded-xl p-6 hover:-translate-y-1  transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Other Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((skill, key) => (
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
              <div className="rounded-xl p-6 hover:-translate-y-1  transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((skill, key) => (
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
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-lg">
                    Test automation engineer
                  </h4>
                  <h4 className="italic mb-2">Black Swan Data (2015-2016)</h4>
                  <p className="text-sm">
                    Writing automated UI tests using Ruby, Selenium, Appium,
                    manual testing
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Test automation engineer
                  </h4>
                  <h4 className="italic mb-2">
                    Docler Holding - Budapest/Hungary (2016-2017)
                  </h4>
                  <p className="text-sm">
                    Creating test automation environment, developing test
                    automation framework, writing automated tests, mentoring
                    junior colleagues. Technologies used: Java, C#, .NET,
                    Selenium, Appium
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Software Development Engineer in Test
                  </h4>
                  <h4 className="italic mb-2">
                    LogMeIn - Budapest/Hungary (2017-2019)
                  </h4>
                  <p className="text-sm">
                    Creating test environment, developing test framework,
                    writing automated tests, development of testing related
                    APIs, interviewing SDET candidates, mentoring medior SDET
                    colleague, developing testing tools, helping with devops
                    tasks (pipeline, releasing). Technologies used: C#, .NET,
                    Selenium, Azure, Jenkins, Angular
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Web developer</h4>
                  <h4 className="italic mb-2">
                    LogMeIn/GoTo - Budapest/Hungary (2019-2022)
                  </h4>
                  <p className="text-sm">
                    Developing web applications and integrations (join.me,
                    Rescue, GoToConnect), Frontend development using React,
                    Javascript, Typescript, HTML5, CSS3, Angular, Redux, Redux
                    saga, Backend development using C#, .NET, Azure, Acted as
                    security champion for my dev team (Threat modeling, bridge
                    between dev and appsec teams, monitoring analysis tools)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Photographer</h4>
                  <h4 className="italic mb-2">
                    Solopreneur - Valencia/Spain (2023-2024)
                  </h4>
                  <p className="text-sm">
                    Portrait, Branding and Product Photography
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    Videographer and Video editor
                  </h4>
                  <h4 className="italic mb-2">
                    Creative Coffee Agency/Solopreneur - Budapest/Hungary
                    (2024-2024)
                  </h4>
                  <p className="text-sm">
                    Short form videography for various brands, short and long
                    form video editing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
