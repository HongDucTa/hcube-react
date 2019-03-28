import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Authentification.css';

import "tabler-react/dist/Tabler.css";

import { Grid } from "tabler-react";

import GoogleLogin from 'react-google-login';

import { GoogleLogout } from 'react-google-login';

class Authentification extends Component {

    constructor(props) {
        super(props);
    }

    responseGoogle(response) {
        console.log(response.w3.ig);
    }

    logout()
    {
        console.log("Log out success");
    }

    componentDidMount() {
        ReactDOM.render(
            <GoogleLogin
                clientId="1034537825797-hvfejr38ph2l85vvibb4qtjn8pkrmih8.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />,
            document.getElementById('googleButton')
        );

        ReactDOM.render(
            <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={this.logout}
            >
            </GoogleLogout>,
            document.getElementById('googleLogOut')
        )
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Col>Bienvenue !</Grid.Col>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Col offset="5">
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Col>
                            <div id="googleButton"></div>
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Col>
                            <div id="googleLogOut"></div>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </div>

        );
    }
}

export default Authentification;