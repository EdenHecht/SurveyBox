import React from "react";

function HeaderDesignComponent() {
  return (
    <div className="header-style pad border-bottom">
      <div className="section-title">Header Design</div>
      <div className="font-size edit-feature bottom-margin">
        <div className="right-margin feature-text">Font size</div>
        <div className="font-size-display">15</div>
      </div>
      <div className="font-color edit-feature bottom-margin">
        <div className="right-margin feature-text">Color</div>
        <div className="sample"></div>
        <div className="hex-number feature-text"> 000000</div>
      </div>
      <div className="question-text edit-feature bottom-margin">
        <div className="right-margin feature-text">Text</div>
        <input type="text" name="question-text" />
      </div>
    </div>
  );
}

export default HeaderDesignComponent;
