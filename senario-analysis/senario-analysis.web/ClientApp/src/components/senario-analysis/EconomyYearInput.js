import React, { Component } from 'react';
import { EconomyYear } from './EconomyYear';

export class EconomyYearInput extends Component {
    static displayName = EconomyYearInput.name;

    constructor(props) {
        super(props);
        this.state = {
            years: [{ value: 1, rate: 0.00 },
            { value: 2, rate: 0.00 },
            { value: 3, rate: 0.00 },
            { value: 4, rate: 0.00 },
            { value: 5, rate: 0.00 },
            { value: 6, rate: 0.00 },
            { value: 7, rate: 0.00 },
            { value: 8, rate: 0.00 },
            { value: 9, rate: 0.00 },
            { value: 10, rate: 0.00 }]
        };
    }

    handleRateChange = (e, state) => {

        const years = [...this.state.years];
        var index = years.findIndex(y => y.value === state);
        years[index].rate = e.target.value;

        this.setState({ years });
    }

    handleBooming = () => {
        this.setState({
            years: [{ value: 1, rate: 0.01 },
            { value: 2, rate: 0.01 },
            { value: 3, rate: 0.01 },
            { value: 4, rate: 0.01 },
            { value: 5, rate: 0.01 },
            { value: 6, rate: 0.01 },
            { value: 7, rate: 0.01 },
            { value: 8, rate: 0.01 },
            { value: 9, rate: 0.01 },
                { value: 10, rate: 0.01 }]
        })
    }

    handleSteady = () => {
        this.setState({
            years: [{ value: 1, rate: 0.025 },
                { value: 2, rate: 0.025 },
                { value: 3, rate: 0.025 },
                { value: 4, rate: 0.025 },
                { value: 5, rate: 0.025 },
                { value: 6, rate: 0.025 },
                { value: 7, rate: 0.025 },
                { value: 8, rate: 0.025 },
                { value: 9, rate: 0.025 },
                { value: 10, rate: 0.025 }]
        })
    }

    handleDepression = () => {
        this.setState({
            years: [{ value: 1, rate: 0.06 },
                { value: 2, rate: 0.06 },
                { value: 3, rate: 0.06 },
                { value: 4, rate: 0.06 },
                { value: 5, rate: 0.06 },
                { value: 6, rate: 0.06 },
                { value: 7, rate: 0.06 },
                { value: 8, rate: 0.06 },
                { value: 9, rate: 0.06 },
                { value: 10, rate: 0.06 }]
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-1 pl-0">
                            <label className="badge badge-dark">Year</label>
                            <br />
                            <label className="badge badge-dark">Rate</label>
                        </div>
                        {this.state.years.map(year =>
                            <div className="col-1 pl-0" key={"year" + year.value}>
                                <EconomyYear value={year.value} rate={year.rate} onRateChange={(e, state) => this.handleRateChange(e, state)} />
                            </div>
                        )}
                    </div>
                    <br />
                    <label>template data</label>
                    <br />
                    <div className="row">
                        <button className="btn btn-success" onClick={this.handleBooming}>Booming</button>
                        <button className="btn btn-warning" onClick={this.handleSteady}>Steady</button>
                        <button className="btn btn-danger" onClick={this.handleDepression}>Depression</button>
                    </div>
                </div>
                <br />

                <button className="btn btn-dark" onClick={() => this.props.onCreateEconomyGraph(this.state.years)}>Simulate Economy</button>
            </React.Fragment>
        );
    }
}


