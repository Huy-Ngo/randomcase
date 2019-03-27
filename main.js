function random (str) {
	str = str.split("")
	console.log(str)
	for (let i = 0; i < str.length; i++) {
		let cas = Math.random() < 0.5 ? 0 : 1;
		if (cas < 0.5) {
			str[i] = str[i].toUpperCase()
		} else {
			str[i] = str[i].toLowerCase()
		}
	}
	console.log(str)
	return str.join("")
}

const button = document.querySelector("#button")

button.addEventListener("click", () => {
	const input = document.querySelector("#input").value
	output = random(input)
	out = document.querySelector("#output")
	out.innerHTML = output
})