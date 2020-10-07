let potentiometer = 0
// Created by: Nina Mathew
// Created on: 10/07/20
// This program displays the current value of a potentiometer.
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
    potentiometer = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(potentiometer)
})
