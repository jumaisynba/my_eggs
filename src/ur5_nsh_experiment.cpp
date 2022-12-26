#include <ros/ros.h>
#include <tf/transform_broadcaster.h> //header for TransformBroadcaster object
#include <tf/transform_listener.h>
#include <std_msgs/Float64.h>
#include <std_msgs/Bool.h>
#include "ros/time.h"
#include <time.h>
#include "tactile_servo_msgs/ContsFeats.h"
#include "tactile_servo_msgs/OneContFeats.h"

#include <geometry_msgs/TwistStamped.h>
#include <geometry_msgs/TwistStamped.h>
#include "geometry_msgs/WrenchStamped.h"
#include <trajectory_msgs/JointTrajectory.h>
#include <sensor_msgs/JointState.h>
#include "ur5_nsh_experiment.h"


//Initial variables
double Z_TEMP;
double Y_TEMP;
double X_TEMP;
double Z_INIT;
double Y_INIT;
double X_INIT;
double Z_NOW;
double Z_DOWN;
double Y_NOW;
double X_NOW;
double Z_TARGET; // Target position for Z-coordinate of end-effector
bool up_button_pressed=false;
bool down_button_pressed=false;


PoseShow::PoseShow()
{
	is_transform_tool0_ = false;
  	not_first_time = true;
}

PoseShow::~PoseShow(){}


URutil::URutil()
{
  	is_new_msg_ = false;
	
	
  	pub_velocities = n.advertise<geometry_msgs::Twist>("/desired_Vx_Vy_Vz", 100);

  	pub_point = n.advertise<geometry_msgs::PointStamped>("/topic_point", 100);

  	pub_mode = n.advertise<std_msgs::Float64>("/topic_mode", 100);

  	pub_state = n.advertise<std_msgs::Float64>("/topic_state", 100);

  	pub_angleZ = n.advertise<std_msgs::Float64>("/topic_angleZ", 100);


  	fb_feats_sub = n.subscribe("/fb_feats", 1,  &URutil::cb_fb_feats_sub,this);

	//Here wweeee subscribe to the states of the DualSense controller 



  	is_init_exper_ = false;
  	is_at_home_ = false;
  	boollet_ = false;
  	couner_ = 0;
  	recieved_joint_state_ = false;
  	trjp_.velocities.resize(6);
  	trj_.points.push_back(trjp_);
  	trj_.points.push_back(trjp_);

//   	ROS_INFO("initializing joint names");
	trj_.joint_names.push_back("shoulder_pan_joint");
	trj_.joint_names.push_back("shoulder_lift_joint");
	trj_.joint_names.push_back("elbow_joint");
	trj_.joint_names.push_back("wrist_1_joint");
	trj_.joint_names.push_back("wrist_2_joint");
	trj_.joint_names.push_back("wrist_3_joint");

}
URutil::~URutil(){}

void URutil::cb_fb_feats_sub(const tactile_servo_msgs::ContsFeatsConstPtr& msg_){
    if (msg_->control_features.size() == 1){
    	is_in_contact_ur_ = msg_->control_features[0].is_contact;
        pixels_in_contact_ur_ = msg_->control_features[0].num_pixels_contact;
        highest_force_cell_ur_ = msg_->control_features[0].highest_force_cell;
        real_total_force_ur_ = msg_->control_features[0].real_total_force;

	is_new_msg_ = true;
    }
}

void URutil::send_velocity(geometry_msgs::Twist in_vel)
{
  	in_vel_.angular = in_vel.angular;
  	in_vel_.linear = in_vel.linear;
  	pub_velocities.publish(in_vel_);

}




void PoseShow::pose_init_create(){
	if (is_transform_tool0_== false)
	{
		listener.waitForTransform("tool0", ros::Time(0), "world",ros::Time(0), "world", ros::Duration(3));
		try
		{
			listener.lookupTransform("world", "tool0", ros::Time(0), stransform);
			is_transform_tool0_ = true;
		}
		catch (tf::TransformException &ex)
		{
			ROS_ERROR("%s", ex.what());
		}

		init_position = stransform.getOrigin();
	  	X_now_test_.header.frame_id = stransform.frame_id_.c_str();
	  	X_now_test_.pose.position.x = init_position[0];
	  	X_now_test_.pose.position.y = init_position[1];
	  	X_now_test_.pose.position.z = init_position[2];

	  	Z_INIT = init_position[2];
	  	X_INIT = init_position[0];
	  	Y_INIT = init_position[1];

	  	Z_TEMP = init_position[2];
	  	X_TEMP = init_position[0];
	  	Y_TEMP = init_position[1];
	  	not_first_time = false;
  	}
  	tf::Quaternion q_init_pose = stransform.getRotation();
  	geometry_msgs::Quaternion quat;
  	quat.w = q_init_pose.w();
  	quat.w = q_init_pose.x();
  	quat.w = q_init_pose.y();
  	quat.w = q_init_pose.z();
  	X_now_test_.pose.orientation = quat;
}


