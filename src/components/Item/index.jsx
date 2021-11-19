import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
Item.propTypes = {
    index: PropTypes.number,
    todos:PropTypes.object,
    unique:PropTypes.string.isRequired

  };
export default Item
