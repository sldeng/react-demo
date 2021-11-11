import React, { Component } from 'react'
import './index.css'
class Item extends Component{
    render(){
        return(
            <div className="item">
                <span>
                    <input type="checkbox" />
                
                </span>
            </div>
        )
    }
}
export default Item
