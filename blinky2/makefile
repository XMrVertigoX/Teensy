# ----- Configuration ---------------------------------------------------------

TOOLCHAIN_PREFIX = arm-none-eabi-
PROJECT_NAME     = blinky2

SDK_ROOT = ../libs/SDK_2.2_MK66FX1M0xxx18

LINKER_SCRIPT = MK66FX1M0xxx18_flash.ld

# ----- Sources ---------------------------------------------------------------

SYMBOLS += CPU_MK66FX1M0VMD18

INCLUDE_DIRS += $(SDK_ROOT)/CMSIS/Include
INCLUDE_DIRS += $(SDK_ROOT)/CMSIS/Driver/Include
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18/cmsis_drivers
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18/drivers
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18/utilities

SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/system_MK66F18.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/gcc/startup_MK66F18.S

SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_gpio.c

INCLUDE_DIRS += ./src/config
SOURCE_FILES += $(shell find ./src -iregex ".*\.\(cpp\)")

# ----- Libraries -------------------------------------------------------------

LIBRARY_DIRS += $(SDK_ROOT)/devices/MK66F18/gcc

# ----- Flags -----------------------------------------------------------------

GCCFLAGS += -mcpu=cortex-m4
GCCFLAGS += -mthumb
# GCCFLAGS += -mfloat-abi=hard
# GCCFLAGS += -mfpu=fpv4-sp-d16

COMMON_CFLAGS += -O3

CFLAGS += -std=gnu11

CXXFLAGS += -std=gnu++14

CPPFLAGS +=

LDFLAGS += -T $(LINKER_SCRIPT)

# ----- Rules -----------------------------------------------------------------

include ../libs/xXx/utils/rules.mk

flash: $(HEXARY) teensy_loader_cli
	../libs/teensy_loader_cli/teensy_loader_cli --mcu=MK66FX1M0 -w -v $<

teensy_loader_cli:
	cd ../libs/teensy_loader_cli && make
