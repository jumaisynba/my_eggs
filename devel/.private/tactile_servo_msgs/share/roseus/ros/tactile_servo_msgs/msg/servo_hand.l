;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::servo_hand)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'servo_hand (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::SERVO_HAND")
  (make-package "TACTILE_SERVO_MSGS::SERVO_HAND"))

(in-package "ROS")
;;//! \htmlinclude servo_hand.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::servo_hand
  :super ros::object
  :slots (_header _desired_orientation _actual_orientation _error_orientation _hand_orientation _obj_real_orientation ))

(defmethod tactile_servo_msgs::servo_hand
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:desired_orientation __desired_orientation) 0.0)
    ((:actual_orientation __actual_orientation) 0.0)
    ((:error_orientation __error_orientation) 0.0)
    ((:hand_orientation __hand_orientation) 0.0)
    ((:obj_real_orientation __obj_real_orientation) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _desired_orientation (float __desired_orientation))
   (setq _actual_orientation (float __actual_orientation))
   (setq _error_orientation (float __error_orientation))
   (setq _hand_orientation (float __hand_orientation))
   (setq _obj_real_orientation (float __obj_real_orientation))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:desired_orientation
   (&optional __desired_orientation)
   (if __desired_orientation (setq _desired_orientation __desired_orientation)) _desired_orientation)
  (:actual_orientation
   (&optional __actual_orientation)
   (if __actual_orientation (setq _actual_orientation __actual_orientation)) _actual_orientation)
  (:error_orientation
   (&optional __error_orientation)
   (if __error_orientation (setq _error_orientation __error_orientation)) _error_orientation)
  (:hand_orientation
   (&optional __hand_orientation)
   (if __hand_orientation (setq _hand_orientation __hand_orientation)) _hand_orientation)
  (:obj_real_orientation
   (&optional __obj_real_orientation)
   (if __obj_real_orientation (setq _obj_real_orientation __obj_real_orientation)) _obj_real_orientation)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _desired_orientation
    8
    ;; float64 _actual_orientation
    8
    ;; float64 _error_orientation
    8
    ;; float64 _hand_orientation
    8
    ;; float64 _obj_real_orientation
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64 _desired_orientation
       (sys::poke _desired_orientation (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _actual_orientation
       (sys::poke _actual_orientation (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _error_orientation
       (sys::poke _error_orientation (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _hand_orientation
       (sys::poke _hand_orientation (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _obj_real_orientation
       (sys::poke _obj_real_orientation (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64 _desired_orientation
     (setq _desired_orientation (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _actual_orientation
     (setq _actual_orientation (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _error_orientation
     (setq _error_orientation (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _hand_orientation
     (setq _hand_orientation (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _obj_real_orientation
     (setq _obj_real_orientation (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::servo_hand :md5sum-) "f82b6c4144eb7bb105c70c012b82576a")
(setf (get tactile_servo_msgs::servo_hand :datatype-) "tactile_servo_msgs/servo_hand")
(setf (get tactile_servo_msgs::servo_hand :definition-)
      "Header header
float64 desired_orientation
float64 actual_orientation
float64 error_orientation
float64 hand_orientation
float64 obj_real_orientation

================================================================================
MSG: std_msgs/Header
# Standard metadata for higher-level stamped data types.
# This is generally used to communicate timestamped data 
# in a particular coordinate frame.
# 
# sequence ID: consecutively increasing ID 
uint32 seq
#Two-integer timestamp that is expressed as:
# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
# time-handling sugar is provided by the client library
time stamp
#Frame this data is associated with
string frame_id

")



(provide :tactile_servo_msgs/servo_hand "f82b6c4144eb7bb105c70c012b82576a")


