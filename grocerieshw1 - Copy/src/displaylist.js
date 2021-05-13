import React, { Component } from 'react'

class Displaylist extends Component{
    handleClick=(index,event)=>{
        console.log(this.props.list[index].isPurchased = !this.props.list[index].isPurchased)
    }
    render(){
        return(
        <div>
            <h3>Adding To Shopping Cart</h3>
            <ul>
                {this.props.list.map((groceries, index)=> groceries.isPurchased ? <li key={index}>Added to List: {groceries.item}, {groceries.quantity}, {groceries.unit} <button className='removeButton' onClick={(event)=> this.handleClick(index, event)} > Later </button> </li>:null)}
            </ul>
        </div>)
    }
}
export default Displaylist;


