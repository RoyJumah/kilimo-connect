import React from "react";

function SubMenu() {
  const menuItems = [
    { label: "KilimoConnect", link: "" },
    { label: "Animals", link: "" },
    { label: "Contact", link: "" },
    { label: "Finance & Law", link: "" },
    { label: "Business", link: "" },
    { label: "Facts", link: "" },
  ];
  return (
    <nav className="mt-2">
      <ul className="flex items-center gap-6">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SubMenu;
