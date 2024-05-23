import { useEffect, useState } from "react";
import redbtn from "/src/assets/images/Layer 4 copy 4.png";
import newsimage from "/src/assets/images/Layer 14.png";

const Newswindow = () => {
  const [mynews, setMyNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const fetchData = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=72006d00cece4909b82b68131df9dc66"
    );
    let data = await response.json();
    setMyNews(data.articles.slice(0, 6)); // Get only the first 6 articles
    setSelectedArticle(data.articles[0]); // Set the first article as the default selected article
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="newsWindow rounded-xl flex-col md:flex md:flex-row md:w-[55%] w-full md:mx-auto justify-around items-center gap-x-0 gapy-y-0 px-2">
      <div className="relative px-2 mx-2 py-4 w-full md:w-[55%] h-1/2 md:h-2/3 object-cover group">
        {selectedArticle && (
          <img
            className="w-full h-full object-contain rounded-lg shadow-lg border-solid transition duration-300 ease-in-out transform hover:scale-105"
            src={selectedArticle.urlToImage || newsimage}
            alt="news"
          />
        )}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-newscap bg-opacity-75 px-3 py-1 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto rounded-lg flex flex-col justify-between">
          <p className="text-sm text-white font-sans overflow-scroll text-ellipsis whitespace-normal">
            {selectedArticle ? selectedArticle.description : "Loading..."}
          </p>
          <button className="btn font-sans font-semibold text-white text-xs mt-2 items-end">
            Read More
          </button>
        </div>
      </div>
      <div className="w-full md:w-[40%]">
        <h2 className="text-center text-lg font-title text-black md:text-start font-bold">
          Latest <span className="text-navbackground">Articles</span>
        </h2>
        <ul className="newsWindowul rounded-xl flex flex-col gap-2 w-full">
          {mynews.slice(1, 6).map(
            (
              article,
              index // Get the next 5 articles
            ) => (
              <li
                key={index}
                className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <span className="flex gap-2">
                  <img className="size-3 ml-2" src={redbtn} alt="" />
                  <p className="font-sans text-xs font-light">
                    {article.title}
                  </p>
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Newswindow;
