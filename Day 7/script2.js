function regexVar() {
    const re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/;    
    return re
}
`
^: Desenin metnin başında olması gerektiğini belirtir.
(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.): Bu kısım, "Mr.", "Mrs.", "Ms.", "Dr." veya "Er." ile başlayan kelimeleri ifade eder. () parantez içindeki ifadelerden birinin olması beklenir.
[a-zA-Z]+: Bu kısım, bir veya daha fazla büyük veya küçük harf içeren bir ifadeyi ifade eder.
$: Desenin metnin sonunda olması gerektiğini belirtir.

`