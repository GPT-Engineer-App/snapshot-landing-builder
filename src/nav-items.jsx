import { Heart } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Heart className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "GPT Engineer",
    to: "/gpt-engineer",
    page: <div>GPT Engineer Page</div>,
  },
  {
    title: "Vision",
    to: "/vision",
    page: <div>Vision Page</div>,
  },
  {
    title: "News",
    to: "/news",
    page: <div>News Page</div>,
  },
  {
    title: "Careers",
    to: "/careers",
    page: <div>Careers Page</div>,
  },
];
