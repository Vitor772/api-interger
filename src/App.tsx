import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ViewList from "./components/viewlist";

class App extends Component {
  render() {
    return (
    <div>
      <div>
        <Switch>
           <Route exact path={["/", "view"]}  component={ViewList}/>
        </Switch>
      </div>
    </div>
    )
  }
}

export default App