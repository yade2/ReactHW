import React from 'react';

class Score extends React.Component{
  constructor(props){
    super(props);
    this.state={score:0}
  }
  
  increment = () => {
    this.setState({
        //update tells react this needs to be reendered//
      score: this.state.score + 100
    },  () => {
        console.log(this.state.count)
    });
  }
 
  decrement = () => {
    this.setState({
      score: this.state.score - 100 < 0 ? 0 : this.state.score - 100
    });
  }

  reset = () => {
    this.setState({score:0, points:0});
  }

  render(){
    
    return(
      <div className="score">
            <h3>Score: {this.state.score}</h3>
            <div>
            <button id="dec" onClick={this.decrement}>Decrease</button>
			<button id="inc" onClick={this.increment}>Inscrease</button>
			<button id="reset" onClick={this.reset}>Reset</button>
            </div>
      </div>
    );
  }
}
export default Score;