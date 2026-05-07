const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6"
    >
      <div className="text-center max-w-5xl">

        {/* Subtitle */}
        <p className="text-cyan-400 text-xl mb-6">
          Frontend Developer
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Building Modern
          <br />
          Digital Experiences
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          I create beautiful and responsive modern web applications
          using React and Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-5 flex-wrap">

          {/* View Projects Button */}
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            View Projects
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition duration-300"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;