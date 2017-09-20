#include <fsl_clock.h>
#include <fsl_gpio.h>
#include <fsl_port.h>

#include "board.hpp"

static GPIO_Type *ledGpio          = GPIOC;
static PORT_Type *ledPort          = PORTC;
static uint32_t ledPin             = 5;
static gpio_pin_config_t ledConfig = {kGPIO_DigitalOutput, 1};

void board::led::init() {
    CLOCK_EnableClock(kCLOCK_PortC);
    PORT_SetPinMux(ledPort, ledPin, kPORT_MuxAsGpio);
    GPIO_PinInit(ledGpio, ledPin, &ledConfig);
}

void board::led::toggle() {
    GPIO_TogglePinsOutput(ledGpio, (1 << ledPin));
}
