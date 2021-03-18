import { ADD_PAGE } from "./pageTypes";

export const addPage = (pageType) => {
  return {
    type: ADD_PAGE,
    payload: pageType,
  };
};
