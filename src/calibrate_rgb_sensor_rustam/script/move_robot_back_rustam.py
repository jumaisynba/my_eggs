#!/usr/bin/env python3

import rospy

import time
import roslib; roslib.load_manifest('ur_driver')
import actionlib
from control_msgs.msg import *
from trajectory_msgs.msg import *

from sensor_msgs.msg import JointState

from std_msgs.msg import Bool, Int64
#JOINT_NAMES = ['shoulder_pan_joint', 'shoulder_lift_joint', 'elbow_joint',
#               'wrist_1_joint', 'wrist_2_joint', 'wrist_3_joint']



#Q1 = [-1.542321885120117, -1.9549960366078087, -1.135353662998166, -1.623457177981729, 1.5708161343218883, -3.113070668096523]
#Q1 = [-2.3852426470757644, -1.9549679200182837, -1.1353882478733461, -1.623448395660966, 1.5709414797978063, -3.1130769213222313]
#Q1 = [-2.2666142370196853, -1.9544695616182333, -1.13625428868508, -1.6230194682673593, 1.568358435914264, -3.114161625502689]
#Q1 = [-2.407941593561177, -1.954501903046511, -1.1367149367240952, -1.6226067315616, 1.5683669806666218, -3.1141130174864706]
#Q1 = [-2.2984610268009584, -1.954478989208492, -1.136733791904613, -1.6226229342336724, 1.5658726200473831, -3.1141292201585435]
#Q1 = [0.4626082427567004, -1.2761348714520147, 2.1142787275481716, -2.3824494248586867, -1.5718565567909994, 0.4296091809361914]

#client = None





class Nodo():
    


    def __init__(self):
        sub = rospy.Subscriber('/buttonUp',Bool, self.callback)
        sub = rospy.Subscriber('/buttonDown', Bool, self.homeCallback)
        
        
        print ("Everything Initialized")

        self.upState = False


        rospy.spin()

    def moveHome(self):
        
        g = FollowJointTrajectoryGoal()
        g.trajectory = JointTrajectory()
        g.trajectory.joint_names = JOINT_NAMES
        joint_states = rospy.wait_for_message("joint_states", JointState)
        joints_pos = joint_states.position
        g.trajectory.points = [
            JointTrajectoryPoint(positions=joints_pos, velocities=[0]*6, time_from_start=rospy.Duration(0.0)),
            JointTrajectoryPoint(positions=QS, velocities=[0]*6, time_from_start=rospy.Duration(5.0))]
        client.send_goal(g)
        try:
            client.wait_for_result()
            print("In DownState")
            robotLow.data = True
            pubLow.publish(robotLow)
        except KeyboardInterrupt:
            client.cancel_goal()
            raise
    
    def moveUp(self):
        g = FollowJointTrajectoryGoal()
        g.trajectory = JointTrajectory()
        g.trajectory.joint_names = JOINT_NAMES
        joint_states = rospy.wait_for_message("joint_states", JointState)
        joints_pos = joint_states.position
        g.trajectory.points = [
            JointTrajectoryPoint(positions=joints_pos, velocities=[0]*6, time_from_start=rospy.Duration(0.0)),
            JointTrajectoryPoint(positions=QF, velocities=[0]*6, time_from_start=rospy.Duration(5.0))]
        client.send_goal(g)
        try:
            client.wait_for_result()
            print("In UpState")
            robotHigh.data = True
            pubHigh.publish(robotHigh)
        except KeyboardInterrupt:
            client.cancel_goal()
            raise
    
    def homeCallback(self, data):
        self.goHome = data.data

    def callback(self, data):
        self.upState = data.data
        global client
        try:
            client = actionlib.SimpleActionClient('follow_joint_trajectory', FollowJointTrajectoryAction)
            print ("Waiting for server...")
            client.wait_for_server()
            print ("Connected to server")
            if self.upState and not self.goHome:
                robotLow.data = False
                pubLow.publish(robotLow)
                self.moveUp()

            elif not self.upState and self.goHome:
                robotHigh.data = False
                pubHigh.publish(robotHigh)
                self.moveHome()
                

        except KeyboardInterrupt:
            rospy.signal_shutdown("KeyboardInterrupt")
            raise

if __name__ == '__main__': 
    rospy.init_node("test_move", anonymous=True, disable_signals=True)
    client = None
    JOINT_NAMES = ['shoulder_pan_joint', 'shoulder_lift_joint', 'elbow_joint',
               'wrist_1_joint', 'wrist_2_joint', 'wrist_3_joint']


    robotHigh = Bool()
    robotLow = Bool()
    
    pubHigh = rospy.Publisher("/RobotStateHIGH", Bool, queue_size=10)
    pubLow = rospy.Publisher("/RobotStateLOW", Bool, queue_size=10)

    # Up State           
    Q1 = [0.4626082427567004, -1.2761348714520147, 2.1142787275481716, -2.3824494248586867, -1.5718565567909994, 0.4296091809361914]
    # Beginning, in the bottom
    QS = [0.462589432317289, -1.132630214538132, 2.1500719960940238, -2.5617281563838707, -1.5718763355557828, 0.4295914251085716]
    # Top state
    QF = [0.462589432317289, -1.2893383490286854, 2.1095255858115234, -2.3644778620158537, -1.5718763355557828, 0.4295914251085716]

    r=rospy.Rate(1)
    v = Nodo()
