import React, { Component } from 'react';

export class LoanAmount extends Component {
    static displayName = LoanAmount.name;

    render() {
        return (
            <React.Fragment>
                <form>
                    <div class="form-group">
                        <label for="loan-amount">Loan Amount</label>
                        <input className="form-control" id="loan-amount" type="text" aria-describedby="loan-amount-help" />
                        <small id="loan-amount-help" class="form-text text-muted">The amount of money you would like to borrow.</small>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
