# ----- Configuration ---------------------------------------------------------

TOOLCHAIN_PREFIX = arm-none-eabi-
LIBS_DIR         = ../libs
SDK_ROOT         = $(LIBS_DIR)/SDK_2.2_MK66FX1M0xxx18

# ----- Sources ---------------------------------------------------------------

SYMBOLS += CPU_MK66FX1M0VMD18

INCLUDE_DIRS += $(SDK_ROOT)/CMSIS/Driver/Include
INCLUDE_DIRS += $(SDK_ROOT)/CMSIS/Include
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18/cmsis_drivers
INCLUDE_DIRS += $(SDK_ROOT)/devices/MK66F18/drivers

SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_clock.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/drivers/fsl_gpio.c
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/gcc/startup_MK66F18.S
SOURCE_FILES += $(SDK_ROOT)/devices/MK66F18/system_MK66F18.c

SOURCE_FILES += $(shell find src | grep -E '^.*\.(c|cpp)$$')

# ----- Flags -----------------------------------------------------------------

GCCFLAGS += -mcpu=cortex-m4
GCCFLAGS += -mthumb
GCCFLAGS += -mfloat-abi=hard
GCCFLAGS += -mfpu=fpv4-sp-d16

CFLAGS += -std=gnu11
CFLAGS += -flto
CFLAGS += -O3

CXXFLAGS += -std=gnu++14
CXXFLAGS += -flto
CXXFLAGS += -O3

LDFLAGS += -T$(SDK_ROOT)/devices/MK66F18/gcc/MK66FX1M0xxx18_flash.ld
LDFLAGS += --specs=nano.specs
LDFLAGS += --specs=nosys.specs

# ----- Rules -----------------------------------------------------------------

include $(LIBS_DIR)/xXx/utils/rules.mk

download: $(PROJECT_NAME).hex
	teensy_loader_cli --mcu=MK66FX1M0 -w -v $<
