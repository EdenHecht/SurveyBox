import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import {
  ONE_CHOICE_PAGE,
  MULTI_CHOICE_PAGE,
  TEXT_AREA_PAGE,
  TEXT_FIELD_PAGE,
} from "../../../services/pageConstants";
import "./QuestionTypePreview.scss";

function QuestionTypePreview(props: any) {
  const { pageType } = props;
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const pages = useSelector((state: RootStateOrAny) => state.pages);
  const currPage = currPageIndex !== -1 ? pages[currPageIndex] : null;

  const currPageAnswers =
    pages.length !== 0 && currPageIndex !== -1 ? currPage.answersText : null;

  const [answerStyle, setAnswerStyle] = useState({});
  const [textAnswerPreview, setTextAnswerPreview] = useState(
    currPageAnswers[0]
  );

  useEffect(() => {
    if (currPage === null) return;

    setAnswerStyle({
      fontSize: currPage.answersFontSize,
      color: currPage.answersColor,
    });
  }, [pages, currPage, currPageIndex]);

  useEffect(() => {
    if (currPageAnswers) {
      setTextAnswerPreview(currPageAnswers[0]);
    }
  }, [currPageIndex, currPage]);

  const renderQuestionType = () => {
    switch (pageType) {
      case ONE_CHOICE_PAGE:
        return currPageAnswers ? (
          <div className="answer-grid">
            {currPageAnswers.map((answer: string, index: number) => {
              return (
                <label
                  className="preview-answer"
                  key={`page-${currPageIndex}-answer-preview-${index}`}
                  style={answerStyle}
                  htmlFor=""
                >
                  <input
                    type="radio"
                    className="answer-check-option"
                    value={answer}
                    name="answer"
                  />
                  {answer}
                </label>
              );
            })}
          </div>
        ) : null;

      case MULTI_CHOICE_PAGE:
        return currPageAnswers ? (
          <div className="answer-grid">
            {currPageAnswers.map((answer: string, index: number) => {
              return (
                <label
                  className="preview-answer"
                  key={`page-${currPageIndex}-answer-preview-${index}`}
                  style={answerStyle}
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    className="answer-check-option"
                    value={answer}
                    name="answer"
                  />
                  {answer}
                </label>
              );
            })}
          </div>
        ) : null;

      case TEXT_AREA_PAGE:
        return (
          <input
            type="textarea"
            name="textarea"
            className="text-area-preview text-preview"
            style={answerStyle}
            value={textAnswerPreview}
            onChange={(e) => setTextAnswerPreview(e.target.value)}
            disabled
          />
        );

      case TEXT_FIELD_PAGE:
        return (
          <input
            type="text"
            className="text-field-preview text-preview"
            style={answerStyle}
            value={textAnswerPreview}
            onChange={(e) => setTextAnswerPreview(e.target.value)}
            disabled
          />
        );
      default:
        return;
    }
  };

  return <div className="answer-container">{renderQuestionType()}</div>;
}

export default QuestionTypePreview;
