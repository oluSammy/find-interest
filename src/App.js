import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home.component';
import SignupPage from './Pages/Signup/Signup.component';
import Signin from './Pages/Signin/Signin.component';

function App() {
  return (
    <CssBaseline>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/login" component={Signin} />
      </Switch>
    </CssBaseline>
  );
}

export default App;
