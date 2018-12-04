const bg = document.querySelector("#bg");
const flake0 = document.querySelector(".flake")
let cntFlakes = 0
let delay = 3

console.log(bg)

function snow(flake){
	const rand = Math.random()
	let ypos = 0
	function fall(){
		ypos++
		flake.style.top = ypos/delay*rand + "vh"
		if(ypos/delay*rand > 100){
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

let intv = setInterval(()=>{
	cntFlakes++
	if(cntFlakes<200){
		addFlake()
	}
}, 100)

/*
for(let i=0; i<200; i++){
	addFlake()
}
*/
