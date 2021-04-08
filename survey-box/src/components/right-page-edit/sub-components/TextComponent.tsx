import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

function TextComponent(props: any) {
  const { actionFunction, textVarName } = props;
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="question-text"
      className="question-text-field"
      placeholder={currPage[textVarName]}
      onChange={(e) => dispatch(actionFunction(currPage.id, e.target.value))}
    />
  );
}

export default TextComponent;
