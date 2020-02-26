import React, { Component } from 'react';
import { EconomyYearInput } from './EconomyYearInput';

export class Economy extends Component {
    static displayName = Economy.name;

    render() {
        return (
            <React.Fragment>
                <div className="card bg-light mb-3">
                    <div className="card-header">Economy</div>
                    <div className="card-body">
                        <div className="form-check form-group">
                            <EconomyYearInput />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
