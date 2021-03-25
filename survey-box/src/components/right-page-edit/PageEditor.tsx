import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import "./PageEditor.css";
import StatmentStyleOptions from "./StatmentStyleOptions"
import QuestionStyleOptions from "./QuestionStyleOptions"
import { ChromePicker } from "react-color"
import {updatePageBackground} from "../../redux/pageActions"
import useComponentVisible from "../../services/customeHooks/VisibleComponent"

function PageEditor() {

  const currPageIndex = useSelector((state:RootStateOrAny) => state.currPageIndex)
  const currPage = useSelector((state:RootStateOrAny) => currPageIndex !== -1 ? state.pages[currPageIndex] : null)
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);
  const [bgColor, setBgColor] = useState("#FFFFFF")
  const dispatch = useDispatch();

  useEffect(() => {
    if (currPage === null) return; 
    dispatch(updatePageBackground(currPage.id,bgColor))
  }, [bgColor, dispatch])

  useEffect(() => {
    if (currPage === null) return; 
    setBgColor(currPage.background);
    setIsComponentVisible(false)
  }, [currPageIndex, currPage])

  const toggleVisibility = () => {
    console.log("before: ",isComponentVisible)
    setIsComponentVisible((isComponentVisible: boolean) => !isComponentVisible)
    console.log("after: ", isComponentVisible)
    return isComponentVisible;
  }

  return (
    <div className="page-editor-container">
      <div className="question-name-example border-bottom">Question name</div>
      { currPage !== null && 
      <>
        <div className="page-style pad border-bottom">
          <div className="section-title">Background</div>
          <div ref={ref} className="background edit-feature">
            <button 
              className="sample" 
              style={{background: bgColor}} 
              onClick={() => toggleVisibility()}>
            </button>
            {isComponentVisible &&
              <ChromePicker 
                className="bg-color-picker" 
                color={bgColor} 
                disableAlpha={true}
                onChange={updatedColor => {
                setBgColor(updatedColor.hex);
                }}
              />}
            <div className="hex-number feature-text">{ bgColor.replace(/#/g,'') }</div>
          </div>
        </div>
        {currPage.questionType !== undefined ? <QuestionStyleOptions/> : <StatmentStyleOptions/>}
        <div className="button-style pad border-bottom">
          <div className="section-title">Button Design</div>
          <div className="font-size edit-feature bottom-margin">
            <div className="right-margin feature-text">Font size</div>
            <div className="font-size-display">15</div>
          </div>
          <div className="font-color edit-feature bottom-margin">
            <div className="right-margin feature-text">Color</div>
            <div className="sample"></div>
            <div className="hex-number feature-text"> 000000</div>
          </div>
          <div className="background-color edit-feature bottom-margin">
            <div className="right-margin feature-text">Background</div>
            <div className="sample"></div>
            <div className="hex-number feature-text"> 000000</div>
          </div>
        </div>
      </>}
    </div>
  );
}

export default PageEditor;
