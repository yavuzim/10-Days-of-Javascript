function getLetter(s) {
    let letter;
    let _value = s[0];
    switch(_value){
        case 'a' || 'e' || 'i' || 'o' || 'u': letter='A'; break;
        case 'b' || 'c' || 'd' || 'f' || 'g': letter='B'; break;
        case 'h' || 'j' || 'k' || 'l' || 'm': letter='C'; break;
        default: letter='D'; break;
    }    
    return letter;
}

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}