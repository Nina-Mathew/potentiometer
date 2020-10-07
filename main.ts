// Created by: Nina Mathew
// Created on: 10/07/20
// This program displays the current value of a potentiometer.
basic.forever(function () {
    let potentiometer = 0
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
    basic.showNumber(potentiometer)
})
