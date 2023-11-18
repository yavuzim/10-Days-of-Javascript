function regexVar() {    
    const re = /^([aeiouAEIOU]).+\1$/
    return re;
}

`
^: Girişin başını belirtir.
([aeiou]): Parantez içindeki karakter sınıfı, metnin başındaki bir ünlü harfi (a, e, i, o, u) temsil eder ve bu değeri yakalar.
.+: Herhangi bir karakteri (.) temsil eder ve ardından +, en az bir veya daha fazla karakteri ifade eder. Bu, girişteki herhangi bir karakter dizisinin temsilidir.
\1: İlk parantez içindeki ünlü harfi temsil eder. Yani, bu kısım, baştaki ünlü harf ile eşleşen bir başka ünlü harf bekler.
$: Girişin sonunu belirtir.

`