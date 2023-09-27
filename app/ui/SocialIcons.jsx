import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <li className="mt-2 flex items-center gap-4 ">
      <a href="" className="transition-all duration-150 hover:text-[#9da452]">
        <FaTwitter size={36} />
      </a>
      <a href="" className="transition-all duration-150 hover:text-[#9da452]">
        <FaInstagram size={36} />
      </a>
      <a href="" className="transition-all duration-150 hover:text-[#9da452]">
        <FaLinkedin size={36} />
      </a>
    </li>
  );
};

export default SocialIcons;
