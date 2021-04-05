import React, { useCallback, useEffect, useState } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import "./SurveyTimeline.scss";
import {
  deletePage,
  updateCurrPage,
  updatePageOrder,
  updateSurveyName,
} from "../../redux/pageActions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function SurveyTimeline() {
  const pages = useSelector((state: RootStateOrAny) => state.pages);
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );

  const surveyName = useSelector((state: RootStateOrAny) => state.surveyName);
  const dispatch = useDispatch();
  const [toggleSurveyName, setToggleSurveyName] = useState(false);

  //check if can delete this
  useEffect(() => {
    pages.length === 1 && dispatch(updateCurrPage(0));
  }, [pages, dispatch]);

  const onDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;
      const pagesCopy: Array<any> = Array.from(pages);
      const currPageId = pagesCopy[currPageIndex].id;
      const [reorderedPages] = pagesCopy.splice(result.source.index, 1);
      pagesCopy.splice(result.destination.index, 0, reorderedPages);
      const updatedPageIndex = pagesCopy.findIndex(
        (page) => page.id === currPageId
      );
      dispatch(updatePageOrder({ pagesCopy, updatedPageIndex }));
    },
    [pages, dispatch, currPageIndex]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="timeline-container">
        {!toggleSurveyName ? (
          <div
            className="survey-name"
            onDoubleClick={() => setToggleSurveyName(true)}
          >
            {surveyName}
          </div>
        ) : (
          <input
            className="survey-name survey-name-input"
            type="text"
            value={surveyName}
            onChange={(e) => dispatch(updateSurveyName(e.target.value))}
            onBlur={() => setToggleSurveyName(false)}
            autoFocus
          ></input>
        )}
        <Droppable droppableId="timeline">
          {(provided) => (
            <div
              className="page-example"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {pages.length !== 0 &&
                pages.map((page: any, index: number) => (
                  <Draggable
                    key={`timeline-page-${index}`}
                    draggableId={`timeline-page-${index}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="single-page-container"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="page-number">{index + 1}</div>
                        <div className="page-preview">
                          <div
                            className={`preview ${
                              currPageIndex === index && "curr-page"
                            }`}
                            onClick={() => dispatch(updateCurrPage(index))}
                          >
                            <svg
                              className="trash-icon"
                              onClick={(e) => {
                                e.stopPropagation(); // to prevent parent dispatch
                                dispatch(deletePage(index));
                              }}
                              width="20"
                              height="20"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="trash-path"
                                d="M5.5 5.5C5.63261 5.5 5.75979 5.55268 5.85355 5.64645C5.94732 5.74021 6 5.86739 6 6V12C6 12.1326 5.94732 12.2598 5.85355 12.3536C5.75979 12.4473 5.63261 12.5 5.5 12.5C5.36739 12.5 5.24021 12.4473 5.14645 12.3536C5.05268 12.2598 5 12.1326 5 12V6C5 5.86739 5.05268 5.74021 5.14645 5.64645C5.24021 5.55268 5.36739 5.5 5.5 5.5V5.5ZM8 5.5C8.13261 5.5 8.25979 5.55268 8.35355 5.64645C8.44732 5.74021 8.5 5.86739 8.5 6V12C8.5 12.1326 8.44732 12.2598 8.35355 12.3536C8.25979 12.4473 8.13261 12.5 8 12.5C7.86739 12.5 7.74021 12.4473 7.64645 12.3536C7.55268 12.2598 7.5 12.1326 7.5 12V6C7.5 5.86739 7.55268 5.74021 7.64645 5.64645C7.74021 5.55268 7.86739 5.5 8 5.5V5.5ZM11 6C11 5.86739 10.9473 5.74021 10.8536 5.64645C10.7598 5.55268 10.6326 5.5 10.5 5.5C10.3674 5.5 10.2402 5.55268 10.1464 5.64645C10.0527 5.74021 10 5.86739 10 6V12C10 12.1326 10.0527 12.2598 10.1464 12.3536C10.2402 12.4473 10.3674 12.5 10.5 12.5C10.6326 12.5 10.7598 12.4473 10.8536 12.3536C10.9473 12.2598 11 12.1326 11 12V6Z"
                                fill="black"
                              />
                              <path
                                className="trash-path"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 3C14.5 3.26522 14.3946 3.51957 14.2071 3.70711C14.0196 3.89464 13.7652 4 13.5 4H13V13C13 13.5304 12.7893 14.0391 12.4142 14.4142C12.0391 14.7893 11.5304 15 11 15H5C4.46957 15 3.96086 14.7893 3.58579 14.4142C3.21071 14.0391 3 13.5304 3 13V4H2.5C2.23478 4 1.98043 3.89464 1.79289 3.70711C1.60536 3.51957 1.5 3.26522 1.5 3V2C1.5 1.73478 1.60536 1.48043 1.79289 1.29289C1.98043 1.10536 2.23478 1 2.5 1H6C6 0.734784 6.10536 0.48043 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0L9 0C9.26522 0 9.51957 0.105357 9.70711 0.292893C9.89464 0.48043 10 0.734784 10 1H13.5C13.7652 1 14.0196 1.10536 14.2071 1.29289C14.3946 1.48043 14.5 1.73478 14.5 2V3ZM4.118 4L4 4.059V13C4 13.2652 4.10536 13.5196 4.29289 13.7071C4.48043 13.8946 4.73478 14 5 14H11C11.2652 14 11.5196 13.8946 11.7071 13.7071C11.8946 13.5196 12 13.2652 12 13V4.059L11.882 4H4.118ZM2.5 3V2H13.5V3H2.5Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <div className="page-type">
                            {pages[index].pageType}
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default SurveyTimeline;
