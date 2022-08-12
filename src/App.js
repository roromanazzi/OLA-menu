import "./App.css";
import sideImgSrc from "./img/langostinos.jpg";
import mainImgSrc from "./img/ñoquis.jpg";
import frontPageImgSrc from "./img/olaPortada.png";
import footerImgSrc from "./img/olafooter.png";

import { menuSections } from "./placeholder/menuItems";

function FrontPageImg(props) {
  return <img src={frontPageImgSrc} className="frontPageImg" alt="foto de portada"></img>;
}

function MainImg(props) {
  return <img src={mainImgSrc} className="mainImg" alt="segunda foto"></img>;
}

function SideImg(props) {
  return <img src={sideImgSrc} className="sideImg" alt="foto al costado"></img>;
}

function MenuSection(props) {
  return <section className="menuSection">{props.children}</section>;
}
function MenuSectionTitle(props) {
  return <h1 className="menuSectionTitle">// {props.children}</h1>;
}
function MenuSectionDescription(props) {
  if (props.children) {
    return <div className="menuSectionDescription">{props.children}</div>;
  } else {
    return null;
  }
}

function MenuSectionDishes(props) {
  return <div className="menuSectionDishes">{props.children}</div>;
}

function Dish(props) {
  return <div className="dish">{props.children}</div>;
}

function DishHeader(props) {
  return <div className="dishHeader">{props.children}</div>;
}

function DishTitle(props) {
  return <h2 className="dishTitle">{props.children}</h2>;
}

function DishPortion(props) {
  if (props.children) {
    return <div className="dishPortion">x{props.children}</div>;
  } else {
    return null;
  }
}

function DishPrice(props) {
  return <div className="dishPrice">${props.children}</div>;
}

function DishDescription(props) {
  return <div className="dishDescription">{props.children}</div>;
}

function App() {
  return (
    <div className="App">
      <FrontPageImg></FrontPageImg>
      <MainImg></MainImg>
      <div className="page">
        <div className="sections">
          {menuSections.map((section) => {
            return (
              <MenuSection key={section.title}>
                <MenuSectionTitle>{section.title}</MenuSectionTitle>
                <MenuSectionDescription>{section?.description}</MenuSectionDescription>
                <MenuSectionDishes>
                  {section.dishes.map((dish) => {
                    return (
                      <Dish key={dish.title}>
                        <DishHeader>
                          <DishTitle>{dish.title}</DishTitle>
                          <DishPortion>{dish?.portion}</DishPortion>
                          <DishPrice>{dish.price}</DishPrice>
                        </DishHeader>
                        <DishDescription>{dish?.description}</DishDescription>
                      </Dish>
                    );
                  })}
                </MenuSectionDishes>
              </MenuSection>
            );
          })}
          <MenuSection>
            <footer>
              <img src={footerImgSrc} alt="logo de Ola" className="footerImg"></img>
            </footer>
            <footer>Coded by Rocío Romanazzi</footer>
          </MenuSection>
        </div>
        <div className="sideImgContainer">
          <SideImg></SideImg>
        </div>
      </div>
    </div>
  );
}

export default App;
