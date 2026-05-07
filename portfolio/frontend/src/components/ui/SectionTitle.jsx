const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-20">

      <p className="text-cyan-400 text-lg font-medium mb-3">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

    </div>
  );
};

export default SectionTitle;