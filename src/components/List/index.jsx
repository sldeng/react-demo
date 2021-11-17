import React ,{ Component} from 'react'
import './index.css'
import Item from '../Item'
class List extends Component{

    render(){
        return(
            <div className="list">
                {
                    this.props.todos.map((it,index)=>{
                        return <Item key={it.id} index={index} todos={it} delRow={this.props.delRow} singleChange={this.props.singleChange}/>
                    })
                }
              
            </div>
        )
    }
}
export default List