function sides(literals, ...expressions) {
    let [A,P] = expressions
    return [(P+Math.sqrt(Math.pow(P,2)-16*A))/4, (P-Math.sqrt(Math.pow(P,2)-16*A))/4]
        .sort((a,b)=>a-b)
}