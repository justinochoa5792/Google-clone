import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./pages/About";
import Images from "./pages/Images";
import Gmail from "./pages/Gmail";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/images" component={Images} />
        <Route exact path="/gmail" component={Gmail} />
        <Route exact path="/store" component={Store} />
      </Switch>
    </div>
  );
}

export default App;
