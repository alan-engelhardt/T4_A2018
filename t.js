const bg = document.querySelector("#bg")
const temp = document.querySelector("template").content
let cnt = 0

function addFlake(){
	const clone = temp.cloneNode(true)
	const flake = clone.querySelector(".flake")
	const randomX = Math.random()*100
	const randomD = Math.random()+1
	const randomS = Math.random()
	//flake.style.transform = "scale("+randomS+")"
	flake.style.left = randomX+"%"
	flake.style.top = 0
	let l=0
	let intv = setInterval(function(){
		l++
		flake.id="f"+l
		//flake.style.top = randomD*l/10 + "%"
		flake.style.transform = "translateY("+randomD*l/10+"vh) scale("+randomS+")"
		bg.appendChild(clone)
		if(l >= 900){
			l=0
		}
	}, 10)
	}
/*
for(let i=0; i<100; i++){
	addFlake()
}

*/

let snowIntv = setInterval(function(){
	cnt++
	addFlake();
	if(cnt>200){
		clearInterval(snowIntv)
	}
}, 50)

