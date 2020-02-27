import React, { Component } from 'react';

export class Summary extends Component {
    static displayName = Summary.name;

    render() {
        return (
            <React.Fragment>
                <div className="card bg-light mb-3">
                    <div className="card-header">Summary</div>
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-1 pl-0 mr-5">
                                    <label className="badge badge-dark">Year</label>
                                    <br />
                                    <label className="badge badge-dark">total interest cost</label>
                                </div>
                                {this.props.results.map(res => 
                                    <div className="col-1 pl-3" key={res.year + res.cost}>
                                        <label className="badge badge-dark">{res.year}</label>
                                    <br />
                                        <label className="badge badge-danger">{Math.round(res.cost * 100) / 100}</label>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
