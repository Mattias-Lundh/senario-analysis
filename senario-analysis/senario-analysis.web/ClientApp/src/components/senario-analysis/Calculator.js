import React, { Component } from 'react';
import { Loan } from './Loan';
import { Economy } from './Economy';
import { Summary } from './Summary';

export class Calculator extends Component {
    static displayName = Calculator.name;

    constructor(props) {
        super(props);
        this.state = {
            loanAmount: 0,
            economyData: {},
            rateData: {},
            results: []
        };
    }

    handleLoanChange = (e) => {
        this.setState({ loanAmount: e.target.value })
    }

    handleEconomyChange = (economyData) => {
        this.setState({ economyData })
    }

    handleRateChange = (rateData) => {
        this.setState({ rateData })
    }
    
    calculateResults = () => {
        if (this.allInputAvalible()) {
            var results = this.allTheHeavyMaths();

            this.setState({ results })
        }
    }

    allTheHeavyMaths = () => {
        var results = []
        var accumulatedAmount = this.state.loanAmount;
        var accumulatedCost = 0;

        for (var i = 1; i < 11; i++) {
            var cost = 0;

            if (this.state.rateData.term >= i) {
                cost = (this.state.rateData.proportion * this.state.rateData.rate * accumulatedAmount) +
                    ((1 - this.state.rateData.proportion) * this.state.economyData[i - 1].y * accumulatedAmount)

            }
            else {
                cost = this.state.economyData[i - 1].y * accumulatedAmount;
            }
            accumulatedAmount = Number(accumulatedAmount) + Number(cost);
            accumulatedCost = Number(accumulatedCost) + Number(cost)
            results.push({ year: i, cost: accumulatedCost })
        }
        return results
    }

    allInputAvalible = () => {
        return this.state.loanAmount !== 0 &&
            !this.isEmptyObject(this.state.economyData) &&
            !this.isEmptyObject(this.state.rateData)
    }

    isEmptyObject = (obj) => {
        return Object.entries(obj).length === 0 && obj.constructor === Object
    }

    render() {
        return (
            <React.Fragment>
                <Loan onAmountChange={this.handleLoanChange} onAddRate={this.handleRateChange} />
                <Economy onSimulateEconomy={this.handleEconomyChange} />
                <button className="btn btn-dark" onClick={this.calculateResults}>Calculate Summary</button>
                <br />
                <br />
                <Summary results={this.state.results} />
            </React.Fragment>
        );
    }
}
