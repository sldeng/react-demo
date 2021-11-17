import React, { Component } from 'react'
import './index.css'
class Item extends Component{
    render(){
        const {name,done} = this.props.todos
        return(
            <div className="item">
                <span>
                    <input type="checkbox" checked={done}  onChange={this.props.singleChange(this.props.index)}/>
                    <span>{name}</span>
                </span>
                <button style={{display:'none'}} onClick={()=>{this.props.delRow(this.props.index)}}>删除</button>
            </div>
        )
    }
}
export default Item
