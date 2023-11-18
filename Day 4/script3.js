class Polygon{
    constructor(arr){
        this.arr = arr
    }
    perimeter(){
        let sum = 0
        this.arr.forEach((i)=>{sum+=i})
        return sum
    }
}