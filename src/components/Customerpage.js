import React from 'react';
import Customerlist from './Customerlist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TemporaryDrawer from './Drawer';

function Customerpage() {
    return (
        <div className="App">
            <AppBar position='static'>

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>

                        <TemporaryDrawer />

                    </IconButton>

                    <Typography variant="h6">
                        Customers
                    </Typography>

                </Toolbar>

            </AppBar>

            <Customerlist />
        </div>
    );
}

export default Customerpage;