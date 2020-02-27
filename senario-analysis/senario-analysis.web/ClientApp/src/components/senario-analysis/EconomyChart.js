import React, { Component } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class EconomyChart extends Component {
    static displayName = EconomyChart.name;

    render() {

        const options = {
            theme: "dark1",
            title: { text: "Projected 10 year economy" },
            axisX: {
                title: "year",
                minimum: "1",
                maximum: "10"
            },
            axisY: {
                title: "rate",
                minimum: "0.00",
                maximum: "0.07"
            },
            data: [
                { type: 'line', color: 'yellow', dataPoints: this.props.data }
            ]
        }

        return (
            <React.Fragment>
                <CanvasJSChart options={options} />
                <br />
            </React.Fragment>
        );
    }
}
