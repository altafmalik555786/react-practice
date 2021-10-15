import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import About from "./pages/About";
import Form from "./pages/Form";
import Home from "./pages/Home";
import FormDataNew from "./components/FormDataNew";
import FormInvoice from "./components/FormInvoice";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/form-new">FormDataNew</Link>
              </li>
             
              
            </ul>

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/form" component={Form} />
              <Route path="/form-new" component={FormDataNew} />
              <Route path="/invoice" component={FormInvoice} />
             
            </Switch>
          </nav>
        </Router>
      </div>
    </div>
  );
}

export default App;
