import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import './index.css'
export default class Header extends Component {
    enterFunction=(event)=>{
        const {keyCode,target} = event
        console.log(keyCode,target,'event')
        if(keyCode===13&&target.value){
            const demo = {name:target.value,done:false,id:nanoid()}
            this.props.addFunction(demo)
        }
        
    }
    render() {
        return (
            <div className="header">
                <input type="text" placeholder="Enter键加一" onKeyUp={this.enterFunction} />
            </div>
        );
    }
}
