import { ADD_PAGE, DELETE_PAGE, UPDATE_CURR_PAGE } from "./pageTypes";

const initialState = {
  pages: [],
  currPageIndex: -1,
};

const pageReducer = (state = initialState, action) => {
  let currPages;

  switch (action.type) {
    case ADD_PAGE:
      const newPage = { page_type: action.payload };
      currPages = [...state.pages, newPage];

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

      removedIndex === 0
        ? (currPages = currPages.slice(1))
        : (currPages = currPages
            .slice(0, removedIndex)
            .concat(currPages.slice(removedIndex + 1)));

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
    default:
      return state;
  }
};

export default pageReducer;
