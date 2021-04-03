import {
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
} from "./pageTypes";
import buildPage from "../services/PageFactory";

const initialState = {
  pages: [],
  currPageIndex: -1,
};

const pageReducer = (state = initialState, action) => {
  let currPages;
  let pagesCopy;
  let pageIndex;

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

    default:
      return state;
  }
};

export default pageReducer;
