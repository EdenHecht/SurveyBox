import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Home.scss";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { addSurvey } from "../../redux/actions/pageActions";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentSurveyId = useSelector(
    (state: RootStateOrAny) => state.currentSurveyId
  );
  useEffect(() => {
    if (currentSurveyId) {
      history.push(`/survey/${currentSurveyId}`);
    }
  }, [currentSurveyId]);

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
