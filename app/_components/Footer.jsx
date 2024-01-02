import Logo from "../_ui/Logo";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  const topMargin =
    "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/footer-photos/bg-top.png?t=2023-11-16T16%3A23%3A08.785Z";
  const images = [
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-01.jpeg?t=2023-11-14T14%3A47%3A49.591Z",
    },
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-02.jpeg?t=2023-11-14T14%3A48%3A02.368Z",
    },
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-03.jpeg",
    },
    {
      url: "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/gallery/image-04.jpeg?t=2023-11-14T14%3A48%3A29.819Z",
    },
  ];
  return (
    <footer className="text-footer ">
      {/* <Image
        className="absolute top-10 w-full bg-black brightness-75 filter" // Adjust the brightness value as needed
        alt="bg-parallax-2"
        height={26}
        width={1000}
        layout="responsive"
        src="https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/footer-photos/bg-top.png?t=2023-11-16T16%3A23%3A08.785Z"
      /> */}

      <div className="bg-[#2b2a28] text-[16px] sm:mt-8 sm:block sm:px-6 md:mt-12">
        <div className=" mx-auto grid max-w-6xl grid-cols-1 gap-4 p-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-12">
          <ul className="mb-8 w-full sm:mb-0 ">
            <Logo />
            <p className="gap-2 border-b border-b-footer sm:gap-4 md:pb-6">
              Herber is an organic farm located in California. We offer healthy
              foods and products to our clients.
            </p>
            <ul className="mt-2 flex flex-col gap-4 sm:mt-4 md:mt-6">
              <li className="flex items-center gap-4">
                <span>
                  <FaPhoneAlt />
                </span>
                <p className="font-semibold text-white">+ 1 234-456-7891</p>
              </li>
              <li className="flex items-center gap-4">
                <span>
                  <FaRegClock />
                </span>
                <p className="font-semibold text-white">
                  Mon-Sat: 07:00AM - 05:00PM
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span>
                  <FaLocationArrow />
                </span>
                <p className="font-semibold text-white">
                  123 Main St, New York
                </p>
              </li>
            </ul>
          </ul>
          <div className="w-full">
            <h3 className="py-2 text-lg font-[200] text-white">Newsletter</h3>
            <p>Join our email newsletter for news and tips.</p>
            <form className="mt-[25px]">
              <input
                type="text"
                placeholder="Enter your E-mail"
                className="mt-2 w-full border-none bg-textInput px-4 py-2 text-center capitalize text-white focus:outline-none"
              />
              <button
                type="submit"
                className=" mt-2 w-full  bg-[#fff] px-4 py-2 text-center font-semibold uppercase tracking-wide text-black transition-all duration-300 ease-in-out hover:bg-[#eda407] hover:text-white "
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex items-center gap-4 text-white">
              <p className="text-base">Follow Us</p>
              <div className="flex items-center gap-2">
                <span>
                  <TiSocialFacebook
                    size={16}
                    className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#eda407]"
                  />
                </span>
                <span>
                  <FaTwitter
                    size={16}
                    className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#eda407]"
                  />
                </span>
                <span>
                  <FaTiktok
                    size={16}
                    className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#eda407]"
                  />
                </span>
                <span>
                  <FaInstagram
                    size={16}
                    className="cursor-pointer transition-all duration-300 ease-in-out hover:text-[#eda407]"
                  />
                </span>
              </div>
            </div>
          </div>

          <ul className="w-full">
            <h2 className="mb-2 text-center text-lg text-white sm:mb-4 md:mb-6">
              Gallery
            </h2>
            <div className="flex flex-wrap justify-end gap-2 ">
              {images.map((image, i) => (
                <Image
                  src={image.url}
                  width={129}
                  height={120}
                  key={i}
                  alt="product image"
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
      <div className="  w-full  bg-[#222120]">
        <div className="mx-auto flex max-w-6xl  items-center justify-between gap-2 p-6">
          <p>© 2023 Kilimo-Connect. All rights reserved.</p>
          <p>
            Designed with{" "}
            <span className="text-orangered inline-block">❤</span> by Roy.
          </p>
        </div>
      </div>
    </footer>
  );
}
