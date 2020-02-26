import React, { Component } from 'react';
import { EconomyYear } from './EconomyYear';

export class EconomyYearInput extends Component {
    static displayName = EconomyYearInput.name;

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
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

        //this.setState()

        console.log(state)
        console.log(e.target)
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-1 pl-0">
                            <div className="text-center">
                                <label className="badge badge-dark">Year</label>
                                <label className="badge badge-dark">Rate</label>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}


//<div className="col-1 pl-0" key={startYear + i}>
  //  <EconomyYear value={startYear + i} onRateChange={(e, state) => this.handleRateChange(e, state)} />
//</div>