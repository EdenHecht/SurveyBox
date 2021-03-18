import { Provider } from "react-redux";
import SurveyTimeline from "./components/left-survey-timeline/SurveyTimeline";
import PageEditor from "./components/right-page-edit/PageEditor";
import MainWindow from "./components/middle/main-window/MainWindow";
import "./App.css";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SurveyTimeline />
        <MainWindow />
        <PageEditor />
      </div>
    </Provider>
  );
}

export default App;
