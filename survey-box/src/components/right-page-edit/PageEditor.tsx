import React from "react";
import "./PageEditor.css";

function PageEditor() {
  return (
    <div className="page-editor-container">
      <div className="question-name-example border-bottom">Question name</div>
      <div className="page-style pad border-bottom">
        <div className="section-title">Background</div>
        <div className="background edit-feature">
          <div className="sample"></div>
          <div className="hex-number feature-text"> 000000</div>
        </div>
      </div>
      <div className="question-style pad border-bottom">
        <div className="section-title">Question Design</div>
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
      <div className="answer-style pad border-bottom">
        <div className="section-title">Answer Design</div>
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
          <input type="text" name="answer-text" className="answer-text-field"/>
        </div>
        <button className="add-answer-text">+</button>
      </div>
      <div className="button-style pad border-bottom">
        <div className="section-title">Button Design</div>
        <div className="font-size edit-feature bottom-margin">
          <div className="right-margin feature-text">Font size</div>
          <div className="font-size-display">15</div>
        </div>
        <div className="font-color edit-feature bottom-margin">
          <div className="right-margin feature-text">Color</div>
          <div className="sample"></div>
          <div className="hex-number feature-text"> 000000</div>
        </div>
        <div className="background-color edit-feature bottom-margin">
          <div className="right-margin feature-text">Background</div>
          <div className="sample"></div>
          <div className="hex-number feature-text"> 000000</div>
        </div>
      </div>
    </div>
  );
}

export default PageEditor;
