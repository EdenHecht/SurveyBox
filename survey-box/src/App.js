import SurveyTimeline from "./components/left-survey-timeline/SurveyTimeline";
import PageEditor from "./components/right-page-edit/PageEditor";
import MainWindow from "./components/middle/main-window/MainWindow";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SurveyTimeline />
      <MainWindow />
      <PageEditor />
    </div>
  );
}

export default App;
