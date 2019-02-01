// We start by importing modules using import statement.
//Let's import `React` namespace from `react` module.
import React from 'react';
// Then render from `react-dom` module.
import { render } from 'react-dom';
//Then our styles.css
import './style.css';

// Let's create a component called `App` inheriting from React.Component
class App extends React.Component {
	// Let's create a property of our component called state that will mainatain
	//two numbers.
	state = {
		firstOperand: 0,
		secondOperand: 0
	};

	updateInputValue = (evt) => {
    const { name, value } = evt.target;
    //Let's use the `setState()` to  update the user interface in response to
    // event handlers and server responses.
		this.setState({
      // Convert string to integer
			[name]: parseInt(value)
		});
	};

  //Let's create a method to perform addition and show result.
	add = () => {
		const { firstOperand, secondOperand } = this.state;
		alert('Addition Result: ' + (firstOperand + secondOperand));
	};

  // Let's create a method to perform substraction and show result.
	substract = () => {
		const { firstOperand, secondOperand } = this.state;
		alert('Subtraction Result:  ' + (firstOperand - secondOperand));
	};

  // Let's create a method to perform division and show result.
	divide = () => {
		const { firstOperand, secondOperand } = this.state;
		alert('Division Result: ' + firstOperand / secondOperand);
	};

  // Let's create a method to perform multiplication and show result.
	multiply = () => {
		const { firstOperand, secondOperand } = this.state;
		alert('Multiplication Result: ' + firstOperand * secondOperand);
	};

  // Let's create a method to perform modulus and show result.
	modulus = () => {
		const { firstOperand, secondOperand } = this.state;
		alert('Modulus Result: ' + firstOperand % secondOperand);
	};

  // Let's come rebder our ui elements using JSX
	render() {
		return (
			<div>
				<div>
					<input
						placeholder=""
						value={this.state.inputValue}
						name="firstOperand"
						onChange={(evt) => this.updateInputValue(evt)}
					/>
					<input
						placeholder=""
						value={this.state.inputValue}
						name="secondOperand"
						onChange={(evt) => this.updateInputValue(evt)}
					/>
				</div>
				<div>
					<button onClick={this.add}>+</button>
					<button onClick={this.substract}>-</button>
					<button onClick={this.divide}> / </button>
					<button onClick={this.multiply}> * </button>
					<button onClick={this.modulus}> % </button>
				</div>
			</div>
		);
	}
}
// Let's now come render our App component
render(<App />, document.getElementById('root'));
