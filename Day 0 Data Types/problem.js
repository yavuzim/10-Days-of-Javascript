function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;    
    const firstString = 'HackerRank ';
    
    console.log(firstInteger+parseInt(secondInteger))
    
    console.log(firstDecimal+Number(secondDecimal))
    
    console.log(firstString+secondString)
}


function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();    
    performOperation(secondInteger, secondDecimal, secondString);
}