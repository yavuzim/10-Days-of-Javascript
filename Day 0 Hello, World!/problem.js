function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable)   
}

function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}
