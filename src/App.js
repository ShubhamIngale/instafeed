import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FeedList from "./components/FeedList";
import Feed from "./components/Feed";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={FeedList} />
          <Route path="/:id" component={Feed} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
