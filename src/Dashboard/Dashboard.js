import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Dashboard.css';

import { Grid, StatsCard } from "tabler-react";

import axios from "axios";
import Chart from '../Chart/Chart';

import { GoogleLogout } from 'react-google-login';
import Authentification from '../Authentification/Authentification';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            coursBitcoin: 0,
            measures: []
        }
    }

    logout() {
        ReactDOM.render(<Authentification></Authentification>, document.getElementById("root"));
    }

    componentDidMount() {
        axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=S1IJ9J47UJ5M05Y6`)
            .then(res => {
                var content = JSON.parse(res.request.response);
                var coursBitcoin = content["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
                this.setState({ coursBitcoin: coursBitcoin });
            });

        axios.get(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=EUR&apikey=S1IJ9J47UJ5M05Y6`)
            .then(res => {
                var content = JSON.parse(res.request.response)["Time Series (Digital Currency Daily)"];
                var list = [];
                var individu;
                for (var name in content) {
                    individu = {
                        date: name,
                        value: Number(content[name]["1a. open (EUR)"])
                    }
                    list.push([individu.date, individu.value]);
                }
                this.setState({ measures: list }, () => { ReactDOM.render(<Chart measures={this.state.measures} />, document.getElementById('chart')) });
            });
    }

    render() {
        return (
            <div id="root">
                <Grid.Row alignItems="center">
                    <Grid.Col>
                        <h1>Dashboard</h1>
                    </Grid.Col>
                    <Grid.Col>
                        <p>Bonjour {this.state.name} !</p>
                        <GoogleLogout
                            buttonText="Se déconnecter"
                            onLogoutSuccess={this.logout}
                        >
                        </GoogleLogout>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Col>
                        <StatsCard layout={1} movement={0} total={this.state.coursBitcoin} label="€ = 1 bitcoin" />
                    </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Col>
                        <div id="chart"></div>
                    </Grid.Col>
                </Grid.Row>
            </div>
        );
    }
}

export default Dashboard;