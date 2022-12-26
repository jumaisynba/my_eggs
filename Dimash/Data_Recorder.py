import csv
import cv2

import rospy
import time
from std_msgs.msg import Int64, Float32MultiArray, Bool
from sensor_msgs.msg import JointState    
import os

#create a folder with user ID Number and condition ON/OFF
#Ask for ID Number and ask for ON/OFF

#Inside folder create file with a trial No.
#Assign trial No. Automatically [1-10]
id_num = input("USER ID: ")

print("User ID is:" + str(id_num))

mode_n = input("1  | 0:  ")

if mode_n == 1:
   mode = "ON"
else:
   mode = "OFF"

print ("User id and mode:    " + str(id_num)+"_"+ mode)

dirname = "/home/dimash/Dimash/Data/" + str(id_num) 


if os.path.isdir(dirname) == False:
    #Create the directory
    os.mkdir(dirname)
    #Print success message
    print("The directory is created.")
else:
    #Print the message if the directory exists
    print("The directory already exists.")

filename = "1_"+str(mode)+".csv" 
saved_spec = dirname +"/"+ filename

csvCounter = 0

for filename in os.listdir(dirname):
   f = os.path.join(dirname, filename)
   if os.path.isfile(f):
      csvCounter=csvCounter+1
      
print("next file number is:  " + str(csvCounter+1))


saved_spec = dirname +"/"+ str(csvCounter+1) + "_" + str(mode) + ".csv" 

spectra_file = open(saved_spec, mode = 'w')
spectra_writer =csv.writer(spectra_file)

class Nodo():
   def __init__(self):
      
      sub2 = rospy.Subscriber('/setData', Float32MultiArray, self.triggerToGripper)
      subMax = rospy.Subscriber('/potent_data', Int64, self.potData)
      subTrigRaw = rospy.Subscriber('/triggerRaw', Int64, self.trigRawVal)
      subBU = rospy.Subscriber('/buttonUp', Bool, self.BU)
      subBD = rospy.Subscriber('buttonDown', Bool, self.BD)
      subGrip = rospy.Subscriber('float_grip', Float32MultiArray, self.gripperCallback)
      sub = rospy.Subscriber('/force_data',Int64, self.callback)
      subRobotstate = rospy.Subscriber('RobotStateLOW', Bool, self.robotStateCallback)

      #sub = rospy.Subscriber('RobotStateLOW', Bool, self.robotStateCallback)
      self.rawFSR = None
      #TODO add User ID, trial #, mode 
      spectra_writer.writerow(['time ms', 'FSR force', 'trigger to gripper cmd', 'Max Int val', 'Trigger raw Value', 'UP Button', 'DOWN Button', 'Gripper Position', 'Gripper Velocity', 'Robot In Initial Pos', "User ID: " + str(id_num), mode , "trial num: " + str(csvCounter+1)])
      self.start_time = int(round(time.time()*1000))

      rospy.spin()
   def robotStateCallback(self, data):
      self.RobotLowState = data.data

   def gripperCallback(self, data):
      self.gripper_pos = data.data[0]
      self.gripper_vel = data.data[1]
      print(self.gripper_pos)

   def BU(self, data):
      self.button_up = data.data

   def BD(self, data):
      self.button_down = data.data
   

   def trigRawVal(self, data):
      self.trig_raw_data = data.data

   def potData(self, data):
      self.potent_data = data.data

   def triggerToGripper(self, data):
      self.triggerTGripp = data.data[1]

   def callback(self, data):
      self.rawFSR = data.data
      self.timeIter = int(round(time.time()*1000))-self.start_time
      
      
      spectra_writer.writerow([self.timeIter , self.rawFSR, 
      self.triggerTGripp, 
      self.potent_data, 
      self.trig_raw_data,
      self.button_up,
      self.button_down,
      self.gripper_pos,
      self.gripper_vel,
      # self.RobotLowState
      ])

      key = cv2.waitKey(20)   
      if key == 27: # close file on ESC
        spectra_file.close()
        exit()




if __name__=='__main__':

   rospy.init_node('recorder_node', anonymous=True)
   
   r=rospy.Rate(1)
   s=Nodo()


