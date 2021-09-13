/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

function modifyArray(nums) {
    let arr = nums.map(item => {
        if (item % 2 == 0) return item * 2
        else return item * 3
    })
    return arr
}

function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);

    console.log(modifyArray(a).toString().split(',').join(' '));
}