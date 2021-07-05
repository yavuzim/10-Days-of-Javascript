function vowelsAndConsonants(s) {
    let _array=s.split('');
    
    let vowel =[], consonant = [];
    for(let i=0; i<_array.length; i++){
        _array[i]=='a' || _array[i]=='e' || _array[i]=='i' || _array[i]=='o' || _array[i]=='u' ? vowel.splice(i,0,_array[i]) : consonant.splice(i,0,_array[i])
    } 
    let letters = vowel.join("")+""+consonant.join("");
    for(let i=0; i<letters.length; i++){
        console.log(letters[i])
    }    
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}