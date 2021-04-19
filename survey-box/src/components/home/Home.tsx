import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Home.scss";
import { useDispatch } from "react-redux";
import { addSurvey } from "../../redux/actions/pageActions";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="home-container">
      <div className="toolbar">
        <div className="logo">SURVEYBOX</div>
        <div className="right-section">
          <div className="greet"> Hello, User</div>
          <div className="search-box">
            <input
              className="search-input"
              type="text"
              placeholder="Search survey"
            />
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
          </div>
        </div>
      </div>
      <div className="new-survey">
        <button className="add-btn" onClick={() => dispatch(addSurvey())}>
          +
        </button>
      </div>
    </div>
  );
};

export default Home;
