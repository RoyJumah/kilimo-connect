import Image from "next/image";

function DiscoverFoods() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className=" mb-2 text-center text-2xl font-medium duration-200  sm:mb-4 sm:text-3xl">
        Discover Foods
      </h1>
      <div className="flex flex-col gap-4 sm:gap-6">
        <h2 className="text-xl">Why Organic</h2>
        <p>
          All of our products are certified by the Soil Association, which
          audits our entire supply chain. This includes where our products are
          sourced, how they are processed and packaged, and what information we
          display on our product labels.
        </p>
        <p>
          Our products go through these rigorous tests, which are even more
          thorough than the standards set by EU and UK laws, so you can be
          confident in the highest standards of organic integrity throughout the
          entire Rainforest Foods range.
        </p>

        <Image
          src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/discover-images/cacao.jpg?t=2023-11-14T15%3A06%3A26.167Z"
          width={480}
          height={480}
          alt="product image"
          className="self-center"
        />
      </div>
      <div className="mt-4 flex flex-col gap-4  ">
        <h2 className="text-2xl">Vegan Society Certified</h2>
        <p>
          The Vegan Society is dedicated to promoting veganism, and the
          sustainable production of food that is kinder to animals, the
          environment and producers.
        </p>
        <p>
          You will find the Vegan Society logo proudly displayed on all of our
          products.
        </p>

        <Image
          src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/discover-images/chia.jpg?t=2023-11-14T15%3A07%3A07.692Z"
          width={480}
          height={480}
          alt="product image"
          className="self-center"
        />
      </div>
      <div className="mt-4 flex flex-col gap-4  ">
        <h2 className="text-2xl">Kosher Certification</h2>
        <p>
          All Rainforest Foods products are certified Kosher by the Kashrut
          Division of the London Beth Din (KLBD).
        </p>
        <p>
          KLBD Kosher Certification is a leading global kosher certification
          agency operating across six continents.
        </p>

        <Image
          src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/discover-images/kosher.jpg?t=2023-11-14T15%3A07%3A19.813Z"
          width={400}
          height={400}
          alt="product image"
          className="self-center"
        />
      </div>
      <div className="mt-4 flex flex-col gap-4  ">
        <h2 className="text-2xl">Our Producers</h2>
        <p>
          From the farm to your table, our superfoods pass through as few hands
          as possible.
        </p>
        <p>
          We work with producers who employ traditional farming techniques and
          low-intensity production.
        </p>

        <Image
          src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/discover-images/farmer.jpg?t=2023-11-14T15%3A07%3A30.213Z"
          width={400}
          height={400}
          alt="product image"
          className="self-center"
        />
      </div>
    </div>
  );
}

export default DiscoverFoods;
