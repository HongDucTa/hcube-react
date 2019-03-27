import React, { Component } from 'react';
import './Authentification.css';

import "tabler-react/dist/Tabler.css";

import { Grid } from "tabler-react";

class Authentification extends Component {

    constructor(props){
        super(props);
        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn(googleUser) {
        console.log("TEST");
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    Login() {
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
                            <div className="g-signin2" data-onsuccess="onSignIn"></div>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
            </div>

        );
    }
}

export default Authentification;