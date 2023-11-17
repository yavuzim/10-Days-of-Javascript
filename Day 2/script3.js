function vowelsAndConsonants(s) {
    let vowels="", consonants=""
    let arrLower = ['a','e','i','u','o']
    let arrUpper = ['A','E','I','U','O']
    
    for(let i=0; i<s.length; i++){
        if(arrLower.includes(s[i]) || arrUpper.includes(s[i])){
            vowels+=s[i]
        }else{
            consonants+=s[i]
        }
    }
    for(let i=0; i<vowels.length; i++){
        console.log(vowels[i])
    }
     for(let i=0; i<consonants.length; i++){
        console.log(consonants[i])
    }
}