void PoseShow::pose_now()
{
  /*
  The listener's buffer is literally empty immediately after creating tf listener,
  therefore it is good practice to wait some time after the listener has been created,
  so that the buffer can fill up
  */
	listener_pose_now.waitForTransform("tool0", ros::Time(0), "world",ros::Time(0), "world", ros::Duration(3));
	try
	{
    //we request (query) the listener for a specific transformation
		listener_pose_now.lookupTransform("world", "tool0", ros::Time(0), nowtransform);
	}
	catch (tf::TransformException &ex)
	{
		ROS_ERROR("%s", ex.what());
	}
	Z_NOW = nowtransform.getOrigin().getZ(); // get Z position of tool0 relative to base frame
	X_NOW = nowtransform.getOrigin().getX(); // get X postion of tool0 realtive to world (base frame)
	Y_NOW = nowtransform.getOrigin().getY(); // get Y postion of tool0 realtive to world (base frame)
  	//global_msg.z = Z_NOW;
}

//------_____________CAllllllllllBACK IS HERE

void downCallback(const std_msgs::Bool& down)
{
	down_button_pressed=down.data;
}
void upCallback(const std_msgs::Bool& up)
{
	up_button_pressed=up.data;
}



// MAIN PROGRAM STARTS:
int main(int argc, char** argv)

{
	ROS_INFO("pub_poses_exper");
	ros::Time::init();


	geometry_msgs::Twist in_velocityzero;
	in_velocityzero.linear.x = 0;
	in_velocityzero.linear.y = 0;
	in_velocityzero.linear.z = 0.0;
	in_velocityzero.angular.x = 0;
	in_velocityzero.angular.y = 0;
	in_velocityzero.angular.z = 0;

	geometry_msgs::Twist in_velocitydown_fast;
	in_velocitydown_fast.linear.x = 0;
	in_velocitydown_fast.linear.y = 0;
	in_velocitydown_fast.linear.z = -0.01;
	in_velocitydown_fast.angular.x = 0;
	in_velocitydown_fast.angular.y = 0;
	in_velocitydown_fast.angular.z = 0;
	geometry_msgs::Twist in_velocitydown_slow;
	in_velocitydown_slow.linear.x = 0;
	in_velocitydown_slow.linear.y = 0;
	in_velocitydown_slow.linear.z = -0.01;
	in_velocitydown_slow.angular.x = 0;
	in_velocitydown_slow.angular.y = 0;
	in_velocitydown_slow.angular.z = 0;
	geometry_msgs::Twist in_velocityup_fast;
	in_velocityup_fast.linear.x = 0;
	in_velocityup_fast.linear.y = 0;
	in_velocityup_fast.linear.z = 0.01;
	in_velocityup_fast.angular.x = 0;
	in_velocityup_fast.angular.y = 0;
	in_velocityup_fast.angular.z = 0;


	ros::init(argc, argv, "init_before_any_exploration_node");
  	ros::NodeHandle nh; //NodeHandle is the main access point to communications with the ROS system


	ros::Subscriber sub_up = nh.subscribe("/buttonUp", 1 ,upCallback);
	ros::Subscriber sub_down = nh.subscribe("/buttonDown", 1 ,downCallback);



	ros::Rate loop_rate(125); // previously 125, 140
	ROS_INFO("pub_poses_exper");

	PoseShow PoseShow_test;
	URutil Experiment;
	ros::spinOnce();
	PoseShow_test.pose_init_create();
    ros::spinOnce();
	PoseShow_test.pose_now(); // getting X,Y,Z coordinates of end-effector relative to base frame
  	// stop for some time and send the values
  	ros::Time start_time = ros::Time::now();
  	ros::Duration timeout(0.2);

  	while((ros::ok()) && (ros::Time::now() - start_time < timeout)) {
		ROS_INFO("Z_NOW before experiment: %f", Z_NOW); //send the values of Z-coordinate of end-effector relative to base frame
 	}

  	ROS_INFO("Starting...");	
	while( (ros::ok()))
	{
		PoseShow_test.pose_now();

		if (!up_button_pressed && down_button_pressed){
			Experiment.send_velocity(in_velocitydown_slow);
			ROS_INFO("Going DOWN");
		}else if (up_button_pressed && !down_button_pressed){
			Experiment.send_velocity(in_velocityup_fast);
			ROS_INFO("Going UP");
		}else{
			Experiment.send_velocity(in_velocityzero);
			ROS_INFO("NOT GOING Anywhere");
		}
		
		
		ros::spinOnce();
		loop_rate.sleep();
	}
	Experiment.send_velocity(in_velocityzero);
	ROS_INFO("Game Over!");
	return 0;
	// add some comment
}
