import redbtn from "/src/assets/images/Layer 4 copy 4.png";

const SecondMininav = () => {
  return (
    <>
      <ul className="flex justify-between items-center md:w-[55%] md:mx-auto md:gap-0.5 py-3 px-2 rounded-b-lg overflow-hidden">
        <li className="transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold text-white">
              Movies
            </p>
          </span>
        </li>
        <li className="transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Music
            </p>
          </span>
        </li>
        <li className="transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Download
            </p>
          </span>
        </li>
        <li className="transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              On-Demand
            </p>
          </span>
        </li>
        <li className="transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Expert Advice
            </p>
          </span>
        </li>
        <li className="transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Community
            </p>
          </span>
        </li>
        <li className="transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              StarSpeak
            </p>
          </span>
        </li>
        <li className="transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Offers & Promos
            </p>
          </span>
        </li>
        <li className="transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
          <span className="flex items-center justify-between gap-1">
            <img src={redbtn} alt="btn" />
            <p className="text-xs font-title text-center font-semibold  text-white">
              Take a break
            </p>
          </span>
        </li>
      </ul>
    </>
  );
};

export default SecondMininav;
