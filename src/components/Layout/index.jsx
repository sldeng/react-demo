import React, { Component } from 'react';
import './index.css'
import Header from '../Header';
import List from '../List';
import Footer from '../Footer';
export default class Layout extends Component{
    render(){
        return (
            <div className="layout">
                最外层元素
                <Header/>
                <List/>
                <Footer/>
            </div>
        )
    }
}
