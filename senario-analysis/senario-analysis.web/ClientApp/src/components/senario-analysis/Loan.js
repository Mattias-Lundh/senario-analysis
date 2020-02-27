import React, { Component } from 'react';
import { LoanAmount } from './LoanAmount';
import { LoanRates } from './LoanRates';

export class Loan extends Component {
    static displayName = Loan.name;

    render() {
        return (
            <React.Fragment>
                <LoanAmount onAmountChange={this.props.onAmountChange} />
                <LoanRates onAddRate={this.props.onAddRate}/>
            </React.Fragment>
        );
    }
}
