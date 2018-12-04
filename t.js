const bg = document.querySelector("#bg");
const flake0 = document.querySelector(".flake")
let cntFlakes = 0

console.log(bg)

function snow(flake){
	const rand = Math.random()
	let ypos = 0
	function fall(){
		ypos++
		flake.style.top = ypos/3*rand + "vh"
		if(ypos/3*rand > 100){
			ypos = 0
		}

		requestAnimationFrame(fall)
	}
	fall()
}


function addFlake(){
	const newFlake = flake0.cloneNode(true)
	newFlake.style.left = Math.random()*100 + "vw"
	newFlake.style.transform = "scale("+Math.random()+")"
	bg.appendChild(newFlake)
	snow(newFlake)
}

for(let i=0; i<200; i++){
	addFlake()
}
