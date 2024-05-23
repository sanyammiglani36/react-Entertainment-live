import { useState, useEffect } from 'react';
import Mininav from "./Mininav";
import SecondMininav from "./SecondMininav";
import redbtn from "/src/assets/images/Layer 4 copy 4.png";


// conditionally render the buttonnav on smaller screens 
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (event) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
};
// making use of the width
const Navbar = () => {
  const isMdOrLarger = useMediaQuery('(min-width: 768px)');

  return (
    <div className="navbarbg w-full">
      <Mininav />
      <div className="p-1.5 flex md:flex-row flex-col justify-between md:w-[55%] md:mx-auto mt-4 mb-1 items-center">
        <h1 className="md:text-4xl text-2xl text-title text-white headingtext font-extrabold mb-2">
          Entertainment Live
        </h1>
        <div className="flex flex-col md:w-[35%] w-full px-3 py-2 navmidcomp rounded-lg">
          <input
            className="rounded-lg bg-polltext text-black outline:none focus:outline-none border-gray-300 text-sm mb-3"
            type="text"
            placeholder="Search Keyword"
          ></input>
          <div className="flex flex-row gap-1 mb-2 justify-center">
            <span className="flex gap-0 md:gap-1">
              <img className="size-3" src={redbtn} alt="" />
              <p className="text-xs font-sans text-center text-polltext">Entertainment</p>
            </span>
            <span className="flex gap-0 md:gap-1">
              <img className="size-3" src={redbtn} alt="" />
              <p className="text-xs font-sans text-center text-polltext">Video</p>
            </span>
            <span className="flex gap-0 md:gap-1">
              <img className="size-3" src={redbtn} alt="" />
              <p className="text-xs font-sans text-center text-polltext">Images</p>
            </span>
          </div>
        </div>
      </div>
      {/* conditionally rendering the secondmininav on smaller devices */}
      {isMdOrLarger && <SecondMininav />}
    </div>
  );
};

export default Navbar;
