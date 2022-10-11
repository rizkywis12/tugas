function diagonalSquare1(n) {
    let pola = "";
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            if (i === j | i + j == 9) {
                pola += ("*");
            } else {
                pola += (" ")
            }
        }
        pola += ("\n")
    }

    console.log(pola)
}
diagonalSquare1();

function diagonalSquare(n) {
    let pola = "";
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            if (i + j >= 9) {
                pola += ("*");
            } else {
                pola += (" ")
            }
        }
        pola += ("\n")
    }

    console.log(pola)
}

diagonalSquare();



function diagonalSquare2(n) {
    let pola = "";
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            if (i == 1 || i == 8 || j == 1 || j == 8 || i === j | i + j == 9) {
                pola += ("*");
            } else {
                pola += (" ")
            }
        }
        pola += ("\n")
    }

    console.log(pola)
}
diagonalSquare2();