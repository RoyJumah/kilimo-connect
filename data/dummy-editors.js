const DUMMY_EDITORS = [
  {
    id: 1,
    name: "Carrie Kelly",
    image: "/images/avatars/sigmund.jpg",
    role: "Senior Editor Kilimo Connect",
    description:
      "Embracing a Plant-Based Lifestyle: Your Guide to Going Vegan.",
  },
  {
    id: 2,
    name: "Mellissa Raunch",
    image: "/images/avatars/luis.jpg",
    role: "Editor in Chief Kilimo Connect",
    description: "Elevate Your Health: The Power of Nutrient-Dense Eating",
  },
  {
    id: 3,
    name: "James Dylan",
    image: "/images/avatars/alexander.jpg",
    role: "In-house Editor Kilimo Connect",
    description:
      "Farm-to-Table Revolution: The Rise of Local Food Sustainability.",
  },
];

export function getEditors() {
  return DUMMY_EDITORS;
}
