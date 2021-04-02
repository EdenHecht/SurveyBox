import React from "react";

function SubHeaderDesignComponent() {
  return (
    <div className="sub-header-style pad border-bottom">
      <div className="section-title">Sub Header Design</div>
      <div className="font-size edit-feature bottom-margin">
        <div className="right-margin feature-text">Font size</div>
        <div className="font-size-display">15</div>
      </div>
      <div className="font-color edit-feature bottom-margin">
        <div className="right-margin feature-text">Color</div>
        <div className="sample"></div>
        <div className="hex-number feature-text"> 000000</div>
      </div>
      <div className="answer-text edit-feature bottom-margin">
        <div className="right-margin feature-text">Text 1</div>
        <input type="text" name="answer-text" className="answer-text-field" />
      </div>
    </div>
  );
}

export default SubHeaderDesignComponent;
