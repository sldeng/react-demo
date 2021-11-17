import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    render() {
        const {todos} = this.props
        const completed = todos.filter(it=>{ return it.done})
        console.log(todos.length === completed.length,'completed')
        return (
            <div className="footer">
                <input type="checkbox"  onChange={this.props.allchange} checked={todos.length === completed.length &&todos.length!==0} /> <span>已完成 <span className="count">（{completed.length}）</span>/ 未完成（{todos.length-completed.length}）</span>
            </div>
        )
    }
}
