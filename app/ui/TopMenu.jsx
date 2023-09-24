import { HiChevronDown } from "react-icons/hi";

function TopMenu() {
  const menuItems = [
    { label: "Plants", link: "" },
    { label: "Animals", link: "" },
    { label: "Contact", link: "" },
    { label: "Finance", link: "" },
    { label: "Business", link: "" },
    { label: "Facts", link: "" },
    { label: "Prices", link: "" },
    { label: "Agrosphere", link: "" },
    { label: "Renewable", link: "" },
  ];

  return (
    <nav>
      <ul className="flex items-center gap-4">
        {menuItems.map((item) => (
          <li key={item.label} className="flex items-center gap-1">
            <a href={item.link}>{item.label}</a>
            <HiChevronDown size={18} color="green" />
          </li>
        ))}
      </ul>

      <hr className="mt-2" />
    </nav>
  );
}

export default TopMenu;
