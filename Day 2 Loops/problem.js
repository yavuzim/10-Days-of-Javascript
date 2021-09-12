function vowelsAndConsonants(s) {
    let vowels = ["a","e","i","o","u"]
    let getChar=s.split("")
    let consonants = []
    getChar.map(e=>{
       if(vowels.indexOf(e) > -1){
           console.log(e)
       }
       else consonants.push(e)
    })
    consonants.map(e=>console.log(e))
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}