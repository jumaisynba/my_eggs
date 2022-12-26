#!/usr/bin/env python3
import queue
import rospy
import socket
import sys
from std_msgs.msg import Int64, Float32MultiArray, Bool





class Nodo():
    def __init__(self):
        sub = rospy.Subscriber('/force_data',Int64, self.callback)
        sub = rospy.Subscriber('RobotStateLOW', Bool, self.robotStateCallback)
        self.RobotLowState = True
        

        self.force = None
        rospy.spin()
    def robotStateCallback(self, data):
        self.RobotLowState = data.data

    def callback(self, data):
        #max 900
        if data.data <=900:
            self.force = int((float(data.data)/900)*255)
        else:
            self.force = 255
        #print(self.force)
        
        toSend = str(self.force) + '|' + str(self.RobotLowState)
        try: 
            connection.send(str(toSend).encode('utf8'))
            triggerData = connection.recv(1024)
            triggerData = triggerData
            incomingControlCmd = triggerData.decode("utf-8").split('|')
            # ^ WHERE incomingControlCmd[0] trigger state for Gripper [0-255]
            #         incomingControlCmd[1] DPadDown for RobotDown
            #         incomingControlCmd[2] DPadUp for RobotUp


            toGripper = [20,19.0-(float(int(incomingControlCmd[0]))/255.0)*18.0]
            triggerRaw.data = int(incomingControlCmd[0]) 

            m.data = toGripper
            pubTrigVal.publish(triggerRaw)
            pub2.publish(m)




            if incomingControlCmd[1] == "True":
                down.data = True
            else:
                down.data = False

            
            if incomingControlCmd[2] == "True":
                up.data = True
            else:
                up.data = False

            

            pubButtonUp.publish(up)
            pubButtonDown.publish(down)


        except:
            print("Closing")
            connection.close()
            reason="had to  "
            rospy.signal_shutdown(reason)
            exit()



    


if __name__=='__main__':


    # Create a TCP/IP socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)


    # Bind the socket to the port
    server_address = ('localhost', 10000)
    print('starting up on {} port {}'.format(*server_address))
    sock.bind(server_address)

    # Listen for incoming connections
    sock.listen()
    # Wait for a connection
    print('waiting for a connection')
    connection, client_address = sock.accept()
    print(sys.stderr, 'connection from', client_address)





    rospy.init_node('fsr_to_controller', anonymous=True)
   
    m = Float32MultiArray()
    triggerRaw = Int64()

    pub2 = rospy.Publisher('/setData', Float32MultiArray, queue_size=10) 
    pubTrigVal = rospy.Publisher('/triggerRaw', Int64, queue_size=10)

    up = Bool()
    down = Bool()
    
    pubButtonUp = rospy.Publisher('/buttonUp', Bool, queue_size=10)
    pubButtonDown = rospy.Publisher('buttonDown', Bool, queue_size=10)
    r=rospy.Rate(1)
    #while not rospy.is_shutdown():
    s=Nodo()
        #r.sleep()
connection.close()
