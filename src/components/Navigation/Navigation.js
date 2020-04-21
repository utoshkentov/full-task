import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

const Navigation = ({onRouteChange}) => {
    return (
        <AppBar position='static'  style={{display: 'flex', justifyContent: 'flex-end', backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
            <Toolbar>
                <Button onClick={() => onRouteChange('signin')} outlined='true'>Sign Out</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navigation;