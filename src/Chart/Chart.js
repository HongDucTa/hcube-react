import React, { Component } from 'react';


import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from 'react-fusioncharts';

import './Chart.css';

// Add core FusionCharts module and TimeSeries module as dependecies in react-fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries);

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Here timeseriesDs is the configuration object which we will pass as a prop to our ReactFC component.
      timeseriesDs: {
        type: 'timeseries',
        renderAt: 'container',
        width: '600',
        height: '400',
        dataSource: {
          chart: {

          },
          caption: {
            text: 'Evolution du cours du Bitcoin'
          },
          subcaption: {
            text: ''
          },
          yAxis: [{
            plot: {
              value: 'Bitcoin Value'
            },
            format: {
              prefix: '€'
            },
            title: 'Sale Value'
          }],
          data: this.props.measures
        }
      }
    };

    // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
    // parameters, one is data another is schema. Check the method definition to get more info.
    this.createDataTable = this.createDataTable.bind(this);
  }

  createDataTable() {
    const data = this.props.measures;
    const schema = [
      {
        "name": "Time",
        "type": "date",
        "format": "%Y-%m-%d"
      },
      {
        "name": "Bitcoin value",
        "type": "number"
      }
    ];
    // First we are creating a DataStore
    const fusionDataStore = new FusionCharts.DataStore();
    // After that we are creating a DataTable by passing our data and schema as arguments
    const fusionTable = fusionDataStore.createDataTable(data, schema);
    // After that we simply mutated our timeseries datasource by attaching the above
    // DataTable into its data property.
    const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
    timeseriesDs.dataSource.data = fusionTable;
    this.setState({
      timeseriesDs
    });
  }

  // We are creating the DataTable immediately after the component is mounted
  componentDidMount() {
    this.createDataTable();
  }

  render() {
    return (
      <div className="App">
        <ReactFC {...this.state.timeseriesDs} />
      </div>
    );
  }
}

export default Chart;