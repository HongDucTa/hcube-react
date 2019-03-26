import React, { Component } from 'react';
import './Dashboard.css';

import {Grid} from "tabler-react";

class Dashboard extends Component
{
    render()
    {
        return(
            <div id="root">
                <Grid.Row>
                    <Grid.Col>Dashboard</Grid.Col>
                </Grid.Row>
            </div>
        );
    }
}

export default Dashboard;