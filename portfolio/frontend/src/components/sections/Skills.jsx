const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Git",
  "Framer Motion",
  "Responsive Design",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 px-6 lg:px-12 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-cyan-400 text-lg mb-3">
            My Expertise
          </p>

          <h2 className="text-5xl font-bold">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-white/10 rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;