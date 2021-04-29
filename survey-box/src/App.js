import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SurveyTimeline from "./components/left-survey-timeline/SurveyTimeline";
import PageEditor from "./components/right-page-edit/PageEditor";
import MainWindow from "./components/middle/main-window/MainWindow";
import "./App.css";
import store from "./redux/store";
import Home from "./components/home/Home";
import EditContainer from "./components/editContainer/EditContainer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/survey/:id">
            <EditContainer />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
