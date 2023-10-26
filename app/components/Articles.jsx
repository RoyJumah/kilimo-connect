import React from "react";
import SingleArticle from "../ui/SingleArticle";
import MainArticle from "../ui/MainArticle";

const DUMMY_ARTICLES = [
  {
    id: 2,
    title: "The Science of Taste: Exploring the Art and Chemistry of Flavor",
    image: "/images/articles/flavor.jpg",
    tag: "Food Science",
    date: "2021-05-12",
    author: "Peter Shumlin",
  },
  {
    id: 3,
    title: "Urban Farming: How City Dwellers Are Cultivating Green Spaces",
    tag: "Urban Farming",
    image: "/images/articles/urban-farmingJ.jpg",
    date: "2021-05-12",
    author: "Peter Wong",
  },

  {
    id: 4,
    title: "The Secret World of Spices: A Global Culinary Tour of Flavor",
    tag: "Food Science",
    image: "/images/articles/spices.jpg",
    date: "2021-05-12",
    author: "Satoshi Oshiro",
  },
  {
    id: 5,
    title:
      "Rediscovering Lost Cuisines: A Culinary Journey through Forgotten Flavors",
    tag: "Food Science",
    image: "/images/articles/cuisine.jpg",
    date: "2021-05-12",
    author: "Giussepe Russo",
  },
];

function Articles() {
  const articles = DUMMY_ARTICLES;

  return (
    <div className=" mt-8 flex grid-cols-2 flex-col gap-4 sm:mt-16 sm:grid sm:gap-6">
      <MainArticle />

      <ul className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:items-end sm:gap-6">
        {articles.map((article) => (
          <SingleArticle articles={article} key={article.id} />
        ))}
      </ul>
    </div>
  );
}

export default Articles;
