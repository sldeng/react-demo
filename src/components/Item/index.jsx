import React, { Component } from 'react'
import './index.css'
class Item extends Component{
    render(){
        const {name,done} = this.props
        return(
            <div className="item">
                <span>
                    <input type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                </span>
                <button style={{display:'none'}}>删除</button>
            </div>
        )
    }
}
export default Item
