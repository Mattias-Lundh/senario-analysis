import React, { Component } from 'react';
import { Loan } from './Loan';
import { Economy } from './Economy';

export class Calculator extends Component {
    static displayName = Calculator.name;

    render() {
        return (
            <React.Fragment>
                <Loan />
                <Economy />
            </React.Fragment>
        );
    }
}
