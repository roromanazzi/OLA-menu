import "./App.css";
import sideImgSrc from "./img/langostinos.jpg";
import LogoOlaImgSrc from "./img/olafooter.png";
import mainImgSrc from "./img/salonLele2.jpg";
import { menuSections } from "./placeholder/menuItems";
import HeaderOption from "./components/HeaderOption";

function LogoOla() {
  return <img src={LogoOlaImgSrc} className="logoOla" alt="logoOla"></img>;
}

function MainImg() {
  return <img src={mainImgSrc} className="mainImg" alt=""></img>;
}

function SideImg() {
  return <img src={sideImgSrc} className="sideImg" alt="foto al costado"></img>;
}

function MenuSection(props) {
  return (
    <section className="menuSection" id={props.id}>
      {props.children}
    </section>
  );
}
function MenuSectionTitle(props) {
  // eslint-disable-next-line react/jsx-no-comment-textnodes
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
      <div className="page">
        <div className="headerContainer"></div>
        <div className="headerImgTitleContainer" id="App">
          <MainImg></MainImg>
          <h2 className="mainTitle">KITCHEN</h2>
        </div>
        <div className="bodyContainer">
          <div className="header">
            <a href="#App">
              <LogoOla id="logoOlaHeader"></LogoOla>
            </a>
            <HeaderOption></HeaderOption>
          </div>
          <div className="dishesAndSideImg">
            <div className="sections">
              {menuSections.map((section) => {
                return (
                  <MenuSection key={section.title} id={section.id}>
                    <MenuSectionTitle>{section.title}</MenuSectionTitle>
                    <MenuSectionDescription>
                      {section?.description}
                    </MenuSectionDescription>
                    <MenuSectionDishes>
                      {section.dishes.map((dish) => {
                        return (
                          <Dish key={dish.title}>
                            <DishHeader>
                              <DishTitle>{dish.title}</DishTitle>
                              <DishPortion>{dish?.portion}</DishPortion>
                              <DishPrice>{dish.price}</DishPrice>
                            </DishHeader>
                            <DishDescription>
                              {dish?.description}
                            </DishDescription>
                          </Dish>
                        );
                      })}
                    </MenuSectionDishes>
                  </MenuSection>
                );
              })}
              <MenuSection>
                <footer>
                  <LogoOla></LogoOla>
                </footer>
                <footer>Coded by Roc??o Romanazzi</footer>
              </MenuSection>
            </div>
            <div className="sideImgContainer">
              <SideImg></SideImg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
