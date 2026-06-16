import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-8 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-36 sm:h-44 md:h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`a-${index}`} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`b-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
