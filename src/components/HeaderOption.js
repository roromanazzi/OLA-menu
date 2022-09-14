import "./HeaderOption.css";
import "../placeholder/menuItems.js";
import { menuSections } from "../placeholder/menuItems.js";

function HeaderOption() {
  return menuSections.map((section) => {
    return (
      <div className="headerContainer">
        <button key={section.title} className="menuItemsButton">
          <a href={`#${section.id}`} className="menuItemsATag">
            {section.title}
          </a>
        </button>
      </div>
    );
  });
}

export default HeaderOption;
