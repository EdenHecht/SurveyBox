import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

function FontSizeComponent(props: any) {
  const { actionFunction, defualtSize, sizeVarName } = props;

  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );

  const [fontSize, setFontSize] = useState(defualtSize);
  const [isFontSizeValid, setIsFontSizeValid] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFontSizeValid) dispatch(actionFunction(currPage.id, fontSize));
  }, [isFontSizeValid, fontSize]);

  useEffect(() => {
    if (currPage === null) return;
    setFontSize(currPage[sizeVarName]);
    setIsFontSizeValid(true);
  }, [currPageIndex, currPage]);

  return (
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
  );
}

export default FontSizeComponent;
