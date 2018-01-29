#include <cstddef>

#include "board.hpp"

#define INFINITE_LOOP while (true)

extern "C" int main() {
    board::led::init();

    INFINITE_LOOP {
        board::led::toggle();




        // Pseudo delay
        for (size_t i = 0; i < 1000000; i++) {
            asm("nop");
        }
    }
}














