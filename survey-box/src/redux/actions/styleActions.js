import {
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
  DELETE_PAGE_ANSWER,
} from "../pageTypes";

export const updatePageBackground = (pageId, updatedColor) => {
  return {
    type: UPDATE_PAGE_BACKGROUND,
    payload: { pageId, updatedColor },
  };
};

export const updateButtonFontSize = (pageId, updatedFontSize) => {
  return {
    type: UPDATE_BUTTON_FONT_SIZE,
    payload: { pageId, updatedFontSize },
  };
};
export const updateButtonBgColor = (pageId, updatedBgColor) => {
  return {
    type: UPDATE_BUTTON_BG_COLOR,
    payload: { pageId, updatedBgColor },
  };
};

export const updateButtonFontColor = (pageId, updatedFontColor) => {
  return {
    type: UPDATE_BUTTON_FONT_COLOR,
    payload: { pageId, updatedFontColor },
  };
};

export const updateHeaderColor = (pageId, updatedHeaderColor) => {
  return {
    type: UPDATE_HEADER_COLOR,
    payload: { pageId, updatedHeaderColor },
  };
};

export const updateHeaderFontSize = (pageId, updatedHeaderSize) => {
  return {
    type: UPDATE_HEADER_SIZE,
    payload: { pageId, updatedHeaderSize },
  };
};

export const updateHeaderText = (pageId, updatedHeaderText) => {
  return {
    type: UPDATE_HEADER_TEXT,
    payload: { pageId, updatedHeaderText },
  };
};

export const updateSubHeaderColor = (pageId, updatedSubHeaderColor) => {
  return {
    type: UPDATE_SUBHEADER_COLOR,
    payload: { pageId, updatedSubHeaderColor },
  };
};

export const updateSubHeaderSize = (pageId, updatedSubHeaderSize) => {
  return {
    type: UPDATE_SUBHEADER_SIZE,
    payload: { pageId, updatedSubHeaderSize },
  };
};

export const updateSubHeaderText = (pageId, updatedSubHeaderText) => {
  return {
    type: UPDATE_SUBHEADER_TEXT,
    payload: { pageId, updatedSubHeaderText },
  };
};

export const updateQuestionColor = (pageId, updatedQuestionColor) => {
  return {
    type: UPDATE_QUESTION_COLOR,
    payload: { pageId, updatedQuestionColor },
  };
};

export const updateQuestionSize = (pageId, updatedQuestionSize) => {
  return {
    type: UPDATE_QUESTION_SIZE,
    payload: { pageId, updatedQuestionSize },
  };
};

export const updateQuestionText = (pageId, updatedQuestionText) => {
  return {
    type: UPDATE_QUESTION_TEXT,
    payload: { pageId, updatedQuestionText },
  };
};

export const updateAnswersColor = (pageId, updatedAnswersColor) => {
  return {
    type: UPDATE_ANSWERS_COLOR,
    payload: { pageId, updatedAnswersColor },
  };
};

export const updateAnswersSize = (pageId, updatedAnswersSize) => {
  return {
    type: UPDATE_ANSWERS_SIZE,
    payload: { pageId, updatedAnswersSize },
  };
};

export const updateAnswerText = (pageId, answerIndex, updatedAnswer) => {
  return {
    type: UPDATE_ANSWERS_TEXT,
    payload: { pageId, answerIndex, updatedAnswer },
  };
};

export const addNewAnswer = (pageId) => {
  return {
    type: ADD_NEW_ANSWER,
    payload: { pageId },
  };
};

export const deleteAnswerOption = (pageId, answerIndex) => {
  return {
    type: DELETE_PAGE_ANSWER,
    payload: { pageId, answerIndex },
  };
};
