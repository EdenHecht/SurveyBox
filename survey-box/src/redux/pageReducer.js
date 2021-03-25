import {
  ADD_PAGE,
  DELETE_PAGE,
  UPDATE_CURR_PAGE,
  UPDATE_PAGE_ORDER,
  UPDATE_PAGE_BACKGROUND,
} from "./pageTypes";
import buildPage from "../services/PageFactory";

const initialState = {
  pages: [],
  currPageIndex: -1,
};

const pageReducer = (state = initialState, action) => {
  let currPages;

  switch (action.type) {
    case ADD_PAGE:
      const pageObject = buildPage(action.payload);

      currPages = [...state.pages, pageObject];

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
      let pagesCopy = [...state.pages];
      pagesCopy[action.payload.pageId].background = action.payload.updatedColor;
      return {
        ...state,
        pages: pagesCopy,
      };

    default:
      return state;
  }
};

export default pageReducer;
