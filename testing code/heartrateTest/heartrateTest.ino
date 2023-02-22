#include <Wire.h>
void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while(Wire.available()) {          // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        Serial.print("heart rate: ");
        Serial.println(c, DEC);         // print heart rate value
    }
    Serial.println("loop done");
    delay(500);
}

// hardware:
// black  -> gnd
// red    -> 3.3
// yellow -> A5
// white  -> A4 
