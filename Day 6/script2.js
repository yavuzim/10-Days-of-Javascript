function getDayName(dateString) {
    let dayName;
    // Write your code here
    dateString = dateString.split("/").join("-")
    dayName = new Date(dateString).toLocaleDateString('en-Us',{weekday:'long'})
    return dayName;
}