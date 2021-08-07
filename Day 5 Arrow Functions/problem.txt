/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

function modifyArray(nums) {
    let arrayValues=[]
    nums.map((e,i)=>{
        if(e%2==0) arrayValues.push(e*2)
        else arrayValues.push(e*3)
    })
    return arrayValues
}

function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}