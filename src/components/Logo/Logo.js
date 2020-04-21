import React from 'react';
import Tilt from "react-tilt";
import Grid from "@material-ui/core/Grid";
import Brain from './brain.png';

const Logo = (props) => {
    return (
        <Grid container>
            <Grid xs={3} item style={{padding: 0, marginTop: '30px', marginLeft: '50px'}}>
                <Tilt className='Tilt' options={{max: 55}} style={{height: 250, width: 250, background: 'transparent', boxShadow: '4px 3px 15px 1px rgba(0,0,0,0.75)', borderRadius: '5px'}}>
                    <div className='Tilt-inner' style={{paddingTop: '60px'}}>
                        <img src={Brain} alt="brain"/>
                    </div>
                </Tilt>
            </Grid>
        </Grid>
    );
}

export default Logo;