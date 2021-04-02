import React, { useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import useComponentVisible from "../../services/customeHooks/VisibleComponent";

function BackgroundComponent(props: any) {
  const { actionFunction, defualtColor, colorVarName } = props;
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);
  const [color, setColor] = useState(defualtColor);
  const dispatch = useDispatch();

  const toggleVisibility = () => {
    setIsComponentVisible((isComponentVisible: boolean) => !isComponentVisible);
    return isComponentVisible;
  };

  useEffect(() => {
    if (currPage === null) return;
    dispatch(actionFunction(currPage.id, color));
  }, [color, dispatch]);

  useEffect(() => {
    if (currPage === null) return;
    setColor(currPage[colorVarName]);
    setIsComponentVisible(false);
  }, [currPageIndex, currPage]);

  return (
    <div ref={ref} className="background edit-feature">
      <button
        className="sample"
        style={{ background: color }}
        onClick={() => toggleVisibility()}
      ></button>
      {isComponentVisible && (
        <ChromePicker
          className="bg-color-picker"
          color={color}
          disableAlpha={true}
          onChange={(updatedColor) => {
            setColor(updatedColor.hex);
          }}
        />
      )}
      <div className="hex-number feature-text">{color.replace(/#/g, "")}</div>
    </div>
  );
}

export default BackgroundComponent;
