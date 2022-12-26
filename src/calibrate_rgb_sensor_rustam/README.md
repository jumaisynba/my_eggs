NegativeStiffnessHoneycomb
UR5 modern driver: improving usability as well as enabling compatibility of ros_control


roslaunch ur_modern_driver ur10_bringup.launch robot_ip:=192.168.1.103

moveit: planning capability

roslaunch ur10_moveit_config ur10_moveit_planning_execution.launch

How to change initial position and orientation of UR5

manually move the robot via UR5 teach pendant
check rostopic echo /joint_states
copy the position to move_robot_back.py

    source your environment

source ~/rustamch/devel/setup.bash 

    Run your python script

rosrun calibrate_rgb_sensor_rustam move_robot_back_rustam.py


How to RUN experiment
Listener for the UR5

rosrun move_ur_sim desired_velocities_node

Main programs for experiments

rosrun calibrate_rgb_sensor_rustam ur5_nsh_experiment


