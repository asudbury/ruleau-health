import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProcessPage from "./pages/ProcessPage";
import CasePage from "./pages/CasePage";
import { logInfo } from "./utils/Logger";

export default function Routes(): JSX.Element {
  logInfo("Public Url=" + process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Link to="/process" />
      <Link to="/process/:processId/case/:caseId" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ruleau" component={HomePage} />
        <Route exact path="/ruleau-health" component={HomePage} />
        <Route exact path="/process/:processId" component={ProcessPage} />
        <Route exact path="/process/:processId/cases" component={ProcessPage} />
        <Route exact path="/process/:processId/rules" component={ProcessPage} />
        <Route
          exact
          path="/process/:processId/statistics"
          component={ProcessPage}
        />
        <Route
          exact
          path="/process/:processId/overview"
          component={ProcessPage}
        />
        <Route
          exact
          path="/process/:processId/statistics"
          component={ProcessPage}
        />

        <Route
          exact
          path="/process/:processId/case/:caseId"
          component={CasePage}
        />
        <Route
          exact
          path="ruleau-health/process/:processId/case/:caseId"
          component={CasePage}
        />
      </Switch>
    </BrowserRouter>
  );
}
