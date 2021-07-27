import { Fragment } from "react";

//Create React App --> Supports Importing Images Alsooo
import mealsImage from "../../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>CrispyCorner</h1>
        <HeaderCartButton onShowCartHeader={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!"/>
      </div>
    </Fragment>
  );
};

export default Header;