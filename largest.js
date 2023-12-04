let a = [1,2,3,13,4,5,6];

largest=a[0];
for (let i =1; i < a.length; i++) {
    if(largest<a[i]){
        largest=a[i]
    }
}

console.log(largest);