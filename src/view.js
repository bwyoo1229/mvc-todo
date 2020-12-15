export default class View {
	constructor() {
		this.initView();
	}

	initView = () => {
		const app = document.getElementById('app');
		const inputField = this.createInputField();
		const todoListContainer = this.createTodoListContainer();

		app.appendChild(inputField);
		app.appendChild(todoListContainer);
	}

	createInputField = () => {
		const inputContainer = this.createInputContainer();
		const input = this.createInput();
		const button = this.createSubmitButton();

		inputContainer.appendChild(input);
		inputContainer.appendChild(button);

		return inputContainer;
	}

	createInputContainer = () => {
		const inputContainer = document.createElement('div');
		inputContainer.setAttribute('id', 'input-contianer');

		return inputContainer;
	}

	createTodoListContainer = () => {
		const todoListContainer = document.createElement('div');
		todoListContainer.setAttribute('id', 'todo-list-container');

		return todoListContainer;
	}

	createInput = () => {
		const input = document.createElement('input');
		input.setAttribute('id', 'input');

		return input;
	}

	createSubmitButton = () => {
		const submit = document.createElement('button');
		submit.textContent = 'submit'
		submit.setAttribute('id', 'submit');

		return submit;
	}

	bindAddTodo = addTodo => {
		const button = document.getElementById('submit');
		button.addEventListener('click', () => addTodo(this.getInputTodo()));
	}

	getInputTodo = () => {
		const input = document.getElementById('input');

		return input.value;
	}

	renderTodoList = todoList => {
		const todoListContainer = document.getElementById('todo-list-container');
		todoListContainer.innerHTML = '';
		for (let todo of todoList) {
			const todoList = document.createElement('div');
			todoList.textContent = `${todo}`;
			const removeButton = this.createRemoveButton();

			todoList.appendChild(removeButton);
			todoListContainer.appendChild(todoList);
		}
	}

	createRemoveButton = () => {
		const remove = document.createElement('button');
		remove.setAttribute('class', 'remove');
		remove.textContent = 'remove'

		return remove;
	}

	bindRemoveTodo = removeTodo => {
		const remove = document.getElementsByClassName('remove');

		for (let button of remove) {
			button.addEventListener('click', event => {
				removeTodo(event.target.parentNode.childNodes[0].textContent);
			});
		}
	}
}