#include <fsl_clock.h>
#include <fsl_gpio.h>
#include <fsl_port.h>

#include "board.hpp"

static const gpio_pin_config_t ledConfig = {kGPIO_DigitalOutput, 1};

namespace board {

void init() {
    initLed();
}

void initLed() {
    CLOCK_EnableClock(kCLOCK_PortC);
    PORT_SetPinMux(PORTC, 5, kPORT_MuxAsGpio);
    GPIO_PinInit(GPIOC, 5, &ledConfig);
}

} /* namespace board */
