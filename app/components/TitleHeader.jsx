const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-5 px-2">
      <div className="hero-badge">
        <p className="text-balance">{sub}</p>
      </div>
      <div>
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-5xl text-center text-balance leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default TitleHeader;
