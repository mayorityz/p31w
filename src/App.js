import Footer from "./Pages/Components/Footer";
import Navbar from "./Pages/Components/Navbar";
import { Switch, Route, useRouteMatch } from "react-router-dom";

function App() {
  const { path } = useRouteMatch();
  alert(path);
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route path={path}>
          <h3>Home</h3>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
