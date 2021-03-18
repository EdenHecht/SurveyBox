import { ADD_PAGE } from "./pageTypes";

const initialState = {
  pages: [],
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAGE:
      const newPage = { page_type: action.payload };
      let currPages = [...state.pages, newPage];

      return {
        ...state,
        pages: currPages,
      };

    default:
      return state;
  }
};

export default pageReducer;
