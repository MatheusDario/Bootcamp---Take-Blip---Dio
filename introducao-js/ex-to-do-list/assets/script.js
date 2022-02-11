const form = document.getElementById("task-form");
const listaTarefas = document.getElementById("tasks");

form.onsubmit = function (e) {
    e.preventDefault();
    const campoDigitado = document.getElementById("task-input");
    addTarefa(campoDigitado.value);
    form.reset();
}

function addTarefa(digitada) {
    const tarefaContainer = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const tarefaSpan = document.createElement('span');
	const tarefaDigitadaNode = document.createTextNode(digitada);

	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', digitada);
	novaTarefa.setAttribute('id', digitada);

	tarefaSpan.setAttribute('span', digitada);
	tarefaSpan.appendChild(tarefaDigitadaNode);

	tarefaContainer.classList.add('task-item');
	tarefaContainer.appendChild(novaTarefa);
	tarefaContainer.appendChild(tarefaSpan);

	listaTarefas.appendChild(tarefaContainer);
}
