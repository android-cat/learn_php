import "./bootstrap";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import GameListPage from "./components/pages/GameListPage";
import TLPage from "./components/pages/TLPage";
import FollowPage from "./components/pages/FollowPage";
import ErrorPage from "./components/pages/ErrorPage";
import ProfilePage from "./components/pages/ProfilePage";
import SettingsPage from "./components/pages/SettingsPage";
// SPA本体
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
        {/* プロフィール画面 */}
        <Route path="/profile"component={ProfilePage} exact/>
        {/* 設定画面 */}
        <Route path="/settings"component={SettingsPage} exact/>
        {/* エラー画面 */}
        <Route component={ErrorPage} exact />
      </Switch>
    </Router>
  );
}

export default App;