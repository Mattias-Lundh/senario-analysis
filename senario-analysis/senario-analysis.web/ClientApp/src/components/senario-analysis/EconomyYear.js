import React, { Component } from 'react';

export class EconomyYear extends Component {
    static displayName = EconomyYear.name;

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            rate: props.rate
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <label className="badge badge-dark">{this.state.value}</label>
                    <input className="w-100" type="number" min="0.01" step="0.01" onChange={(e) => this.props.onRateChange(e, this.state)} />
                </div>
            </React.Fragment>
        );
    }
}

