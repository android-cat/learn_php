import { useState,useRef} from 'react';
import { Popover,  } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

import { NavLink } from "react-router-dom";

// パラメータ定義
type Props = {
    imageUrl: string;
};

const Icon = (props: Props) => {
    // メニューの状態の保持のための変数を宣言
    const [open, setOpen] = useState(false);
    // 実画像URLの生成
    const url:string ="/images/"+props.imageUrl;
    
    return (
      <div>
        {/* 画像が押されたら論理値を反転する */}
        <img src={url} onClick={() => setOpen(!open)} />
        <Popover
            // openの論理値によって開くか決める
            open={open}
            // フロートメニューが開かれている場合、押されたら論理値を反転
            onClose={() => setOpen(!open)}
            // 画像に被せる形で表示
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}

        >
            {/* 実際の開くメニュー */}
            <ul className="poplist">
                    <li>
                        <NavLink exact to="/profile">
                        <AccountBoxIcon/>&nbsp; Myprofile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/settings">
                         <SettingsIcon/>&nbsp; Settings
                        </NavLink>
                    </li>
                    <li>
                        {/* 使用未確定につきホームを仮値に */}
                        <NavLink exact to="/">
                            <LogoutIcon/>&nbsp; Signout 
                        </NavLink>
                    </li>
            </ul>
        </Popover>
      </div>
    )
  }
  
  export default Icon;