import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Authentification.css';

import "tabler-react/dist/Tabler.css";

import { Grid } from "tabler-react";

import GoogleLogin from 'react-google-login';

import Dashboard from '../Dashboard/Dashboard';

class Authentification extends Component {

    constructor(props) {
        super(props);
    }

    responseGoogleSuccess(response) {
        var name = response.w3.ig;
        ReactDOM.render(<Dashboard name={name}></Dashboard>,document.getElementById("root"));
    }

    responseGoogleFailure()
    {
        ReactDOM.render(
            <p style={{color: "red"}}>Erreur ! Connexion échouée.</p>,
            document.getElementById("errorMessage")
        );
    }

    componentDidMount() {
        ReactDOM.render(
            <GoogleLogin
                clientId="1034537825797-hvfejr38ph2l85vvibb4qtjn8pkrmih8.apps.googleusercontent.com"
                buttonText="Se connecter"
                onSuccess={this.responseGoogleSuccess}
                onFailure={this.responseGoogleFailure}
                cookiePolicy={'single_host_origin'}
            />,
            document.getElementById('googleButton')
        );

    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Col>
                            <h1>Bienvenue !</h1>
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Col>
                            <div id="googleButton"></div>
                        </Grid.Col>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Col>
                            <div id="errorMessage"></div>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </div>

        );
    }
}

export default Authentification;