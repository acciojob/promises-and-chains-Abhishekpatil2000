//your JS code here. If required.
document.getElementById('btn').addEventListener('click',function (p) {
	p.preventDefault();

 let age= document.getElementById('age').value;
 let name= document.getElementById('name').value;

	if (!age || !name) {
		alert('Inputs cannot be empty');
		return;
	}
	
let submission= new Promise((resolve,reject)=> {
	if (age>=18) {
		Resolve(name);
	}
	else{
		Reject(name);
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