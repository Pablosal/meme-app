import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SwapBlocks from "./Lateral/Components/SwapBlocks";
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "./redux/actions/figureActions";
// import DivSwap from "./testing/divSwap";
function App() {
  // const counter = useSelector(state=>state.counter)
  // const dispatch = useDispatch();
  //  onClick={() => dispatch(increment())}
  return (
    // <DivSwap />
    <Router>
      <Switch>
        <Route exact path="/">
          <SwapBlocks />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
