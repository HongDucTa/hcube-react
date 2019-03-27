import React, { Component } from 'react';
import './Dashboard.css';

import { Grid, StatsCard, Timeline } from "tabler-react";

import axios from "axios";
import writeFileSync from "fs";

class Dashboard extends Component {

    state = {
        coursBitcoin: 0,
        measures: []
    }


    fetchBitcoinRate() {
    }

    componentDidMount() {
        axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=EUR&apikey=S1IJ9J47UJ5M05Y6`)
            .then(res => {
                var content = JSON.parse(res.request.response);
                var coursBitcoin = content["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
                this.setState({coursBitcoin: coursBitcoin});
            });
    }

    render() {
        return (
            <div id="root">
                <Grid.Row>
                    <Grid.Col>Dashboard</Grid.Col>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Col>
                        <StatsCard layout={1} movement={0} total={this.state.coursBitcoin} label="€ = 1 bitcoin" />
                    </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Col>
                    </Grid.Col>
                </Grid.Row>
            </div>
        );
    }
}

export default Dashboard;