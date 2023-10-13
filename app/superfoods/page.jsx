import Image from "next/image";

function SuperFoodsPage() {
  return (
    <div className=" grid grid-cols-2 gap-2">
      <div className="relative">
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
          <Image
            src="/images/superfoods-images/acai.webp"
            alt="cacao image"
            width={480}
            height={480}
            objectPosition="center"
            className="z-1" // Set z-index to place the image above the background
            layout="responsive"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
            <h2 className=" mt-2 text-lg font-extrabold  sm:text-2xl">
              Acai Berry
            </h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
          <Image
            src="/images/superfoods-images/barley.webp"
            alt="cacao image"
            width={480}
            height={480}
            objectPosition="center"
            className="z-1" // Set z-index to place the image above the background
            layout="responsive"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
            <h2 className=" mt-2 text-lg font-extrabold sm:text-2xl">
              Barley Grass
            </h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
          <Image
            src="/images/superfoods-images/cacao.webp"
            alt="cacao image"
            width={480}
            height={480}
            objectPosition="center"
            className="z-1" // Set z-index to place the image above the background
            layout="responsive"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
            <h2 className=" mt-2 text-lg font-extrabold  sm:text-2xl">Cacao</h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
          <Image
            src="/images/superfoods-images/chia.jpg"
            alt="cacao image"
            width={480}
            height={480}
            objectPosition="center"
            className="z-1" // Set z-index to place the image above the background
            layout="responsive"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
            <h2 className=" mt-2 text-lg font-extrabold  sm:text-2xl">Chia</h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
          <Image
            src="/images/superfoods-images/chlorella.webp"
            alt="cacao image"
            width={480}
            height={480}
            objectPosition="center"
            className="z-1" // Set z-index to place the image above the background
            layout="responsive"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
            <h2 className=" mt-2 text-lg font-extrabold  sm:text-2xl">
              Chlorella
            </h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
          <Image
            src="/images/superfoods-images/maca.webp"
            alt="cacao image"
            width={480}
            height={480}
            objectPosition="center"
            className="z-1" // Set z-index to place the image above the background
            layout="responsive"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
            <h2 className=" mt-2 text-lg font-extrabold  sm:text-2xl">Maca</h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
          <Image
            src="/images/superfoods-images/spirulina.jpg"
            alt="cacao image"
            width={480}
            height={480}
            objectPosition="center"
            className="z-1" // Set z-index to place the image above the background
            layout="responsive"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
            <h2 className=" mt-2 text-lg font-extrabold  sm:text-2xl">
              Spirulina
            </h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
          <Image
            src="/images/superfoods-images/wheatgrass.webp"
            alt="cacao image"
            width={480}
            height={480}
            objectPosition="center"
            className="z-1" // Set z-index to place the image above the background
            layout="responsive"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-white">
            <h2 className=" mt-2 text-lg font-extrabold  sm:text-2xl">
              Wheat Grass
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuperFoodsPage;
