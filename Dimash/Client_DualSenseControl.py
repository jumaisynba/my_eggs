#!/usr/bin/env python3
import socket
import cv2

import numpy as np

from pydualsense import pydualsense, TriggerModes


#Socket initialized here !!!!!!!!!!!!!!!!!!!----------------
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

import time
# Connect the socket to the port where the server is listening
server_address = ('localhost', 10000)
print('connecting to {} port {}'.format(*server_address))
sock.connect(server_address)


ds = pydualsense() # open controller
ds.init() # initialize controller


#camera Initialize
cv2.namedWindow("preview")
vc = cv2.VideoCapture(0)

posT2 = 0
posT1 = 0
min = -100000
robotReachedLower = True
if vc.isOpened(): # try to get the first frame
    rval, frame = vc.read()
else:
    rval = False



def rateofChange(dt):
    global posT2
    global posT1
    posT2 = ds.state.L2
    
    v = (posT2 - posT1)/dt

    posT1 = ds.state.L2
    return int(v)


    
while not ds.state.R1 or rval:
    now = time.time()
    #Camera Controls
    cv2.imshow("preview", frame)
    rval, frame = vc.read()
    key = cv2.waitKey(20)
    if key == 27: # exit on ESC
        break


    #Socket data recieved here !!!!!!!!!!!!--------------------
    data = sock.recv(1024) 
    data = data
    incomingData = data.decode("utf-8").split("|")
    # HERE incomingData[0] is FSR data mapped 0-255
    #      incomingData[1] is RobotLOWstate True or False

    num3 = int(float(int(incomingData[0])))


    if incomingData[1] == "False":
        robotReachedLower = False
    else:
        robotReachedLower = True

 


        
    ds.triggerL.setMode(TriggerModes.Rigid) # Trigger mode is set to rigid here (Motors always engaged)
    
    if ds.state.DpadUp and not robotReachedLower:
        num = ds.state.L2
    elif robotReachedLower:
        
        num = ds.state.L2


    #Socket!!!!!!!!!!!!!!!!--------------

    toSend = str(num) + '|' + str(ds.state.cross) + '|' + str(ds.state.triangle) #+ '|' + str(ds.state.LX) + '|' + str(ds.state.LY)
    sock.send(str(toSend).encode('utf8')) # L2 trigger state is sent from here 



    ds.light.setColorI(num,0,num3)
    
    # ds.triggerL.setForce(1, num3) 

    elapsed = time.time() - now 
    currVal = rateofChange(elapsed)
    
    
    print (num)
    



vc.release()
cv2.destroyWindow("preview")
ds.close() # closing the controller