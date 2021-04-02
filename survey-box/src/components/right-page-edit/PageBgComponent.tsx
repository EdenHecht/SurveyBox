import BackgroundComponent from "./BackgroundComponent";
import { updatePageBackground } from "../../redux/pageActions";

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
