function isPositive(a) {
        if(a>0){            
            return  "YES"
        }
        else{
            throw(a==0 ? new Error("Zero Error") : new Error("Negative Error"))
        }
}

function main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}