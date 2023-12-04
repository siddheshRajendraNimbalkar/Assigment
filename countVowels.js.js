var str = 'awe'

function countVowels(str) {
    let a = ['a','e','i','o','u','A','E','I','O','U'];
    var count=0;
    for(var i = 0;i<str.length;i++){
        var string = str[i];
        for(var j = 0;j<a.length;j++){
            var vowel = a[j]
            if(vowel === string){
                count++
            }
        }
    }
    console.log(count);
}

countVowels(str)