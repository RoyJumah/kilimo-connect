"use client";
import Image from "next/image";
import { useState } from "react";
import { getLatestNews, getNews } from "@/data/dummy-news";

function News() {
  const news = getNews();
  const latestNews = getLatestNews();
  const [activeList, setActiveList] = useState("news");

  function handleShowNews() {
    setActiveList("news");
  }

  function handleShowLatest() {
    setActiveList("latest");
  }
  return (
    <div>
      <div className="flex gap-4 border-b border-green-500 font-bold">
        <button
          onClick={handleShowNews}
          className={`${
            activeList === "news" ? "border-b-2 border-green-700" : ""
          }`}
        >
          In the news
        </button>
        <button
          onClick={handleShowLatest}
          className={`${
            activeList === "latest" ? "border-b-2 border-green-700" : ""
          }`}
        >
          Latest
        </button>
      </div>
      {activeList === "news" && (
        <ul className="scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-stone-200 h-[800px] space-y-2 overflow-y-scroll">
          {news.map((news) => (
            <li key={news.id} className="border-b border-b-stone-200 py-2">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={news.image}
                  alt="image of news article"
                  width={135}
                  height={95}
                />

                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-bold  capitalize text-green-600">
                    {news.title}
                  </h3>
                  <p className="cursor-pointer text-sm  font-bold transition-all duration-150 hover:text-green-600">
                    {news.content}
                  </p>
                  <div className="flex  items-center gap-1 text-xs">
                    <p>{news.date}</p>
                    <p>
                      <span className="space-x-2">•</span>
                      <span className="font-semibold"> {news.author}</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {activeList === "latest" && (
        <ul className="scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-stone-200 h-[800px] space-y-2 overflow-y-scroll">
          {latestNews.map((news) => (
            <li key={news.id} className="border-b border-b-stone-200 py-2">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={news.image}
                  alt="image of news article"
                  width={135}
                  height={95}
                />

                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-bold  capitalize text-green-600">
                    {news.title}
                  </h3>
                  <p className="cursor-pointer text-sm  font-bold transition-all duration-150 hover:text-green-600">
                    {news.content}
                  </p>
                  <div className="flex  items-center gap-1 text-xs">
                    <p>{news.date}</p>
                    <p>
                      <span className="space-x-2">•</span>
                      <span className="font-semibold"> {news.author}</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default News;
