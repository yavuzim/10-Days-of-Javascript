function getGrade(score) {
    let grade;
    // Write your code here
    if(score<30) grade="A"
    if(score<26) grade="B"
    if(score<21) grade="C"
    if(score<16) grade="D"
    if(score<11) grade="E"
    if(score<6) grade="F"
    return grade;
}
