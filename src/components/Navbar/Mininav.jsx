import { useEffect, useState } from "react";

function Mininav() {
  const [currdate, setDate] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      if (now.toDateString() !== currdate.toDateString()) {
        setDate(now);
      }
    };
    // a function to check the date on an interval of a minute
    const timer = setInterval(tick, 60000);
    return () => {
      clearInterval(timer);
    };
  }, [currdate]);


//   to display the date in the given psd format 
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  };

  return (
    <>
      <nav className="flex justify justify-evenly content-center w-full overflow-hidden  bg-black bg-opacity-50 p-2 mt-0">
        <span className="content-center font-title text-xs text-mininav">{formatDate(currdate)}</span>
        <span className="flex justify-between space-x-3">
          <div className="flex space-x-2 content-center">
            <img className="size-4 content-center" src="../src/assets/images/padlock.png" alt="Profile" />
            <p className="content-center font-title text-xs text-mininav">Login</p>
          </div>
          <hr className="vertical" />
          <span className="content-center font-title text-xs text-mininav"> Our Blog </span>
        </span>
      </nav>
    </>
  );
}

export default Mininav;


// ADD LOGIN Functionality with a signup / sign in page
// Use react router to link to that page 
