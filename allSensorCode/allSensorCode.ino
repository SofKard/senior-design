#include <Wire.h>
#include <Adafruit_TMP117.h>
#include <Adafruit_Sensor.h>

Adafruit_TMP117  tmp117;

#include "DHT.h"

#define DHTTYPE DHT22   // DHT 22  (AM2302)

#define DHTPIN 2     // what pin we're connected to（DHT10 and DHT20 don't need define it）
DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

const int GSR=A0;
int sensorValue=0;
int gsr_average=0;

void setup() {

  // start heartrate
  Serial.begin(9600);
  Serial.println("heart rate sensor:");
  Wire.begin();

  // start ambient
  debug.begin(115200);
  debug.println("DHTxx test!");
  Wire.begin();

  dht.begin();

  // start body temp
  Serial.begin(115200);
  while (!Serial) delay(10);     // will pause Zero, Leonardo, etc until serial console opens
  Serial.println("Adafruit TMP117 test!");
  if (!tmp117.begin()) {
    Serial.println("Failed to find TMP117 chip");
    while (1) { delay(10); }
  }
  Serial.println("TMP117 Found!");

  // start GSR

}

void loop() {

  // read heartrate
  Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
  while(Wire.available()) {          // slave may send less than requested
    unsigned char c = Wire.read();   // receive heart rate value (a byte)
    Serial.print("heart rate: ");
    Serial.println(c, DEC);         // print heart rate value
  }
  delay(500);

  // read temp
  sensors_event_t temp; // create an empty event to be filled
  tmp117.getEvent(&temp); //fill the empty event object with the current measurements
  Serial.print("Temperature:  "); Serial.print(temp.temperature);Serial.println(" degrees C");
  Serial.println("");

  // read GSR
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

  // read ambient temp
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) {
    debug.print("Humidity: ");
    debug.print(temp_hum_val[0]);
    debug.print(" %\t");
    debug.print("Temperature: ");
    debug.print(temp_hum_val[1]);
    debug.println(" *C");
  } else {
    debug.println("not working :(");
  }

  // delayyyyyyyy
  delay(1500);

}
