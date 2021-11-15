import React ,{ Component} from 'react'
import './index.css'
import Item from '../Item'
class List extends Component{

    render(){
        return(
            <div className="list">
                {
                    this.props.todos.map(it=>{
                        return <Item key={it.id} {...it}/>
                    })
                }
              
            </div>
        )
    }
}
export default List