import {
  ADD_SURVEY,
  ADD_PAGE,
  DELETE_PAGE,
  UPDATE_CURR_PAGE,
  UPDATE_PAGE_ORDER,
  UPDATE_SURVEY_NAME,
  UPDATE_PAGE_NAME,
} from "../pageTypes";
import axios from "axios";

const url = "http://localhost:5000";

export const addSurvey = () => {
  return async (dispatch) => {
    const urlsurevy = `${url}/survey`;
    const survey = {
      surveyName: "Survey Name",
      pages: [],
    };

    const { data } = await axios.post(urlsurevy, survey);

    dispatch({ type: ADD_SURVEY, payload: data });
  };
};

export const addPage = (pageType) => {
  return {
    type: ADD_PAGE,
    payload: pageType,
  };
};

export const deletePage = (pageIndex) => {
  return {
    type: DELETE_PAGE,
    payload: pageIndex,
  };
};

export const updateCurrPage = (pageIndex) => {
  return {
    type: UPDATE_CURR_PAGE,
    payload: pageIndex,
  };
};

export const updatePageOrder = (updatedParams) => {
  return {
    type: UPDATE_PAGE_ORDER,
    payload: updatedParams,
  };
};

export const updateSurveyName = (updatedSurveyName) => {
  return {
    type: UPDATE_SURVEY_NAME,
    payload: updatedSurveyName,
  };
};

export const updatePageName = (pageId, updatedPageName) => {
  return {
    type: UPDATE_PAGE_NAME,
    payload: { pageId, updatedPageName },
  };
};
