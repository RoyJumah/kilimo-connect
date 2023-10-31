import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import TopMenu from "../ui/TopMenu";

export default function HoverCardComponent() {
  return (
    <HoverCard>
      {/* used the hover component from shadcn ui to display the menu indicating no items are in the cart */}

      <HoverCardTrigger>
        <TopMenu />
      </HoverCardTrigger>
      <HoverCardContent className="text-xs">
        No products in the cart
      </HoverCardContent>
    </HoverCard>
  );
}
