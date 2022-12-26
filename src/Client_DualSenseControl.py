#!/usr/bin/env python3
import socket

from pydualsense import pydualsense, TriggerModes


#Socket initialized here !!!!!!!!!!!!!!!!!!!----------------
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)


# Connect the socket to the port where the server is listening
server_address = ('localhost', 10000)
print('connecting to {} port {}'.format(*server_address))
sock.connect(server_address)


ds = pydualsense() # open controller
ds.init() # initialize controller



    
while not ds.state.R1:
    #Socket data recieved here !!!!!!!!!!!!--------------------
    data = sock.recv(1024) 
    data = data
    num3 = int(data)



        
    ds.triggerL.setMode(TriggerModes.Rigid) # Trigger mode is set to rigid here (Motors always engaged)

    #print(f"Circle : {ds.state.circle} R2 : {ds.state.R2} L Stick X : {ds.state.LX} L Stick Y : {ds.state.LY}")
    num = ds.state.L2


    # TO-DO send DpadDown and DpadUp states over TCP to ROS 
    # OR Try sending them from here 
    
    #print(num + ':' + ds.state.DpadUp)


    #Socket!!!!!!!!!!!!!!!!--------------

    toSend = str(num) + '|' + str(ds.state.DpadDown) + '|' + str(ds.state.DpadUp)
    sock.send(str(toSend).encode('utf8')) # L2 trigger state is sent from here 

    ds.light.setColorI(num,0,num3)
    
    ds.triggerL.setForce(1, num3) 
    




ds.close() # closing the controller