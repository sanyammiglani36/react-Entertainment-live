import Basefooter from "./Basefooter";
import Buttonfooter from "./Buttonfooter";
import { useState, useEffect } from 'react';

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

const Footer = () => {
  const isMdOrLarger = useMediaQuery('(min-width: 768px)');

  return (
    <footer className="footer flex flex-col gap-8">
      {isMdOrLarger && <Buttonfooter />}
      <Basefooter />
    </footer>
  );
};

export default Footer;
