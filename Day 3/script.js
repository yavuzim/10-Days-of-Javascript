function getSecondLargest(nums) {
    // Complete the function
    nums = nums.filter((value, index, self) => self.indexOf(value) === index);
    
    nums.sort((a,b)=>a-b)
    
    return nums[nums.length-2]
}