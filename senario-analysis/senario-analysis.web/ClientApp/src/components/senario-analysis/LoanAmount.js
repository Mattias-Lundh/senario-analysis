import React, { Component } from 'react';

export class LoanAmount extends Component {
    static displayName = LoanAmount.name;

    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="card bg-light mb-3">
                        <div className="card-header">Loan</div>
                            <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="loan-amount">Amount</label>
                                <input className="form-control" id="loan-amount" type="number" aria-describedby="loan-amount-help" onChange={(e) => this.props.onAmountChange(e)}/>
                                <small id="loan-amount-help" className="form-text text-muted">The amount of money you would like to borrow.</small>
                            </div>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
