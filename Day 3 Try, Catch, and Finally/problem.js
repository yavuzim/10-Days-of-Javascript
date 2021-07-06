function reverseString(s) {
   try{
    let reversevalue = s.split('').reverse().join('');
    console.log(reversevalue)
    }
    catch(err){
        console.log("s.split is not a function")
        console.log(s)
    }
}

function main() {
    const s = eval(readLine());
    
    reverseString(s);
}