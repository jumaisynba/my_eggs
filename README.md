#EGG HANDLING

#Run a controller for the Schunk Gripper 
roslaunch schunk_ezn64 ezn64_usb_control.launch

#Opening port for the gripper (last nums might be different or all nums, check the terminal window)

	sudo chmod 666 /dev/bus/usb/001/013

#Using rosservice Reference the gripper

	rosservice call /schunk_ezn64/reference

#[Optional] If errors acknowledge them 

	rosservice call /schunk_ezn64/acknowledge_error 

#Laucn node to recieve the values from the Arduino and Force Sensor (FSR)

rosrun rosserial_python serial_node.py _port:=/dev/ttyACM0 _baud:=9600


#Launch Server to handle values recieved from the DualSense Controller and publish them to the topics 

python3 /home/dimash/Dimash/Server_DualSenseControl.py


#Launch Client that is getting values of the DualSense and recieves values for Force Feedback from FSR

sudo python3 /home/dimash/Dimash/Client_DualSenseControl.py


#UR10 modern driver: improving usability as well as enabling compatibility of ros_control


roslaunch ur_modern_driver ur10_bringup.launch robot_ip:=192.168.1.103


#Run your python script to bring the robot to the specified location 

rosrun calibrate_rgb_sensor_rustam move_robot_back_rustam.py


#How to change initial position and orientation of UR10

#manually move the robot via UR5 teach pendant
#check rostopic echo /joint_states
#copy the position to move_robot_back.py

#Launch Bar Graph for FSR vizualizations

python /home/dimash/Dimash/BarFSR.py

python /home/dimash/Dimash/Data_Recorder.py 




-----------------------------------------------------
#moveit: planning capability

roslaunch ur10_moveit_config ur10_moveit_planning_execution.launch

#source your environment

source ~/catkin_ws/devel/setup.bash 




#RUN a node to control the robot
#Listener for the UR5

rosrun move_ur_sim desired_velocities_node

#Main programs for experiments

rosrun calibrate_rgb_sensor_rustam ur5_nsh_experiment


