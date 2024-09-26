//your JS code here. If required.
let submission= new Promise((Resolve,Reject){
	if (Age>18) {
		Resolve(Name);
	}
	else{
		Reject(Name);
	}
});
submission.then(setTimeout(function(Name) {
	console.log(`Welcome,${Name}. You can vote.`)
}),4000)
.catch(setTimeout(function(Name) {
	console.log(`Oh sorry ${Name}. You aren't old enough.`)
}))