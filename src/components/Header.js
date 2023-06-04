import React from "react";
import { useState } from "react";

function Header({onDarkModeClick}) {
    const [isDarkMode] = useState(false);
    const mode = isDarkMode ? "Dark" : "Light"
 
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {mode} Mode
      </button>
    </header>
  );
}

export default Header;
