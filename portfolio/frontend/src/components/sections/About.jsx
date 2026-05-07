import profile from "../../assets/profile.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 lg:px-12 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 text-lg mb-3">
            Get To Know Me
          </p>

          <h2 className="text-5xl font-bold">
            About Me
          </h2>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}
          <div>
            <img
              src={profile}
              alt="profile"
              className="rounded-3xl w-full h-[500px] object-cover border border-white/10 shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Full Stack Developer & Problem Solver
            </h3>

            <p className="text-slate-400 leading-relaxed mb-6 text-lg">
              I am Logesh Ramu R, a passionate and motivated
              Computer Science Engineering student with strong
              interest in Full Stack Development and modern
              web technologies.
            </p>

            <p className="text-slate-400 leading-relaxed mb-6 text-lg">
              I enjoy building responsive and user-friendly
              web applications using technologies like React,
              JavaScript, HTML, CSS, SQL, and C++.
            </p>

            <p className="text-slate-400 leading-relaxed mb-10 text-lg">
              My goal is to continuously improve my technical
              skills, solve real-world problems, and contribute
              to innovative software development projects.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-6">

              <div className="bg-slate-950 border border-white/10 p-6 rounded-2xl hover:border-cyan-400 transition duration-300">

                <h4 className="text-4xl font-bold text-cyan-400 mb-2">
                  CSE
                </h4>

                <p className="text-slate-400">
                  3rd Year Student
                </p>

              </div>

              <div className="bg-slate-950 border border-white/10 p-6 rounded-2xl hover:border-cyan-400 transition duration-300">

                <h4 className="text-4xl font-bold text-cyan-400 mb-2">
                  5+
                </h4>

                <p className="text-slate-400">
                  Certifications
                </p>

              </div>

            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-4 mt-10">

              {[
                "React",
                "JavaScript",
                "C++",
                "Java",
                "SQL",
                "HTML",
                "CSS",
                "GitHub",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-5 py-2 rounded-full bg-slate-950 border border-white/10 text-slate-300 hover:border-cyan-400 hover:text-white transition duration-300"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;