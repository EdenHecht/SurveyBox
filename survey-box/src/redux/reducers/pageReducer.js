import {
  ADD_SURVEY,
  ADD_PAGE,
  DELETE_PAGE,
  UPDATE_CURR_PAGE,
  UPDATE_PAGE_ORDER,
  UPDATE_PAGE_BACKGROUND,
  UPDATE_BUTTON_FONT_SIZE,
  UPDATE_BUTTON_BG_COLOR,
  UPDATE_BUTTON_FONT_COLOR,
  UPDATE_HEADER_COLOR,
  UPDATE_HEADER_SIZE,
  UPDATE_HEADER_TEXT,
  UPDATE_SUBHEADER_COLOR,
  UPDATE_SUBHEADER_SIZE,
  UPDATE_SUBHEADER_TEXT,
  UPDATE_QUESTION_COLOR,
  UPDATE_QUESTION_SIZE,
  UPDATE_QUESTION_TEXT,
  UPDATE_ANSWERS_COLOR,
  UPDATE_ANSWERS_SIZE,
  UPDATE_ANSWERS_TEXT,
  ADD_NEW_ANSWER,
  UPDATE_SURVEY_NAME,
  UPDATE_PAGE_NAME,
  DELETE_PAGE_ANSWER,
} from "../pageTypes";
import { SURVEY_NAME } from "../../services/pageConstants";
import buildPage from "../../services/PageFactory";
import { createNewSurvey, createNewSurveyPage } from "./reducerHelper";
const initialState = {
  pages: [],
  currPageIndex: -1,
  surveyName: SURVEY_NAME,
  currentSurveyId: null,
};

const pageReducer = (state = initialState, action) => {
  let currPages;
  let pagesCopy;
  let pageIndex;

  switch (action.type) {
    case ADD_SURVEY:
      const survey = action.payload;

      return {
        ...state,
        currentSurveyId: survey._id,
      };

    case ADD_PAGE:
      const pageObject = buildPage(action.payload);
      currPages = [...state.pages, pageObject];
      createNewSurveyPage(state.currentSurveyId, currPages);
      return {
        ...state,
        pages: currPages,
      };

    case DELETE_PAGE:
      currPages = [...state.pages];
      const removedIndex = action.payload;
      let updatedCurrPageIndex = state.currPageIndex;

      if (removedIndex <= state.currPageIndex) {
        updatedCurrPageIndex -= 1;
      }

      if (removedIndex === 0) {
        currPages = currPages.slice(1);

        //if the deleted page is the first but not the last page
        if (currPages.length !== 0 && updatedCurrPageIndex === -1)
          updatedCurrPageIndex = 0;
      } else
        currPages = currPages
          .slice(0, removedIndex)
          .concat(currPages.slice(removedIndex + 1));

      return {
        ...state,
        pages: currPages,
        currPageIndex: updatedCurrPageIndex,
      };

    case UPDATE_CURR_PAGE:
      return {
        ...state,
        currPageIndex: action.payload,
      };

    case UPDATE_PAGE_ORDER:
      return {
        ...state,
        currPageIndex: action.payload.updatedPageIndex,
        pages: action.payload.pagesCopy,
      };

    case UPDATE_PAGE_BACKGROUND:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].background = action.payload.updatedColor;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_BUTTON_FONT_SIZE:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].buttonFontSize = action.payload.updatedFontSize;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_BUTTON_BG_COLOR:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].buttonBackground = action.payload.updatedBgColor;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_BUTTON_FONT_COLOR:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].buttonTextColor = action.payload.updatedFontColor;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_HEADER_COLOR:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].headerColor = action.payload.updatedHeaderColor;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_HEADER_SIZE:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].headerFontSize = action.payload.updatedHeaderSize;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_HEADER_TEXT:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].headerText = action.payload.updatedHeaderText;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_SUBHEADER_COLOR:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].subHeaderColor =
        action.payload.updatedSubHeaderColor;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_SUBHEADER_SIZE:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].subHeaderFontSize =
        action.payload.updatedSubHeaderSize;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_SUBHEADER_TEXT:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].subHeaderText = action.payload.updatedSubHeaderText;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_QUESTION_COLOR:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].questionColor = action.payload.updatedQuestionColor;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_QUESTION_SIZE:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].questionFontSize =
        action.payload.updatedQuestionSize;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_QUESTION_TEXT:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].questionText = action.payload.updatedQuestionText;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_ANSWERS_COLOR:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].answersColor = action.payload.updatedAnswersColor;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_ANSWERS_SIZE:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].answersFontSize = action.payload.updatedAnswersSize;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_ANSWERS_TEXT:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].answersText[action.payload.answerIndex] =
        action.payload.updatedAnswer;
      return {
        ...state,
        pages: pagesCopy,
      };

    case ADD_NEW_ANSWER:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      const newAnswerIndex = pagesCopy[pageIndex].answersText.length;
      pagesCopy[pageIndex].answersText[newAnswerIndex] = `Option ${
        newAnswerIndex + 1
      }`;
      return {
        ...state,
        pages: pagesCopy,
      };

    case UPDATE_SURVEY_NAME:
      return {
        ...state,
        surveyName: action.payload,
      };

    case UPDATE_PAGE_NAME:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      pagesCopy[pageIndex].pageName = action.payload.updatedPageName;
      return {
        ...state,
        pages: pagesCopy,
      };

    case DELETE_PAGE_ANSWER:
      pagesCopy = [...state.pages];
      pageIndex = pagesCopy
        .map((page) => page.id)
        .indexOf(action.payload.pageId);
      const deleteIndex = action.payload.answerIndex;
      pagesCopy[pageIndex].answersText.splice(deleteIndex, 1);
      return {
        ...state,
        pages: pagesCopy,
      };

    default:
      return state;
  }
};

export default pageReducer;
