import React, { Component } from 'react';

export class LoanRates extends Component {
    static displayName = LoanRates.name;

    constructor(props) {
        super(props);
        this.state = { rates: [] };
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div class="card bg-light mb-3">
                        <div class="card-header">Rates</div>
                        <div class="card-body">
                            <div class="form-check">
                                <label className="badge badge-dark">Type</label><br />
                                    <input id="fixed" className="form-check-input" name="rate-builder-type" type="radio" value="fixed" />
                                    <label for="fixed" className="form-check-label">Fixed</label><br />

                                    <input id="floating" className="form-check-input" name="rate-builder-type" type="radio" value="floating" />
                                    <label for="floating" className="form-check-label">Floating</label><br />

                                <label className="badge badge-dark">Term</label><br />
                                <input id="years" className="form-check-input" type="number" />
                                <label for="years" className="form-check-label">Years</label><br /><br />

                                <label className="badge badge-dark">Proportion</label><br />
                                <input id="proportion" className="form-check-input" type="number" min="1" max="100" />
                                <label for="proportion" className="form-check-label">Proportion</label><br />

                                <label className="badge badge-dark">Rate</label><br />
                                <input id="rate" className="form-check-input" type="number" min="0" step="0.01" />
                                <label for="rate" className="form-check-label">Rate</label><br />

                            </div>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

// aria-describedby="rate-builder-type-help"
// <small id="rate-builder-type-help" class="form-text text-muted">The type of rate. <mark>fixed</mark> or <mark>floating</mark></small> -- DELETE US