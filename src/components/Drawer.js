import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { Routes, Route, Link } from "react-router-dom";

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Customerpage', 'Trainingpage'].map((text, index) => (
                    <ListItem button key={text} component={Link} to={"/" + text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <PersonIcon /> : <DirectionsRunIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <MenuIcon onClick={toggleDrawer(anchor, true)}>
                        {anchor}
                    </MenuIcon>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                    <Routes>
                        <Route exact path="/Customerpage" render={() => <div>Home Page</div>} />
                        <Route path="/Trainingpage" render={() => <div> Page inbox</div>} />
                    </Routes>
                    {/* <Routes>
            <Route path="Customerpage" render={() => <div> Page inbox</div>} />
            <Route path="Trainingpage" render={() => <div>Page starred</div>} />
          </Routes> */}
                </React.Fragment>
            ))}
        </div>
    );
}