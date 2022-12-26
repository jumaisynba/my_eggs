#include <ros/ros.h>
#include <ezn64_usb_control.h>
#include <schunk_ezn64/set_position.h>
#include <std_msgs/Float32MultiArray.h>
#include <std_msgs/Float32.h>

int  main(int argc, char *argv[])
{
	ros::init(argc, argv, "listener1");
	ros::NodeHandle nh;

	ros::Publisher pub = nh.advertise<std_msgs::Float32MultiArray>("setData", 1);
	ros::Publisher pubV = nh.advertise<std_msgs::Float32>("setVel",1);
	ros::Rate loop_rate(500);

	std_msgs::Float32MultiArray grip;

	std_msgs::Float32 velCmd;
	grip.data.resize(2);

	while(ros::ok()){
		
		grip.data[0] = 10;
		grip.data[1] = 10;	
		velCmd.data = 0; 
		pub.publish(grip);

		pubV.publish(velCmd);
		
		ros::spinOnce();
		loop_rate.sleep();
	}
	return 0;
}
