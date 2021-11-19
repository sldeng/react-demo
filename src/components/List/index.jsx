import React ,{ Component} from 'react'
import './index.css'
import PubSub from 'pubsub-js'
import Item from '../Item'
class List extends Component{
    state={
        name:'ceshi'
    }
    // PubSub.subscribe('MY TOPIC', mySubscriber);
    //组件第一次渲染完成，此时dom节点已经完成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
    
    componentDidMount(){
        this.pubToken =  PubSub.subscribe('fuckCCP', (msg,data)=>{
            console.log(msg,data)
            this.setState({
                name:data.name
            })
        })
    }
    render(){
        return(
            <div className="list">
            <h1>{this.state.name}</h1>
                {
                    this.props.todos.map((it,index)=>{
                        return  <Item key={it.id} index={index} todos={it} unique={'11'} delRow={this.props.delRow} singleChange={this.props.singleChange}/>
                    })
                }
              
            </div>
        )
    }
}
export default List