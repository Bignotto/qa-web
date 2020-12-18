import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import AnswerQuestion from "../pages/AnswerQuestion";
import AskQuestion from "../pages/AskQuestion";
import Result from "../pages/Result";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/answer/:questionId" component={AnswerQuestion} />
    <Route path="/ask" component={AskQuestion} />
    <Route path="/result" component={Result} />
  </Switch>
);

export default Routes;
