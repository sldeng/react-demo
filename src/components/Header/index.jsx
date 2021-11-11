import React, { Component } from 'react';
import './index.css'
export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <input type="text" placeholder="Enter键加一" />
            </div>
        );
    }
}
