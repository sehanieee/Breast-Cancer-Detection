import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

interface NavigationBarProps {
  className?: string;
}

const NavigationBar = ({ className }: NavigationBarProps) => {
  return (
    <nav
      className={cn(
        "w-full bg-white shadow-md px-4 py-3 flex items-center justify-between",
        "bg-gradient-to-r from-pink-100 to-pink-50",
        className,
      )}
    >
      <div className="flex items-center">
        <Link
          to="/"
          className="text-xl font-semibold text-pink-700 hover:text-pink-800 transition-colors"
        >
          HerHealth
        </Link>
      </div>
      <div className="flex items-center space-x-6 overflow-x-auto">
        <Link
          to="/"
          className="text-pink-600 hover:text-pink-800 transition-colors whitespace-nowrap"
        >
          Home
        </Link>
        <Link
          to="/input"
          className="text-pink-600 hover:text-pink-800 transition-colors whitespace-nowrap"
        >
          Diagnosis
        </Link>
        <Link
          to="/results"
          className="text-pink-600 hover:text-pink-800 transition-colors whitespace-nowrap"
        >
          Results
        </Link>
        <Link
          to="/#news"
          className="text-pink-600 hover:text-pink-800 transition-colors whitespace-nowrap"
        >
          Recent News & Research
        </Link>
        <Link
          to="/#awareness"
          className="text-pink-600 hover:text-pink-800 transition-colors whitespace-nowrap"
        >
          Breast Cancer Awareness
        </Link>
        <Link
          to="/#resources"
          className="text-pink-600 hover:text-pink-800 transition-colors whitespace-nowrap"
        >
          Helpful Resources
        </Link>
        <Link
          to="/#contact"
          className="text-pink-600 hover:text-pink-800 transition-colors whitespace-nowrap"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
