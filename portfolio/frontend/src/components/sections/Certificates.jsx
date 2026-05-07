import { ExternalLink } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const certificates = [
  {
    title: "Multi-Paradigm Programming with Modern C++",
    issuer: "Coursera",
    link: "https://drive.google.com/file/d/1ERcT_PcrFzq0rATtGBb2yvFFuSFtayDC/view?usp=sharing",
  },
  {
    title: "The Modern C++ Challenger",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1NW8vOK6vclxDq0dd56que7dhKAfQ7Pf1/view?usp=sharing",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Coursera",
    link: "https://drive.google.com/file/d/11_LKcoNf3N94gHq5s7tZpJGxaNOF2acY/view?usp=sharing",
  },
  {
    title: "Introduction to Java",
    issuer: "SoloLearn",
    link: "https://drive.google.com/file/d/1NViJCnu3YyHJsoDRWuLFqo9eXuNj5SbI/view?usp=sharing",
  },
  {
    title: "SQL Tables, Database and SQL",
    issuer: "Coursera",
    link: "https://drive.google.com/file/d/1evH7BMJNgwYy07XpY6jKuzlyO6TJ6HBo/view?usp=sharing",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-32 px-6 lg:px-12 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Achievements"
          title="Certificates"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="group bg-slate-950 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              {/* Certificate Icon */}
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <span className="text-3xl">📜</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 leading-snug">
                {certificate.title}
              </h3>

              {/* Issuer */}
              <p className="text-slate-400 mb-8">
                Issued by {certificate.issuer}
              </p>

              {/* Link */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
              >
                View Certificate
                <ExternalLink size={18} />
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificates;