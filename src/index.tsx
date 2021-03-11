import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "./components/atoms/LoadingSpinner.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="loading-spinner" />}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={React.lazy(() => import("./components/screens/Home"))}
          />
        </Switch>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
