import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { SELECTION } from "../../../services/pageConstants";
import TextComponent from "../sub-components/TextComponent";
import {
  updateAnswerText,
  addNewAnswer,
  deleteAnswerOption,
} from "../../../redux/pageActions";
import "./QuestionTextComponent.scss";

function QuestionTextComponent(props: any) {
  const { questionType } = props;
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );
  const currPageAnswersLength = useSelector(
    (state: RootStateOrAny) => currPage.answersText.length
  );
  const dispatch = useDispatch();

  return (
    <>
      {questionType === SELECTION ? (
        <>
          <div className="answer-text edit-feature bottom-margin">
            {currPage.answersText.map((answer: string, index: number) => {
              return (
                <div
                  key={`page-${currPageIndex}-answer-${answer}-${index}`}
                  className="answer-row"
                >
                  <div className="right-margin feature-text">
                    {`Text ${index + 1}`}
                  </div>
                  <input
                    type="text"
                    name="answer-text"
                    className="answer-text-field"
                    placeholder={answer}
                    defaultValue={answer}
                    onChange={(e) =>
                      dispatch(
                        updateAnswerText(currPage.id, index, e.target.value)
                      )
                    }
                  />
                  <button
                    className="delete-answer-btn"
                    onClick={() =>
                      dispatch(deleteAnswerOption(currPage.id, index))
                    }
                  >
                    -
                  </button>
                </div>
              );
            })}
          </div>
          <button
            className="add-answer-text"
            onClick={() => dispatch(addNewAnswer(currPage.id))}
          >
            +
          </button>
        </>
      ) : null}
    </>
  );
}

export default QuestionTextComponent;
