import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  updateButtonFontSize,
  updateButtonFontColor,
  updateButtonBgColor,
} from "../../redux/pageActions";
import BackgroundComponent from "./BackgroundComponent";

function ButtonComponent() {
  const [fontSize, setFontSize] = useState(17);
  const [isFontSizeValid, setIsFontSizeValid] = useState(true);

  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFontSizeValid)
      dispatch(updateButtonFontSize(currPageIndex, fontSize));
  }, [isFontSizeValid, fontSize]);

  useEffect(() => {
    if (currPage === null) return;
    setFontSize(currPage.buttonFontSize);
    setIsFontSizeValid(true);
  }, [currPageIndex, currPage]);

  return (
    <div className="button-style pad border-bottom">
      <div className="section-title">Button Design</div>
      <div className="font-size edit-feature bottom-margin">
        <div className="right-margin feature-text">Font size</div>
        <input
          className="font-size-display"
          type="text"
          pattern="[0-9]*"
          value={fontSize}
          onChange={(e) => {
            setFontSize(Number(e.target.value));
            setIsFontSizeValid(e.target.validity.valid);
          }}
        ></input>
      </div>
      <div className="font-color edit-feature bottom-margin color-picker-row">
        <div className="right-margin feature-text">Color</div>
        <BackgroundComponent
          actionFunction={updateButtonFontColor}
          defualtColor={currPage ? currPage.buttonTextColor : "#ffffff"}
          colorVarName="buttonTextColor"
        />
      </div>
      <div className="background-color edit-feature bottom-margin color-picker-row">
        <div className="right-margin feature-text">Background</div>
        <BackgroundComponent
          actionFunction={updateButtonBgColor}
          defualtColor={currPage ? currPage.buttonBackground : "#000000"}
          colorVarName="buttonBackground"
        />
      </div>
    </div>
  );
}

export default ButtonComponent;
