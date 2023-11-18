Rectangle.prototype.area = function(){
    return this.w * this.h
}
class Square extends Rectangle{
    constructor(x){
        super(x,x);
    }
}