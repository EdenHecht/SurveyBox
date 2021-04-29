import { RootStateOrAny, useSelector } from "react-redux";
import {
  updateButtonFontSize,
  updateButtonFontColor,
  updateButtonBgColor,
} from "../../redux/actions/styleActions";
import BackgroundComponent from "./sub-components/BackgroundComponent";
import FontSizeComponent from "./sub-components/FontSizeComponent";

function ButtonComponent() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );

  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );

  return (
    <div className="button-style pad border-bottom">
      <div className="section-title">Button Design</div>
      <FontSizeComponent
        actionFunction={updateButtonFontSize}
        defualtSize={currPage ? currPage.buttonFontSize : 17}
        sizeVarName="buttonFontSize"
      />
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
