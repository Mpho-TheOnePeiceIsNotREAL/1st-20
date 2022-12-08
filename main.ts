input.onButtonPressed(Button.A, function () {
    number = 1
    for (let index = 0; index < 10; index++) {
        basic.showNumber(number)
        number += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 10; index++) {
        basic.showNumber(index + 1)
    }
})
input.onButtonPressed(Button.B, function () {
    number = 1
    while (number < 10) {
        basic.showNumber(number)
        number += 1
    }
})
let number = 0
basic.showNumber(0)
basic.showNumber(1)
basic.showNumber(2)
basic.showNumber(3)
basic.showNumber(4)
basic.showNumber(5)
basic.showNumber(6)
basic.showNumber(7)
basic.showNumber(8)
basic.showNumber(9)
basic.showNumber(10)
