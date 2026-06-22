import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg md:my-6 my-4">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-4 sm:p-6 flex flex-col gap-2.5 sm:gap-3"
        >
          <div className="size-10 sm:size-12 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-lg sm:text-xl font-semibold">{title}</h3>
          <p className="text-white-50 text-sm sm:text-base leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
