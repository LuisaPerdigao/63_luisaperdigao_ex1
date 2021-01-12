input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Estao " + input.temperature() + "oC")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.showString("Ola!")
basic.pause(100)
basic.showString("Como estas hoje?")
