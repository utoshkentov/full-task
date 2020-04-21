import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Register = ({onRouteChange}) => {
    return (
        <Box boxShadow={5}
             style={{width: '30%', height: '600px', transform: 'translate(110%, 10%)', paddingTop: '70px'}}>
            <Typography variant='h3'>
                Sign In
            </Typography>
            <br/>
            <TextField
                label="Name"
                placeholder="Username"
                variant="outlined"
                type='text'
            />
            <br/>
            <br/>
            <br/>
            <TextField
                label="Email"
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
                placeholder="Type your password"
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
                Register
            </Button>
            <br/>
            <br/>
            <Button
                onClick={() => onRouteChange('signin')}
                size="small"
                color="secondary"
                variant='outlined'
            >
                Sign In
            </Button>
        </Box>
    );
}

export default Register;