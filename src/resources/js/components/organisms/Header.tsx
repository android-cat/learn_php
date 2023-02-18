import Image from "../atoms/Image";
import Icon from "../molecules/Icon";
import { NavLink } from "react-router-dom";
import * as colors from "@material-ui/core/colors";

type Props = {
    imageUrl: string;
  };

const Header = (props: Props) => {

    const current={
        color: colors.grey[600],
        width: '100%',
        display: 'inline-block',
      };

    return (
        <header>
            <NavLink exact to="/">
                <div className="logo">
                    <Image imageUrl={props.imageUrl}/>
                </div>
            </NavLink>
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