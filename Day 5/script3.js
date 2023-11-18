function modifyArray(nums) {
    return nums.map((item)=>{
      return item%2==0 ? item*=2 : item*=3
    })
}