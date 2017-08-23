# ----- Configuration ---------------------------------------------------------

TOOLCHAIN_PREFIX = arm-none-eabi-
PROJECT_NAME     = vcom

SDK_ROOT = ../libs/SDK_2.2_MK66FX1M0xxx18

# ----- Sources ---------------------------------------------------------------

SYMBOLS += CPU_MK66FX1M0VMD18
SYMBOLS += USB_STACK_BM
# SYMBOLS += BOARD_USE_VIRTUALCOM

INCLUDE_DIRS += $(SDK_ROOT)/CMSIS/Driver/Include
INCLUDE_DIRS += $(SDK_ROOT)/CMSIS/Include
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18/cmsis_drivers
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18/drivers
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18/utilities
INCLUDE_DIRS += $(SDK_ROOT)/middleware/usb_1.6.3/device
INCLUDE_DIRS += $(SDK_ROOT)/middleware/usb_1.6.3/include
INCLUDE_DIRS += $(SDK_ROOT)/middleware/usb_1.6.3/osa
INCLUDE_DIRS += $(SDK_ROOT)/middleware/usb_1.6.3/phy

SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_clock.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_common.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_flash.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_gpio.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_lpuart.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_sim.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_smc.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_sysmpu.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_uart.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/gcc/startup_MK66F18.S
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/system_MK66F18.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/utilities/fsl_debug_console.c
SOURCE_FILES += $(SDK_ROOT)/middleware/usb_1.6.3/device/usb_device_dci.c
SOURCE_FILES += $(SDK_ROOT)/middleware/usb_1.6.3/device/usb_device_ehci.c
SOURCE_FILES += $(SDK_ROOT)/middleware/usb_1.6.3/device/usb_device_khci.c
SOURCE_FILES += $(SDK_ROOT)/middleware/usb_1.6.3/osa/usb_osa_bm.c
SOURCE_FILES += $(SDK_ROOT)/middleware/usb_1.6.3/phy/usb_phy.c

INCLUDE_DIRS += ./src

SOURCE_FILES += $(shell find ./src -iregex ".*\.\(c\|cpp\)")

# ----- Flags -----------------------------------------------------------------

GCCFLAGS += -mcpu=cortex-m4
GCCFLAGS += -mthumb
GCCFLAGS += -mfloat-abi=hard
GCCFLAGS += -mfpu=fpv4-sp-d16

# COMMON_CFLAGS += -O3
# COMMON_CFLAGS += -flto

CFLAGS += -std=gnu11

CXXFLAGS += -std=gnu++14

#CPPFLAGS +=

LDFLAGS += -T$(SDK_ROOT)/devices/MK66F18/gcc/MK66FX1M0xxx18_flash.ld
LDFLAGS += --specs=nano.specs
LDFLAGS += --specs=nosys.specs

# ----- Rules -----------------------------------------------------------------

include ../libs/xXx/utils/rules.mk

flash: $(HEXARY) teensy_loader_cli
	../libs/teensy_loader_cli/teensy_loader_cli --mcu=MK66FX1M0 -w -v $<

teensy_loader_cli:
	cd ../libs/teensy_loader_cli && make
