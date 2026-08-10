//your JS code here. If required.
let outputElement = document.getElementById("output");

let array = [1,2,3,4];

function transformationOfArray(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
		resolve(array);
	},1000)
	})

	
}

transformationOfArray()
	.then((arr)=>{
	const evenNumbers = arr.filter((num)=>{
		return num % 2 === 0
	}) 

	return new Promise((resolve)=>{
		
			outputElement.textContent = evenNumbers;
			resolve(evenNumbers)
		
	})
})
.then((evenNumbers)=>{
	const multipliedNumbers = evenNumbers.map((items)=>{
		return items*2
	})

	return new Promise((resolve)=>{
		setTimeout(()=>{
			outputElement.textContent = multipliedNumbers
			resolve()
		},2000)
	})
})