function getCount(objects) {
    let counter = 0
    objects.forEach((i)=>{
        if(i.x == i.y){
            counter++
        }
    })
    return counter
}