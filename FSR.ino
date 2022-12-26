/*
  This code reads the force from an force-sensitive resistor (FSR) and
  displays the force using Sapien LLC's Cthulhu Sheild to electrotactiley stimulate the tongue.

  It requires an Arudio Mega2560, A Tekscan FlexiForce Model A201 FSR,a 1 Mega Ohm resistor, and a Cthulhu shield + electrode array
  Written for team SALAD for the MARSS 2021 contest

  Based on:
  Cthulhu Tongue Stimulation BareMinimum Example - Example for stimulating the tongue using electrotactile stimulation.
  Created by Joel Moritz Jr Feb 2019
  Released into the public domain.
*/
#include <Cthulhu.h>

#include "ros.h"
#include <std_msgs/Int64.h>


Cthulhu mycthulhu; //creating and instance of Cthulhu

//array to hold which electrodes should be on or off. The top 4 are turned on
int trodes[] = {1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

//pulse period for each electrode, in microseconds. Can be manipulated with Pp and IN to change the intensity of the sensation.
int  PP[] = {10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10};

//length of positive pulse for each electrode, in microseconds. Can be manipulated with PP and IN to change the intensity of the sensation.
int  Pp[] = {9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9};

//inner burst number (how many pulses in each inner burst). Can be manipulated with PP and Pp to change the intensity of the sensation.
int  IN[] = {3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3};

//inner burst period (IBP).  In microseconds. Can change quality, or 'feel' of sensation.
int  IP[] = {150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150};

//Outer burst number (OBN). Can change quality, or 'feel' of sensation. According to Moritz 2017, this value can be cnahged from 3 to 9
//int  ON[] = {9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9};

int  ON[] = {5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5};

//Requirements:
//Pp must be less than PP.                    CheckWaveform Error 1.
//(PP*IN) must be less than IP.               CheckWaveform Error 2.
//IP*IN must be less than 2000 microseconds.  CheckWaveform Error 3.

const int FSR_PIN = A7; // Pin connected to FSR/resistor divider
const int PONTENTIOMETER_PIN = A8; // Used to Adjust the maximum Modulation 
const int DIGITAL_VCC_PIN = 52; // Pin that provides power (since VCC is blocked by Cthulhu shield)
const int DIGITAL_VCC_PIN2 = 53; // To provide power for Potentiometer
const int MAX_INTENSITY = 37;

//Create a node for ROS
ros::NodeHandle nh;

//MEssage that will be published to ROS
std_msgs::Int64 msg;
std_msgs::Int64 potentValue;

//Publsiher itself
ros::Publisher force_data("force_data", &msg);
ros::Publisher potent_data("potent_data", &potentValue);

//Data From FSR
int fsrADC = 0;


//converts the raw analog value to an electrode intensity ranging from 1-MAX_INTENSITY
//Assumes we are using the 1 lb FSR and a one mega ohm resistor
//Note: CheckWaveForm allows for up MAX_INTENSITY=37, but the make patterns example uses 1-50. 37-50 violates rule 2
int fsrAnalogToIntensity(int fsrAdc, int potentiometerValue)
{
  int maxIntencityPersonal = map (potentiometerValue, 0, 1023, 1, MAX_INTENSITY);
  int forceintensity = map(fsrAdc, 0, 900 , 1, maxIntencityPersonal); //900 is greatest value I found when pressing the FSR as hard as I could
  if (forceintensity > maxIntencityPersonal) {
    forceintensity = maxIntencityPersonal;
  }
  if (forceintensity < 1) {
    forceintensity = 1;
  }
  //Serial.println("force Int: " + String(forceintensity));
  potentValue.data = maxIntencityPersonal;
  potent_data.publish(&potentValue);
  return (forceintensity);
}

//set the intensity of an electrode
//input must be between 1 and MAX_INTENSITY
//This is based on the make patterns example.
//Assumes we are using the 1 lb FSR and a one mega ohm resistor
//Note: CheckWaveForm allows for up MAX_INTENSITY=37, but the make patterns example uses 1-50. 37-50 violates rule 2
void setElectrodeIntensity(int e, int i) {
  PP[e] = i + 8; //pulse period in usec.
  Pp[e] = i + 7; //length of positive pulse in usec
  ON[e] = (i + 10) / 10; //outer burst number of pulses
  IP[e] = 100 + i; //inner burst period in usec.
  //Serial.println("setting electrode " + String(e) +" to intensity " +String(i));
}

//sets intensity for all the electrodes that are turned on
void setOnElectrodesIntensity (int i) {
  for (int e = 0; e < 18; e++) {
    if (trodes[e]) {
      setElectrodeIntensity(e, i);
    }
  }
}


void setup() {
  mycthulhu.Begin(); //Initialize Cthulhu library
  nh.initNode(); //Initialize ROS node
  nh.advertise(force_data);
  nh.advertise(potent_data);

  //get vcc from a Ardunio Mega2560's digitial pin instead of +5 and gnd since those pins are covered
  //by the Chtulu shield
  pinMode(DIGITAL_VCC_PIN, OUTPUT);
  digitalWrite(DIGITAL_VCC_PIN, HIGH);

  pinMode(DIGITAL_VCC_PIN2, OUTPUT);
  digitalWrite(DIGITAL_VCC_PIN2, HIGH);
  
  pinMode(FSR_PIN, INPUT);
  
  Serial.begin(9600); //Set serial output datarate. Note: printing at 9600 slows down the update rate of the tongue display and sample rate of the FSR!

}


void loop(void) {

  fsrADC = analogRead(FSR_PIN);
  msg.data  = fsrADC;
  force_data.publish(&msg);
  


  //Serial.println("Analog Input: " + String(fsrADC));
  int potentValue = analogRead(PONTENTIOMETER_PIN);

  int fi = fsrAnalogToIntensity(fsrADC , potentValue);
  
  setOnElectrodesIntensity(fi);

  //check our waveform parameters and verify that they meet requirements
  //commented out beause it doesn't accept intensity values greater than 37
  //int myerror = mycthulhu.CheckWaveform(trodes, PP, Pp, IN, IP, ON);
  int myerror = 0;

  if (myerror == 0) //if our waveform parameters are ok, update the stimulation parameters and perform one 36ms stimulation cycle.
  {
    //Serial.println("waveform OK \n");
    mycthulhu.UpdateStimuli(trodes, PP, Pp, IN, IP, ON); //update waveform parameters
    mycthulhu.Stimulate(); //create the stimulation pulsetrain on the electrodes
  }
  else
  {
    //if we entered an invalid waveform, tell us which rule we violated so we can fix it
    //Serial.print("Error in waveform parameters. CheckWaveform Error: "); Serial.println(myerror);
    setOnElectrodesIntensity(0);
  }
  //debug printing to 9600 serial creates a large delay and thus latency
  nh.spinOnce();

  delay(10);
}
