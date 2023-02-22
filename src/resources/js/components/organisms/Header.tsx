import Image from "../atoms/Image";
import Icon from "../molecules/Icon";
import { NavLink } from "react-router-dom";
import * as colors from "@material-ui/core/colors";
// パラメータ定義
type Props = {
    imageUrl: string;
  };
// ヘッダー部の表示
const Header = (props: Props) => {
// ヘッダーメニューの選択時のスタイル定義
    const current={
        color: colors.grey[600],
        width: '100%',
        display: 'inline-block',
      };

    return (
        <header>
            {/* サイトロゴの表示並びに画面遷移埋め込み */}
            <NavLink exact to="/">
                <div className="logo">
                    <Image imageUrl={props.imageUrl}/>
                </div>
            </NavLink>
            {/* ヘッダーメニュー */}
            <div className="list-menu">
                <ul className="list">
                    <li>
                        <NavLink exact to="/" activeStyle={current}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/follow" activeStyle={current}>
                            Follow
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/gamelist" activeStyle={current}>
                            GameList
                        </NavLink>
                    </li>
                    <li>
                        {/* 本来はユーザーアイコンだが仮画像URL挿入 */}
                        <div className="icon">
                            <Icon imageUrl={props.imageUrl}/>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
  };
  
  export default Header;