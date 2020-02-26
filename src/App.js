import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Form from './component/Form';
import List from './component/List';

class App extends Component {
	state = {
		data: '',
		todos: ['study'],
	};

	handleInputChange = ele => {
		this.setState({
			data: ele.target.value,
		});
	};

	handleInputSubmit = () => {
		const todos = this.state.todos;
		todos.push(this.state.data);
		this.setState({
			todos: todos,
			data: '',
		});
	};

	handleInputDelet = i => {
		const todos = this.state.todos;
		todos.splice(i, 1);
		this.setState({
			todos,
		});
	};

	render() {
		return (
			<div className='App'>
				<List
					handleInputDelet={this.handleInputDelet}
					todos={this.state.todos}
				/>
				<Form
					data={this.state.data}
					handleInputSubmit={this.handleInputSubmit}
					handleInputChange={this.handleInputChange}
				/>
			</div>
		);
	}
}

export default App;
