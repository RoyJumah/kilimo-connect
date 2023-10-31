import Image from "next/image";

function SingleArticle({ articles }) {
  return (
    <div className="relative ">
      <div className="relative ">
        <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
        <Image
          src={articles.image}
          alt="header image"
          width={1200}
          height={600}
          className="h-full w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-2 text-white">
          <span className="inline-block max-w-max rounded-sm bg-[#9da452] px-[4px] py-[1px] text-sm font-semibold uppercase">
            {articles.tag}
          </span>
          <h2 className="text-md mt-2 font-extrabold">{articles.title}</h2>
          <div className="mt-1 flex items-center gap-2 text-xs">
            <span>{articles.date}</span>
            <p>• {articles.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleArticle;
