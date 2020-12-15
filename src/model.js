export default class Model {
	constructor() {
		this.todoList = JSON.parse(localStorage.getItem('todo')) ?? [];
	}

	bindUpdateTodoList = updateTodoList => {
		this.updateTodoList = updateTodoList;
	}
	
	addTodo = todoToAdd => {
		this.todoList.push(todoToAdd);
		localStorage.setItem('todo', JSON.stringify(this.todoList));
		this.updateTodoList(this.todoList);
	}

	removeTodo = todoToRemove => {
		const todoIndexToRemove = this.todoList.findIndex(todo => todo === todoToRemove);
		this.todoList.splice(todoIndexToRemove, 1);
		localStorage.setItem('todo', JSON.stringify(this.todoList));
		this.updateTodoList(this.todoList);
	}
}