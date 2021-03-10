import React from "react";
import "./PageEditor.css";

function PageEditor() {
  return (
    <div className="page-editor-container">
      <div className="question-name-example">Question name</div>
      <div className="page-style">
        <div className="title">Background</div>
        <div className="background">
          <div className="sample"></div>
          <div className="rgb-number"> 000000</div>
        </div>
      </div>
    </div>
  );
}

export default PageEditor;
