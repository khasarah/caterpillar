const menu = document.getElementById('context-menu');

function show() {
	menu.style.display = "block";
}

function hide() {
	menu.style.display = "none";
}

async function send() {
	let file = document.getElementById('file').files[0] ? 1 : 0;
	await alert(["Наипать решил? фотку кидай", "Фотка принята, давай ищо"][file]);
	if (file) {
		location.reload()
	}
}

