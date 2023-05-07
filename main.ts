function int () {
    t1 = randint(0, svhg)
    t2 = randint(0, svhg)
    t3 = randint(0, svhg)
    sum = t1 + (t2 + t3)
    svar = 0
    while (count > 0) {
        basic.showNumber(count)
        basic.pause(100)
        count += -1
    }
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(500)
    basic.showString("" + convertToText(t1) + "+" + convertToText(t2) + "+" + convertToText(t3) + "=")
    basic.showString("?")
    basic.pause(100)
    basic.clearScreen()
}
input.onPinPressed(TouchPin.P0, function () {
    svhg = 5
    int2()
})
input.onButtonPressed(Button.A, function () {
    svar += -1
    basic.showNumber(svar)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(level)
    basic.pause(200)
    basic.showNumber(svhg)
})
input.onButtonPressed(Button.AB, function () {
    if (svar == sum) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
        led.plot(level, level)
        basic.pause(500)
        music.playMelody("G B A G C5 B A B ", 240)
        basic.clearScreen()
        level += 1
        int2()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.showNumber(sum)
        level = 0
        svhg = 2
        sum = 0
        int2()
    }
})
input.onButtonPressed(Button.B, function () {
    svar += 1
    basic.showNumber(svar)
})
input.onPinPressed(TouchPin.P1, function () {
    svhg = 8
    int2()
})
function int2 () {
    t1 = randint(0, svhg)
    t2 = randint(0, svhg)
    t3 = randint(0, svhg)
    sum = t1 + (t2 + t3)
    svar = 0
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(500)
    basic.showString("" + convertToText(t1) + "+" + convertToText(t2) + "+" + convertToText(t3) + "=")
    basic.showString("?")
    basic.pause(100)
    basic.clearScreen()
}
let svar = 0
let t3 = 0
let t2 = 0
let t1 = 0
let level = 0
let sum = 0
let svhg = 0
let count = 0
count = 5
svhg = 2
sum = 0
level = 0
int()
basic.forever(function () {
    if (level < 0) {
        level = 0
        svhg = 2
    }
    if (level >= 2 && level <= 3) {
        svhg = 5
    }
    if (level > 3 && level <= 100) {
        svhg = 10
    }
})
