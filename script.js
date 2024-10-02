document.getElementById('btn').addEventListener('click',function (p) {
	p.preventDefault();

	let age= document.getElementById('age').value;
	let name= document.getElementById('name').value;
	
	let submission= new Promise((resolve,reject)=> {
		if (age>=18) {
			resolve(name);
		}
		else{
			reject(name);
		}
	});
	
	submission.then( (name)=> {
		setTimeout(()=> {
			alert(`Welcome,${name}. You can vote.`);
		},4000);
	})
	.catch( (name)=>  {
		setTimeout(()=> { 
			alert(`Oh sorry ${name}. You aren't old enough.`);
		},4000);
	});
});