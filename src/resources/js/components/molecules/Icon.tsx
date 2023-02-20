import { useState,useRef} from 'react';
import { Popover,  } from '@mui/material';
import { makeStyles,createStyles,Theme } from '@material-ui/core/styles';

import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        popover: {
            backgroundColor: 'green'
        }
    })
);

type Props = {
    imageUrl: string;
};

const Icon = (props: Props) => {
    const [open, setOpen] = useState(false);
    const divRef:any = useRef();
    
    const styles=useStyles();
    const url:string ="/images/"+props.imageUrl;
    
    return (
      <div>
        <img src={url} onClick={() => setOpen(!open)} />
        <Popover
            open={open}
            anchorEl={divRef.current}
            onClose={() => setOpen(!open)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <ul className="poplist">
                    <li>
                        <NavLink exact to="/">
                        <AccountBoxIcon/>&nbsp; Myprofile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/follow">
                         <SettingsIcon/>&nbsp; Settings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/gamelist">
                            <LogoutIcon/>&nbsp; Signout 
                        </NavLink>
                    </li>
            </ul>
        </Popover>
      </div>
    )
  }
  
  export default Icon