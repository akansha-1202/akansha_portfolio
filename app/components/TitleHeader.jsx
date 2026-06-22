const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-2.5 sm:gap-3 px-2">
      <div className="hero-badge">
        <p className="text-balance">{sub}</p>
      </div>
      <div>
        <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-center text-balance leading-snug">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default TitleHeader;
