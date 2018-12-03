const bg = document.querySelector("#bg")
const svg = document.querySelector("template").content
let cnt = 0

function addFlake(){
	const clone = svg.cloneNode(true)
	const flake = clone.querySelector(".star")
	const randomX = Math.random()*100
	const randomD = Math.random()+1
	const randomS = Math.random()

	flake.style.transform = "rotate("+Math.random()*359+"deg)"
	flake.style.left = randomX+"%"
	flake.style.top = 0
	let l=0
	let intv = setInterval(function(){
		l++
		flake.style.top = randomD*l/10 + "%"
		flake.style.transform = "rotate("+l*5+"deg) scale("+randomS+")"
		bg.appendChild(clone)
		if(randomD*l >= 1000){
			clearInterval(intv)
			console.log(bg.lastChild)
			bg.removeChild(bg.lastChild)
		}
	}, 10)
	}

let snowIntv = setInterval(function(){
	cnt++
	addFlake();
	if(cnt>500){
	   clearInterval(snowIntv)
	   }
}, 10)
