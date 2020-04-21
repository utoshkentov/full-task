import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const SignIn = ({onRouteChange}) => {
    return (
        <Box boxShadow={5}
             style={{width: '30%', height: '500px', transform: 'translate(110%, 20%)', paddingTop: '70px'}}>
            <Typography variant='h3'>
                Sign In
            </Typography>
            <br/>
            <TextField
                label="Email"
                id="outlined-size-normal"
                placeholder="Your Email"
                variant="outlined"
                type='email'
            />
            <br/>
            <br/>
            <br/>
            <TextField
                label="Password"
                id="outlined-size-normal"
                placeholder="Type your password..."
                variant="outlined"
                type='password'
            />
            <br/>
            <br/>
            <br/>
            <Button
                onClick={() => onRouteChange('home')}
                size="medium"
                color="primary"
                variant='outlined'
            >
                Sign In
            </Button>
            <br/>
            <br/>
            <Button
                onClick={() => onRouteChange('register')}
                size="small"
                color="secondary"
                variant='outlined'
            >
                Register
            </Button>
        </Box>
    );
}

export default SignIn;