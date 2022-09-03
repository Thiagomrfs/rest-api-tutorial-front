import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import CreateTodo from './components/CreateTodo/CreateTodo';

import api from './services/api';

function App() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		api.get('/todos')
			.then(res => {
				setTodos(res.data)
			}).catch(err => {
				console.log(err)
			})
	}, [])


	return (
		<div className="app">
			<CreateTodo />
			<TodoList todos={todos}/>
		</div>
	);
}

export default App;
