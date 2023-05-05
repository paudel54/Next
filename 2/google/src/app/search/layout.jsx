import "./../globals.css";
import { Changa_One, Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import SearchHeader from "@/components/SearchHeader";
// functional component of next, children refers to page.jsx;
// On creating next layout
// it should be rendered on div multiple html rendering creates a hydrtion error.
export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
