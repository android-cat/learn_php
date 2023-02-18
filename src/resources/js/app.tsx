import "./bootstrap";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import GameListPage from "./components/pages/GameListPage";
import TLPage from "./components/pages/TLPage";
import FollowPage from "./components/pages/FollowPage";
import ErrorPage from "./components/pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* TL画面 */}
        <Route path="/" component={TLPage} exact />
        {/* 積みゲー一覧画面 */}
        <Route path="/gamelist" component={GameListPage} exact />
        {/* フォロー一覧画面 */}
        <Route path="/follow"component={FollowPage} exact/>
        {/* エラー画面 */}
        <Route component={ErrorPage} exact />
      </Switch>
    </Router>
  );
}

export default App;