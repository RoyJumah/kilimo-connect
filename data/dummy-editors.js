const DUMMY_EDITORS = [
  {
    id: 1,
    name: "Carrie Kelly",
    image:
      "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/sigmund.jpg?t=2023-11-14T14%3A58%3A53.244Z",
    role: "Senior Editor Kilimo Connect",
    description:
      "Embracing a Plant-Based Lifestyle: Your Guide to Going Vegan.",
  },
  {
    id: 2,
    name: "Mellissa Raunch",
    image:
      "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/luis.jpg?t=2023-11-14T14%3A59%3A04.725Z",
    role: "Editor in Chief Kilimo Connect",
    description: "Elevate Your Health: The Power of Nutrient-Dense Eating",
  },
  {
    id: 3,
    name: "James Dylan",
    image:
      "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/avatars/alexander.jpg?t=2023-11-14T14%3A59%3A17.399Z",
    role: "In-house Editor Kilimo Connect",
    description:
      "Farm-to-Table Revolution: The Rise of Local Food Sustainability.",
  },
];

export function getEditors() {
  return DUMMY_EDITORS;
}
