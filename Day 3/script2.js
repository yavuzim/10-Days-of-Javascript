function reverseString(s) {
    try{
        let reverseValue=""
        reverseValue = s.split('').reverse().join('')
        s=reverseValue
    }catch(error){
        console.log(error.message)
    }finally{
        console.log(s)
    }
}