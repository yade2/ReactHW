import React, {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.setState = {
            count: 0,
            message: 'hey, how are you?'
        }
    }
    
       
    increment() {
        this.setState({
            count: this.state.count + 1
        }, ()=>{
            console.log(' callback value ' + this.state.count)
        
        })
    }