// if else
const x: number = 5

if (x > 5) {
    console.log("Liczba jest większa od 5")
} else if (x === 5) {
    console.log("Liczba jest równa 5")
}  else {
    console.log("Liczba jest mniejsza od 5")
}


// switch
const y: number = 3

switch(y) {
    case 3:
        console.log("Liczba jest równa 3")
        break
    case 4:
        console.log("Liczba jest równa 4")
        break
    case 5:
        console.log("Liczba jest równa 5")
        break
    default:
        console.log("Liczba nie pasuje do ustalonych warunków")
        break
}

// for
const arr2 = [1,2,3,4]

for(let i = 0; i <= 3; i++) {
    console.log("Początkowa wartość: " + arr2[i])
    console.log("Pomnożona wartość: " + arr2[i] * 2)
}

// while
let whileIndex = 0
while (whileIndex < 5) {
    console.log("Wartość indeksu: " + whileIndex)
    whileIndex++
}