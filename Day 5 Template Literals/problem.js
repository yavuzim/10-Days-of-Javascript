/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
        let s1,s2,area,perimeter
        area=expressions[0]
        perimeter=expressions[1]
        s1=(perimeter+discriminant(area,perimeter))/4;
        s2=(perimeter-discriminant(area,perimeter))/4;
        
        return [s2,s1]
}

function discriminant(area,perimeter){
    return Math.sqrt(Math.pow(perimeter,2)-16*area)
}


function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}