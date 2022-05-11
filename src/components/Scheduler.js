import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TemporaryDrawer from './Drawer';

function Scheduler() {
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
                        Scheduler
                    </Typography>

                </Toolbar>

            </AppBar>
            
        </div>
    );
}

export default Scheduler;