console.log("this is a business name generator")

let random = Math.random()
let first, second, third;


random = Math.random()
if (random<0.33) {
    first = "good"
}
else if (random<0.66 && random>=0.33) {
    first = "better"
}
else {
    first = "best"
}
 random = Math.random()
if (random<0.33) {
    second = "cake"
}
else if (random<0.66 && random>=0.33) {
    second = "banana"
}
else {
    second = "jam"
}

random = Math.random()
if (random<0.33) {
    third = "limited"
}
else if (random<0.66 && random>=0.33) {
    third = "hub"
}
else {
    third = "industry"
}

console.log(`${first} ${second} ${third}`)


