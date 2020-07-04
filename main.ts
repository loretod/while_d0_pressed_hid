forever(function () {
    while (input.touchD0.isPressed()) {
        keyboard.type("a")
        pixel.setColor(0x007fff)
        pause(1000)
        pixel.setColor(0xffffff)
    }
})
