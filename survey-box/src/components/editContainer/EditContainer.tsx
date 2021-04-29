import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import SurveyTimeline from "../left-survey-timeline/SurveyTimeline";
import MainWindow from "../middle/main-window/MainWindow";
import PageEditor from "../right-page-edit/PageEditor";
import { URL } from "../../services/pageConstants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const EditContainer = () => {
  let { id } = useParams();
  const currentSurveyId = useSelector(
    (state: RootStateOrAny) => state.currentSurveyId
  );
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    console.log("id: ", id);
    if (!currentSurveyId) {
      setisLoading(true);
      axios
        .get(`${URL}/survey/${id}`)
        .then((res) => {
          setisLoading(false);

          // load edits + currentSurveyId in store!
        })
        .catch((error) => console.log(error)); //load 404 page
    } else {
      setisLoading(false);
    }
  }, [id]);

  return (
    <div className="App">
      {!isLoading && (
        <>
          <SurveyTimeline />
          <MainWindow />
          <PageEditor />
        </>
      )}
    </div>
  );
};

export default EditContainer;
