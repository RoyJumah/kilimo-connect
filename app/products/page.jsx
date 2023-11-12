import Image from "next/image";
import Link from "next/link";

const fetchProductsData = async () => {
  const products = await fetch("http://localhost:3000/api/products", {
    next: {
      revalidate: 60,
    },
  });
  if (!products.ok) throw new Error("Failed to fetch products");
  await new Promise((resolve) => setTimeout(resolve, 600));
  const data = await products.json();
  return data;
};

export default async function ProductListPage() {
  const data = await fetchProductsData();

  return (
    <>
      <div className="flex justify-between border-b border-b-slate-200 p-4 sm:mb-4">
        <h2 className="text-lg">Products</h2>

        <select name="pets" id="pet-select" className="outline-none">
          <option value="dog">Sort By</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>

      <ul className="mt-2  grid gap-2  sm:grid-cols-2 sm:gap-6 md:grid-cols-4 md:gap-4 lg:grid-cols-6 lg:gap-2">
        {data.map((product, i) => (
          <Link
            href={`/products/${product.product_id}`}
            key={i}
            className="overflow-hidden"
            // style={{ width: `${imageSize.width}px` }} prevents the layout shift when the image loads
            // this is achieved by setting the width of the image container to the desired width

            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.9 }}
            // transition={{ duration: 0.3 }}
          >
            <Image
              src={product.image}
              width={200}
              height={200}
              alt={product.name}
              priority
              className="h-auto w-auto"
            />
          </Link>
        ))}
      </ul>
    </>
  );
}
