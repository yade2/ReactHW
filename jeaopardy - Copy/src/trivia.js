import React from 'react'
import Score from './score'
import './index.css'

class App extends React.Component {
	state = {
		score: 0,
		category: "",
		points: 0, 
		clue: "",
		answer: "",
		value: false
	}

	getHint = () => {

		const url = 'http://jservice.io/api/random'

		fetch(url) 
			.then((res) => {  
				return res.json();
			})
			.then((data) => {
				const clueAnswer = data[0];
				console.log(clueAnswer); 
				this.setState({
					category: clueAnswer.category.title,
					points: clueAnswer.value,
					// clue: clueAnswer.question,
					answer: clueAnswer.answer,
					//value: false
				});
			});
	}

	displayAnswer = () => { 
		this.setState({value: !this.state.value});
	}

	render() {
		return (
			<div className='app'>
				<h1 className='title'> Let's Play Yadeoperdy!</h1>
				<Score title="Score" value={this.state.score} points= {this.state.points}/>
				<h2>Let's Play!</h2>

				<button className="getHint_btn" onClick={this.getHint}> Random Trivia Question</button>

				<div className = "clueAnswer">
				<div className="category">Category - {this.state.category}</div>
				<div className="points">Points - {this.state.points} </div>
				<div className="clue">Clue - {this.state.clue} </div>
				</div>
				<button id="reveal" onClick={this.displayAnswer}> Click to Reveal Answer </button>
				{this.state.value? <p className="Answer"> Answer: {this.state.answer}</p>: null}
			</div>
			)
	}
}
export default App;