import React from "react";
import "./SurveyTimeline.css";

function SurveyTimeline() {
  return (
    <div className="timeline-container">
      <div className="survey-name">Survey name</div>
      <div className="page-example">
        <div className="page-number">1</div>
        <div className="page-preview">
          <div className="preview"></div>
          <div className="page-type">Multiple choise</div>
        </div>
      </div>
    </div>
  );
}

export default SurveyTimeline;
