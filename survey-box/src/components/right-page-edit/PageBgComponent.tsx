import BackgroundComponent from "./sub-components/BackgroundComponent";
import { updatePageBackground } from "../../redux/actions/styleActions";

function PageBgComponent() {
  return (
    <div className="page-style pad border-bottom">
      <div className="section-title">Background</div>
      <div className="color-picker-row">
        <BackgroundComponent
          actionFunction={updatePageBackground}
          defualtColor="#ffffff"
          colorVarName="background"
        />
      </div>
    </div>
  );
}

export default PageBgComponent;
