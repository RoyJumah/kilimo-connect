import Image from "next/image";

function SingleArticle({ articles }) {
  return (
    <li className="flex flex-col">
      <Image
        src={articles.image}
        alt="header image"
        width={1200}
        height={600}
        className="h-full w-full cursor-pointer"
      />
      <div className="flex flex-col justify-end gap-2 p-2 ">
        <h2 className="text-md mt-2 text-sm text-stone-700">
          {articles.title}
        </h2>
        <p className="text-xs text-stone-600">{articles.description}</p>

        <span className="text-xs text-stone-400">{articles.date}</span>
      </div>
    </li>
  );
}

export default SingleArticle;
