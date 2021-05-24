import { Router, Route, Switch } from "react-router-dom";
import history from "../src/utils/History";
import HomePage from "./pages/HomePage";
import ProcessPage from "./pages/ProcessPage";
import CasePage from "./pages/CasePage";
import LogViewer from "../src/components/LogViewer";
import PageNotFound from "../src/components/PageNotFound";
import ErrorPage from "../src/components/ErrorPage";

export default function Routes(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={["/", "/ruleau-health"]} component={HomePage} />

        <Route
          exact
          path={[
            "/process/:processId",
            "/ruleau-health/process/:processId",
            "/process/:processId/cases",
            "/ruleau-health/process/:processId/cases",
            "/process/:processId/rules",
            "/ruleau-health/process/:processId/rules",
            "/process/:processId/rules",
            "/process/:processId/statistics",
            "/ruleau-health/process/:processId/statistics",
            "/process/:processId/overview",
            "/ruleau-health/process/:processId/overview",
          ]}
          component={ProcessPage}
        />
        <Route
          exact
          path={[
            "/process/:processId/case/:caseId",
            "/ruleau-health/process/:processId/case/:caseId",
          ]}
          component={CasePage}
        />
        <Route
          exact
          path={["/log", "/ruleau-health/log"]}
          component={LogViewer}
        />

        <Route
          exact
          path={["/error", "/ruleau-health/error"]}
          component={ErrorPage}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}
