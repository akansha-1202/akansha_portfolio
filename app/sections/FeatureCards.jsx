import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-5 sm:p-8 flex flex-col gap-3 sm:gap-4"
        >
          <div className="size-12 sm:size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold mt-1 sm:mt-2">{title}</h3>
          <p className="text-white-50 text-base sm:text-lg leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
