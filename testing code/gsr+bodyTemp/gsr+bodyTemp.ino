#include <Wire.h>
#include <Adafruit_TMP117.h>
#include <Adafruit_Sensor.h>

const int GSR=A0;
int sensorValue=0;
int gsr_average=0;

Adafruit_TMP117  tmp117;
void setup(void) {
  Serial.begin(115200);
  while (!Serial) delay(10);     // will pause Zero, Leonardo, etc until serial console opens
  Serial.println("Adafruit TMP117 test!");

  // Try to initialize!
  if (!tmp117.begin()) {
    Serial.println("Failed to find TMP117 chip");
    while (1) { delay(10); }
  }
  Serial.println("TMP117 Found!");

}
void loop() {

  sensors_event_t temp; // create an empty event to be filled
  tmp117.getEvent(&temp); //fill the empty event object with the current measurements
  Serial.print("Temperature:  "); Serial.print(temp.temperature);Serial.println(" degrees C");
  Serial.println("");

  long sum=0;
  for(int i=0;i<10;i++)           //Average the 10 measurements to remove the glitch
      {
      sensorValue=analogRead(GSR);
      sum += sensorValue;
      delay(5);
      }
   gsr_average = sum/10;
   Serial.print("GSR val: ");
   Serial.println(gsr_average);

  delay(1000);
}

// hardware:
// red: 3.3v
// black: gnd
// blue: A4
// yellow: A5

// note: board said disconnected, so flash the code, then read using a separate arduino ide window
