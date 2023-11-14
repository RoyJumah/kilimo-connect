import React from "react";
import SingleArticle from "../ui/SingleArticle";

const DUMMY_ARTICLES = [
  {
    id: 1,
    title: "The Science of Taste: Exploring the Art and Chemistry of Flavor",
    image: "/images/articles/flavor.jpg",
    description:
      "Delve into the fascinating world of taste as we explore the intricate art and chemistry behind flavor. Uncover the mysteries of why we perceive different tastes and the science that shapes our culinary experiences.",
    date: "September 15, 2021",
  },
  {
    id: 2,
    title: "Urban Farming: How City Dwellers Are Cultivating Green Spaces",

    image: "/images/articles/urban-farming.jpg",
    description:
      "Discover the transformative trend of urban farming and how city dwellers are embracing agriculture within the confines of urban spaces. Explore the innovative practices that are reshaping our cities and fostering a greener environment.",
    date: "November 12, 2021",
  },
  {
    id: 3,
    title: "The Secret World of Spices: A Global Culinary Tour of Flavor",

    image: "/images/articles/spices.jpg",
    description:
      "Embark on a global culinary tour as we unveil the secret world of spices. Learn about the rich history, cultural significance, and diverse uses of spices that have shaped the flavors of cuisines around the world.",
    date: "March 12, 2021",
  },
  {
    id: 4,
    title:
      "Rediscovering Lost Cuisines: A Culinary Journey through Forgotten Flavors",

    image: "/images/articles/cuisine.jpg",
    description:
      "Take a culinary journey back in time as we rediscover lost cuisines and flavors that have faded from our modern tables. Join us in exploring forgotten culinary traditions and the stories behind each unique dish.",
    date: "December 12, 2022",
  },
  {
    id: 5,
    title: "Climate Change Action: Simple Steps for a Greener Future",

    image: "/images/articles/climate-change.jpg",
    description:
      "Empower yourself with actionable steps for a greener future. Uncover the simple yet impactful actions you can take to contribute to the fight against climate change and create a more sustainable world.",
    date: "July 12, 2023",
  },
];

function Articles() {
  const articles = DUMMY_ARTICLES;

  return (
    <div className="mt-4 sm:mt-6 md:mt-10">
      <h2 className="mb-2 text-center text-xl font-extrabold capitalize text-[#9da452] sm:text-2xl md:mb-4 md:text-4xl">
        Our news
      </h2>

      <ul className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 ">
        {articles.map((article) => (
          <SingleArticle articles={article} key={article.id} />
        ))}
      </ul>
    </div>
  );
}

export default Articles;
