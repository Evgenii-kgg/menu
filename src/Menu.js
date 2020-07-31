import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function Menu() {
  const activeStyle = { color: "red" };

  return (
    <nav class="menu">
      <NavLink class="menu__item" to="/" activeStyle={activeStyle}>
        Главная
      </NavLink>
      <NavLink class="menu__item" to="/drift" activeStyle={activeStyle}>
        Дрифт-такси
      </NavLink>
      <NavLink class="menu__item" to="/timeattack" activeStyle={activeStyle}>
        Time Attack
      </NavLink>
      <NavLink class="menu__item" to="/forza" activeStyle={activeStyle}>
        Forza Karting
      </NavLink>
    </nav>
  );
}

export default Menu;
