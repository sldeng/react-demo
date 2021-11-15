
import './App.css';
import {Component} from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello React
//       </header>
//     </div>
//   );
// }
export default class App extends Component{
  state ={
    todos:[
        {name:'吃饭',done:true,id:1},
        {name:'睡觉',done:false,id:2},
        {name:'打豆豆',done:false,id:3},
        {name:'看片',done:true,id:4},
        {name:'吃饭',done:false,id:5},
    ]
  }
  addFunction=(fuckObj)=>{
    // console.log('1111111')
    const temp = this.state.todos
    const newList = [fuckObj,...temp]
    this.setState({
      todos:newList
    })
  }
  delRow=(index)=>{
    
  }
  render(){
    return (
      <div className="layout">
      最外层元素
      <Header  addFunction={this.addFunction}/>
      <List todos={this.state.todos} delete={delRow}/>
      <Footer/>
  </div>
    )
  }
}

