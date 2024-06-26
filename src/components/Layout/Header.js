import {Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from "../../assets/meals.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MoMo Pasal</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Food Background" />
      </div>
    </Fragment>
  );
};

export default Header;