import "./HeaderOption.css";
import "../placeholder/menuItems.js";
import { menuSections } from "../placeholder/menuItems.js";

function HeaderOption() {
  return menuSections.map((section) => {
    return (
      <button key={section.title} className="menuItemsButton">
        <a href={`#${section.id}`} className="menuItemsATag">
          {section.title}
        </a>
      </button>
    );
  });
}

export default HeaderOption;
