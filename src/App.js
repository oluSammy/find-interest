import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home.component';
import SignupPage from './Pages/Signup/Signup.component';

function App() {
  return (
    <CssBaseline>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </CssBaseline>
  );
}

export default App;
