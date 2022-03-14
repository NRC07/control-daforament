input.onButtonPressed(Button.A, function () {
    Personas += 1
    basic.showString("" + (Personas))
})
input.onGesture(Gesture.Shake, function () {
    Personas = 0
})
input.onButtonPressed(Button.B, function () {
    if (Personas > 0) {
        Personas += -1
        basic.showString("" + (Personas))
    }
})
let Personas = 0
Personas = 0
basic.forever(function () {
    if (Personas <= 5) {
        basic.showString("" + (Personas))
    } else {
        basic.showString("AF")
    }
})
