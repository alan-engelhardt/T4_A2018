const bg = document.querySelector("#bg")
const svg = document.querySelector("template").content

function addFlake(){
	const clone = svg.cloneNode(true)
	const flake = clone.querySelector(".star")
	const randomX = Math.random()*100
	const randomY = Math.random()*100
	flake.style.transform = "scale("+Math.random()*1.5+")"
	flake.style.top = randomX+"%"

	flake.style.left = randomY+"%"
	flake.style.transform = "rotate("+Math.random()*359+"deg)"
	bg.appendChild(clone)
}

for(let i=0; i<500; i++){
	addFlake()
}
