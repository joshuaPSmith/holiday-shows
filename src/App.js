import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";

export default function App() {
  useEffect(() => {
    ReactGA.initialize("UA-153509644-1");
    ReactGA.pageview("/homepage");
  }, []);

  return (
    <Router>
      <Route path={["/:showParam", "/*"]}>
        <Home />
      </Route>
    </Router>
  );
}
