import View from './view.js';
import Model from './model.js';

export default class Controller {
	constructor() {
		this.view = new View();
		this.model = new Model();

		this.updateTodoListModel(this.model.todoList);
		this.handleAddTodo();
	}

	updateTodoListModel = () => {
		this.model.bindUpdateTodoList(this.updateTodoList);
	}

	updateTodoListView = () => {
		this.view.renderTodoList(this.model.todoList);
		this.handleRemoveTodoView();
	}

	handleAddTodoView = () => {
		this.view.bindAddTodo(this.addTodo);
	}

	handleRemoveTodoView = () => {
		this.view.bindRemoveTodo(this.removeTodo);
	}

	addTodoModel = todo => {
		this.model.addTodo(todo);
	}

	removeTodoModel = todo => {
		this.model.removeTodo(todo)
	}
}