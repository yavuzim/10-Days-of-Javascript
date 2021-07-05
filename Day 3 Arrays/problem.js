function getSecondLargest(nums) {
   let largestnum=Math.max.apply(null,nums);
   let arr = [];
   nums.map(i=>{
       i<largestnum ? arr.push(i) : null;
   })
   largestnum = Math.max.apply(null,arr);
   return largestnum
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}