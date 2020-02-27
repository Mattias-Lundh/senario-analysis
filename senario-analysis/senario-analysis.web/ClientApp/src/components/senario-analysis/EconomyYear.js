import React, { Component } from 'react';

export class EconomyYear extends Component {
    static displayName = EconomyYear.name;



    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <label className="badge badge-dark">{this.props.value}</label>
                    <input className="w-100" type="number" value={this.props.rate} min="0.000" max="1" step="0.001" onChange={(e) => this.props.onRateChange(e, this.props.value)} />
                </div>
            </React.Fragment>
        );
    }
}

