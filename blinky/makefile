# ----- Configuration ---------------------------------------------------------

TOOLCHAIN_PREFIX = arm-none-eabi-
PROJECT_NAME     = cores

LINKER_SCRIPT = mk66fx1m0.ld

# ----- Sources ---------------------------------------------------------------

SYMBOLS += __MK66FX1M0__
SYMBOLS += USB_SERIAL
SYMBOLS += F_CPU=180000000
SYMBOLS += LAYOUT_US_ENGLISH

INCLUDE_DIRS += ../libs/cores/teensy3
INCLUDE_DIRS += ../libs/cores/teensy3/avr
INCLUDE_DIRS += ../libs/cores/teensy3/util
SOURCE_FILES += $(shell find ../libs/cores/teensy3 -iregex ".*\.\(c\|cpp\|s\|S\)")

INCLUDE_DIRS += ./src/config
SOURCE_FILES += $(shell find ./src -iregex ".*\.\(c\|cpp\|s\|S\)")

# ----- Libraries -------------------------------------------------------------

LIBRARY_DIRS += ../libs/cores/teensy3

# ----- Flags -----------------------------------------------------------------

GCCFLAGS += -mcpu=cortex-m4
GCCFLAGS += -mthumb
GCCFLAGS += -mfloat-abi=hard
GCCFLAGS += -mfpu=fpv4-sp-d16

COMMON_CFLAGS += -g
COMMON_CFLAGS += -Og

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
