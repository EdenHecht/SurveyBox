import {
  ADD_PAGE,
  DELETE_PAGE,
  UPDATE_CURR_PAGE,
  UPDATE_PAGE_ORDER,
  UPDATE_PAGE_BACKGROUND,
} from "./pageTypes";

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

export const updatePageBackground = (pageId, updatedColor) => {
  return {
    type: UPDATE_PAGE_BACKGROUND,
    payload: { pageId, updatedColor },
  };
};
