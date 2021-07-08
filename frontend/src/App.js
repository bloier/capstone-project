import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import GlobalFonts from "./resources/fonts/fonts";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/home"]} exact>
          <HomePage />
          <GlobalFonts />
        </Route>
        <Route path={"/games/wordflow"} exact>
          <GamePage />
        </Route>
      </Switch>
    </Router>
  );
}
