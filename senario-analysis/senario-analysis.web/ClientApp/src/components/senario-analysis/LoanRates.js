import React, { Component } from 'react';

export class LoanRates extends Component {
    static displayName = LoanRates.name;

    constructor(props) {
        super(props);
        this.state = {
            rate: {created: false, term: '0', proportion: '0.00', rate: '0.00'},
            smallCardStyle: { 'maxWidth': '18rem' },
            floatingProportion: '100%'
        };
    }

    renderFloatingProportion = () => {
        if (this.state.rate.created) {
            return this.state.floatingProportion + ' for ' + this.state.rate.term + ' years'
        }
        return ''
    }

    rateInputProvided = () => {
        return this.state.rate.term !== '0' &&
            this.state.rate.proportion !== '0.00' &&
            this.state.rate.rate !== '0.00'
    }

    calculateFloatingProportion = () => {
        return (1 - Number(this.state.rate.proportion)) * 100 + '%'
    }

    handleAddRate = (e) => {
        e.preventDefault();

        if (this.rateInputProvided()) {
            const rate = { ...this.state.rate, created: true }
            this.setState({ rate, floatingProportion: this.calculateFloatingProportion() })

            this.props.onAddRate(this.state.rate)
        }
    }

    handleTermChange = (event) => {

        const rate = { ...this.state.rate, term: event.target.value }
        this.setState({ rate });
    }

    handleProportionChange = (event) => {
        const rate = { ...this.state.rate, proportion: event.target.value }
        this.setState({ rate });
    }

    handleRateChange = (event) => {
        const rate = { ...this.state.rate, rate: event.target.value }
        this.setState({ rate });
    }

    renderFixedRate = () => {
        if (this.state.rate.created) {
            return <div className="card text-white bg-secondary mb-3" style={this.state.smallCardStyle}>
                            <div className="card-header">Fixed rate </div>
                            <div className="card-body">
                                <label className="badge badge-dark">Term</label><br />
                                <div>{this.state.rate.term} years</div>

                                <label className="badge badge-dark">Proportion</label><br />
                                <div>{Number(this.state.rate.proportion) * 100} %</div>

                                <label className="badge badge-dark">Rate</label><br />
                                <div>{Number(this.state.rate.rate) * 100} %</div>
                            </div>
                        </div>
        }

        return <span></span>

            
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="card bg-light mb-3">
                        <div className="card-header">Rates</div>
                        <div className="card-body">
                            <div className="form-check form-group">
                                <label className="badge badge-dark">Type</label> <br />
                                <div>Fixed</div>

                                <label className="badge badge-dark">Term</label><br />
                                <input id="years" className="form-control" type="number" min="1" aria-describedby="term-help" onChange={(e) => this.handleTermChange(e)} />
                                <small id="term-help" className="form-text text-muted">For how many <mark>Years</mark> will the rate be active?</small>

                                <label className="badge badge-dark">Proportion</label><br />
                                <input id="proportion" className="form-control" type="number" min="0.01" step="0.01" onChange={(e) => this.handleProportionChange(e)}/>
                                <small id="term-help" className="form-text text-muted">What proportion of the total loan will the rate effect</small>

                                <label className="badge badge-dark">Rate</label><br />
                                <input id="rate" className="form-control" type="number" min="0.01" step="0.01" onChange={(e) => this.handleRateChange(e)}/>
                                <small id="term-help" className="form-text text-muted">What is the interest rate charged</small><br />

                                <button className="btn btn-dark" onClick={this.handleAddRate}>Use Rate</button>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card text-white bg-secondary mb-3" style={this.state.smallCardStyle}>
                                <div className="card-header">Floating rate </div>
                                <div className="card-body">
                                    <label className="badge badge-dark">Term</label><br />
                                    <div>In perpetuity</div>

                                    <label className="badge badge-dark">Proportion</label><br />
                                    <div>covering the proportion of the loan that does not have a fixed rate. { this.renderFloatingProportion() }</div>

                                    <label className="badge badge-dark">Rate</label><br />
                                    <div>As the economy dictates</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            { this.renderFixedRate() }
                        </div>
                    </div>
                </div>


            </React.Fragment>
        );
    }
}