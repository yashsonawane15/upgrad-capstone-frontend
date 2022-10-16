import { Button, Grid } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/logo.jpeg';
import './Header.css';

const Header = () => {

    return (
        <Grid className={"header"} direction={"row"}>
            <Grid item container>
                <Grid item className = "logo">
                    <img src={logo} alt="logo"/>
                </Grid>
            </Grid>

            <Grid item container direction={"row-reverse"}>
                <Grid item >
                    <Button variant={"contained"} >
                        Button
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;