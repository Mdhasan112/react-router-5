import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbars from "./components/Navbars";
import Error from "./components/Error";
import Post from "./components/Post";
import Play from "./components/Play";

function App() {
  return (
    <>
      <Router>
        <Navbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/play" component={Play}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/services">
            <Services age="5"/>
          </Route>
          <Route exact path="/post/:hk" component={Post} />

          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
