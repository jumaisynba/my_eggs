import csv
import cv2

import rospy
import time
from std_msgs.msg import Int64, Float32MultiArray, Bool
from sensor_msgs.msg import JointState    
import os


id_num = input("USER ID: ")

print("User ID is:" + str(id_num))

mode_n = input("ON 1  |  OFF 0:  ")

if mode_n == 1:
   mode = "ON"
else:
   mode = "OFF"

print ("User id and mode:    " + str(id_num)+"_"+ mode)

###

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
      
print(csvCounter+1)

saved_spec = dirname +"/"+ str(csvCounter+1) + "_" + str(mode) + ".csv" 


# if os.path.exists(saved_spec):
#    saved_spec = dirname +"/" + str(int(os.path.basename(saved_spec).split('.')[-2])+1) + ".csv"
#print(int(os.path.basename(saved_spec).split('.')[-2]))

spectra_file = open(saved_spec, mode = 'w')
spectra_writer =csv.writer(spectra_file)

spectra_writer.writerow(['time ms', 'FSR force', 'trigger to gripper cmd', 'Max Int val', 'Trigger raw Value', 'UP Button', 'DOWN Button', 'Gripper Position', 'Gripper Velocity', 'Robot In Initial Pos', "User ID: " + str(id_num), mode , "trial num: " +  str(csvCounter+1)])

spectra_file.close()
