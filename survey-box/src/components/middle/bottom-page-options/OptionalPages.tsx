import "./OptionalPages.css";
import React, { useState } from "react";
import OptionsComponent from "./OptionsComponent"

function OptionalPages() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="optional-pages-container">
      <button onClick={() => setIsOpen(!isOpen)} className={`circ-btn ${isOpen ? "circ-btn-open" : "circ-btn-close"}`} >

      </button>
      {isOpen && <OptionsComponent/>}
    </div>
  );
}

export default OptionalPages;
