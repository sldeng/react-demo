import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <input type="checkbox" /> <span>已完成/ 未完成</span>
            </div>
        )
    }
}
