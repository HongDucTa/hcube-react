import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Dashboard.css';

import { Grid, StatsCard } from "tabler-react";

import axios from "axios";
import Chart from '../Chart/Chart';

class Dashboard extends Component {

    state = {
        coursBitcoin: 0,
        measures: []
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
                <Grid.Row>
                    <Grid.Col>
                        <h1>Dashboard</h1>
                    </Grid.Col>
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