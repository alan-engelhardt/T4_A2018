const bg = document.querySelector("#bg")
const flake0 = document.querySelector(".flake")
let cntFlakes = 0
let ypos = 0

function fall(){
	ypos++
	flake0.style.top = ypos + "px"
	const max = bg.clientHeigt
	if(ypos > max){
		ypos = 0
	}
	requestAnimationFrame(fall)
}

function addFlake(){
	const newFlake = flake0.cloneNode(true)
	newFlake.style.left = Math.random()*100 + "vw"
	newFlake.style.transform = "scale("+Math.random()+")"
	bg.appendChild(newFlake)
}

fall()
