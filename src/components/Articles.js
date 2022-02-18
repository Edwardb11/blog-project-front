import React from "react";
import { Link } from 'react-router-dom';

export const Articles = ({articles}) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="p-4 md:w-1/2  ">
          <div className="h-full border-2 border-gray-200 border-opacity-80 rounded-2xl  overflow-hidden shadow-lg hover:bg-sky-200  hover:animate-pulse     ">
            <Link to={`/article/${article.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={article.thumbnail}
                alt="blog"
              />
            </Link>
            <div>
              <Link key={index} to={`/article/${article.name}`}>
                <h3 className="title-font text-lg font-medium text-center text-gray-900 mb-3">
                  {" "}
                  {article.title}
                </h3>
              </Link>
              <p className="leading-relaxed mb-3 px-4">
                {/* 0- 115 string */}
                {article.content[0].substring(0, 115)}...
              </p>
              <div className="flex items-center flex-wrap">
                <Link
                  className="text-indigo-500 inline-flex hover:text-blue-900  items-center md:mb-2 px-4 lg:mb-0 "
                  to={`/article/${article.name}`}
                >
                  Learn more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
