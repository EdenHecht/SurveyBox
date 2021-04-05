import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import "./PageEditor.css";
import StatmentStyleOptions from "./statment-components/StatmentStyleOptions";
import QuestionStyleOptions from "./question-components/QuestionStyleOptions";
import ButtonComponent from "./ButtonComponent";
import PageBgComponent from "./PageBgComponent";
import { GOODBYE_PAGE } from "../../services/pageConstants";
import { updatePageName } from "../../redux/pageActions";

function PageEditor() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );
  const currPageName = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex].pageName : null
  );
  const [togglePageName, setTogglePageName] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="page-editor-container">
      {!togglePageName ? (
        <div
          className={`question-name-example ${
            currPageName ? "border-bottom" : ""
          }`}
          onDoubleClick={() => setTogglePageName(true)}
        >
          {currPageName}
        </div>
      ) : currPageName ? (
        <input
          className="question-name-example border-bottom page-name-input"
          type="text"
          value={currPageName}
          onChange={(e) =>
            dispatch(updatePageName(currPage.id, e.target.value))
          }
          onBlur={() => setTogglePageName(false)}
          autoFocus
        ></input>
      ) : null}
      {currPage !== null && (
        <>
          <PageBgComponent />
          {currPage.questionType !== undefined ? (
            <QuestionStyleOptions />
          ) : (
            <StatmentStyleOptions />
          )}
          {currPage.pageType !== GOODBYE_PAGE && <ButtonComponent />}
        </>
      )}
    </div>
  );
}

export default PageEditor;
