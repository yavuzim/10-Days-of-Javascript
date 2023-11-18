function getMaxLessThanK(n,k){
    let maxValue = 0
    for(let i=1; i<n; i++){
        for(let j=i+1; j<=n; j++){
            if((i&j)<k){
                maxValue = Math.max(maxValue, (i&j))
            }
        }
    }
    return maxValue
}