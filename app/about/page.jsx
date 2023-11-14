"use client";
import YouTube from "react-youtube";

export default function page() {
  //I got this from geekforgeeks and it enables the autoplay feature of the youtube video
  const opts = {
    height: "250em", // 16:9 aspect ratio (9 / 16 * 100)
    width: "70%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-2 p-6 sm:gap-4">
      <div>
        <h2 className="mb-3 text-xl font-medium">Shared Earth</h2>
        <p className="text-sm sm:text-base">
          Rainforest Foods has a philosophy we call shared earth. We believe
          that we all share a responsibility to protect the earth and to improve
          the lives of those who need a helping hand.
        </p>
      </div>
      <div>
        <h2 className="mb-3 text-lg font-medium sm:text-xl">About us</h2>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <p>
            Rainforest Foods was founded in 2008 to source high quality
            superfoods from environmentally conscious and ethical suppliers. In
            the last eight years our business has grown and evolved, however
            this original goal still guides what we do.
          </p>
          <p>
            We are dedicated to serving our customers and our farmers, but also
            Nature itself. We do this by working with various charitable,
            environmental and humanitarian projects.
          </p>
          <p>
            We believe in giving back and donate 10% of company profits to
            charity. This includes charities such as Rainforest Concern and
            other charities focused on environmental and social issues.
          </p>
          <p>
            Find out more about the good work of Rainforest Concern and Warka
            Water below, and find out how you could get involved too.
          </p>
        </div>
      </div>
      <div className="">
        <YouTube videoId="jDwcbn99Uz8" opts={opts} />
      </div>
      <div>
        <h2 className="mb-3 text-xl font-medium">Rainforest Concern</h2>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <p>
            Rainforest Concern is a charity that works to protect threatened
            natural habitats, the biodiversity they contain and the indigenous
            people who still depend on them for survival.
          </p>
          <p>
            Rainforest Concern was founded in 1993 to protect threatened natural
            habitats, the biodiversity they contain and the indigenous people
            who still depend on them for survival. Rainforest Concern is a UK
            registered charity, and has been granted Special Consultative Status
            by the Economic and Social Council of the United Nations.
          </p>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-xl font-medium">Warka Water</h2>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <p>
            Warka Water is an organisation that aims to provide clean drinking
            water to rural communities in Ethiopia. They do this by building
            Warka Towers, which are 30 foot tall bamboo structures that harvest
            water from the air.
          </p>
          <p>Find out more about our work with Warka Water</p>
        </div>
      </div>
    </div>
  );
}
