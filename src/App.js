
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
    const demo = this.state.todos
    demo.splice(index,1)
    console.log(demo)
    this.setState({
      todos:demo
    })
  }
  allchange=(event)=>{
    // console.log('1111111')
    const {checked} = event.target
    const { todos } = this.state
    todos.forEach(it=>{
      it.done = checked
    })
    this.setState({
      todos
    })
  }
  singleChange=(index)=>{
    return(event)=>{
      // debugger
      const {checked} = event.target
      const { todos } = this.state
      todos[index].done = checked
      this.setState({
        todos
      })
      
    }
  }
  render(){
    return (
      <div className="layout">
      最外层元素
      <Header  addFunction={this.addFunction}/>
      <List todos={this.state.todos} delRow={this.delRow} singleChange={this.singleChange} />
      <Footer allchange={this.allchange} todos={this.state.todos}/>
  </div>
    )
  }
}

