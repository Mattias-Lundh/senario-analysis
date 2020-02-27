import React, { Component } from 'react';
import { EconomyYearInput } from './EconomyYearInput';
import { EconomyChart } from './EconomyChart';

export class Economy extends Component {
    static displayName = Economy.name;

    constructor(props) {
        super(props)
        this.state = { economyData: [{  }] };
    }

    onCreateEconomyGraph = (years) => {
        const economyData = [...years].map(year => { return { x: year.value, y: Number(year.rate) } })
        this.setState({ economyData });

        this.props.onSimulateEconomy(economyData)
    }

    render() {
        return (
            <React.Fragment>
                <div className="card bg-light mb-3">
                    <div className="card-header">Economy</div>
                    <div className="card-body">
                        <div className="form-check form-group">
                            <EconomyYearInput onCreateEconomyGraph={this.onCreateEconomyGraph}/>
                        </div>
                    </div>
                </div>
                <EconomyChart data={this.state.economyData}/>

            </React.Fragment>
        );
    }
}
