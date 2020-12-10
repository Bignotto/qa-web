import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import AnswerQuestion from "../pages/AnswerQuestion";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/answer/:question_id" component={AnswerQuestion} />
  </Switch>
);

export default Routes;
