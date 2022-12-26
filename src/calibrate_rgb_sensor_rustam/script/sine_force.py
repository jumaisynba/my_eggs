#!/usr/bin/env python
import math
import rospy
from std_msgs.msg import Float64

def mover():
    pub_sine_vel = rospy.Publisher('/sine_vel_command', Float64, queue_size=1)
    rospy.init_node('sine_vel_node')
    rate = rospy.Rate(1000)
    start_time = 0
    
    f = 0.2
    A = 0.003
    
    while not start_time:
        start_time = rospy.Time.now().to_sec()
    while not rospy.is_shutdown():
        elapsed = rospy.Time.now().to_sec() - start_time
        #print(elapsed)
        #sine force
        #pub_sineforce.publish(110 + math.sin(2*math.pi*0.25*elapsed)*(70))
        
        # trapezoid
        #ss = 0.006*math.sin(2*math.pi*f*elapsed)
        #if ss > 0.005:
	#  p = 0.005
	#else:
	#  p = 40
        #pub_sine_vel.publish(p)
        
        #sine force
        pub_sine_vel.publish(A*math.sin(2*math.pi*f*elapsed))

        #square
        #ss = math.sin(2*math.pi*0.05*elapsed);
        #if ss > 0:
        #  p = 2
	#else:
	#  p = 0.7
        #pub_sineforce.publish(p)
        
        rate.sleep()

if __name__ == '__main__':
    try:
        mover()
    except rospy.ROSInterruptException:
        pass
