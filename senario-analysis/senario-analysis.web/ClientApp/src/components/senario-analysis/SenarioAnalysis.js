import React, { Component } from 'react';
import Calculator from './Calculator'
export class SenarioAnalysis extends Component {
    static displayName = SenarioAnalysis.name;

    render() {
        return (
            <React.Fragment>
                <Calculator />

            </React.Fragment>
        );
    }
}
