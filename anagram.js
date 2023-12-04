let a = 'siddhesh'
let b = 'heshddis'

function anagram(string1,string2){
    str1 = string1.split('').sort().join();
    str2 = string2.split('').sort().join();
    if(str1==str2){
       return true;
    }
    else{
        return false;
    }
}

c=anagram(a,b)
console.log(c);