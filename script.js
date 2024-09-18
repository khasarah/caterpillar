const menu = document.getElementById('context-menu');

function show() {
	menu.style.display = "block";
}

function hide() {
	menu.style.display = "none";
}

async function send() {
	let file = document.getElementById('file').files[0];
	let answ;
	file ? answ = 1 :  answ = 0;
	if (answ == 0) {
		await alert("Ты каво наипать решил, новеньки? Скинь фотку.");
		return;
	}

	file.type.split('/')[0] == "image" ? answ = 1 : answ = -1;

	if (answ == -1) {
		await alert("Я же просил фотку, а не документи. Я жду от тебя чесности, новеньки.");
		return;
	}
	
	await alert("Моладец, новеньки, ты мне нравишся. Скинь еще фотку.")
	location.reload()
}

// https://khasarah.github.io/caterpillar/