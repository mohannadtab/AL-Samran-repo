// this's my first coding ok, so don't blame me if i don't write it perfect.



let The_Books =
    [[1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J.Clark Scott", 59.9, 22]]

function add(Id, book_title, author, price, quantity) {
    if (typeof Id === "number")
        if (typeof book_title === "string")
            if (typeof author === "string")
                if (typeof price === "number")
                    if (typeof quantity === "number")

                        The_Books.push([Id, book_title, author, price, quantity])
}

add(3, "Clean Code", "Robert Cecil Martin", 50.0, 5)
add(4, "Zero to One", "Peter Thiel", 45.0, 12)
add(5, "Javascript", "Hnoody", 100.0, 1)
add(6, "AL-Samran", "Samran", 2000, 1)

search = "Samran"

for (i = 0; i < The_Books.length; i++) {
    for (j = 0; j < The_Books[i].length - 2; j++) {
        if (The_Books[i][j] === search) {
            console.log(The_Books[i])
        }
    }
}

let your_order = "But how do it know"
let quantity = 22
let wallet = 59.9
let admin = false
let check = false

for (o = 0; o < The_Books.length; o++) {
    for (q = 0; q < The_Books[o].length; q++) {
        if (The_Books[o][q] === your_order & typeof The_Books[o][q] === "string") {
            admin = true
            if (quantity <= The_Books[o][4]) {
                The_Books[o][4] = The_Books[o][4] - quantity
            }
            else {
                console.log("Sorry the quantity unavailable")
                break
            }
            if (wallet >= The_Books[o][3]) {
                check = true
            }
            else {
                console.log("Sorry you don't have enough cash")
            }
            if (check == true) {
                console.log(`This's your book "${your_order}" and quantity are ${quantity} thank you for your purchase`)
            }
        }
    }
}

if (admin == false) {
    console.log("Hmm, we didn't find the book🤔")
}

console.log(The_Books)








// let test = [3, 10]
// test[0] = test[0] + 7
// console.log(test)
// if (admin === false) {
//     console.log("Hmm we didn't find the book🤔")
// }



// let test = [12, 10]

// test[0] = test[0] + quantity

// console.log(test)
















// for (test of The_Books) {
//     console.log("-".repeat(60))
//     console.log(test)
//     console.log("-".repeat(60))
// }




