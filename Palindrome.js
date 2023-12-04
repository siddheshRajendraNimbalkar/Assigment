function isPalindrome(str) {
    let b = str.length-1;
    let str2 = str;
    for(let i=0;i<b;i++){
        let x = str[i]
        let y = str2[b]
        if(x!=y){
            return false
        }
        else{
            return true
        }
    }
}

let string = "NAN"

console.log(isPalindrome(string));
