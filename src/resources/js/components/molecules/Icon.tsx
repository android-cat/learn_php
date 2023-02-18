import { useState,useRef} from 'react';
import { Popover,  } from '@mui/material';
import { makeStyles,createStyles,Theme } from '@material-ui/core/styles';

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
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/follow">
                            Follow
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/gamelist">
                            GameList
                        </NavLink>
                    </li>
            </ul>
        </Popover>
      </div>
    )
  }
  
  export default Icon