function getDayName(dateString) {
    let dayName;
    const date=new Date(dateString)
    const dayNames=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayName=dayNames[date.getDay()]
    return dayName;
}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}