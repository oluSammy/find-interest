import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home.component';

function App() {
  return (
    <CssBaseline>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </CssBaseline>
  );
}

export default App;
