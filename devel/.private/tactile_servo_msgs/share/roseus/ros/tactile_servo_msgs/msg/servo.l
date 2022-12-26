;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::servo)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'servo (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::SERVO")
  (make-package "TACTILE_SERVO_MSGS::SERVO"))

(in-package "ROS")
;;//! \htmlinclude servo.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::servo
  :super ros::object
  :slots (_header _desired_orientation _actual_orientation _desired_force _actual_force _desired_pressure _actual_pressure _desired_offset_x _actual_offset_x _desired_offset_y _actual_offset_y _actual_pressure2 ))

(defmethod tactile_servo_msgs::servo
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:desired_orientation __desired_orientation) 0.0)
    ((:actual_orientation __actual_orientation) 0.0)
    ((:desired_force __desired_force) 0.0)
    ((:actual_force __actual_force) 0.0)
    ((:desired_pressure __desired_pressure) 0.0)
    ((:actual_pressure __actual_pressure) 0.0)
    ((:desired_offset_x __desired_offset_x) 0.0)
    ((:actual_offset_x __actual_offset_x) 0.0)
    ((:desired_offset_y __desired_offset_y) 0.0)
    ((:actual_offset_y __actual_offset_y) 0.0)
    ((:actual_pressure2 __actual_pressure2) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _desired_orientation (float __desired_orientation))
   (setq _actual_orientation (float __actual_orientation))
   (setq _desired_force (float __desired_force))
   (setq _actual_force (float __actual_force))
   (setq _desired_pressure (float __desired_pressure))
   (setq _actual_pressure (float __actual_pressure))
   (setq _desired_offset_x (float __desired_offset_x))
   (setq _actual_offset_x (float __actual_offset_x))
   (setq _desired_offset_y (float __desired_offset_y))
   (setq _actual_offset_y (float __actual_offset_y))
   (setq _actual_pressure2 (float __actual_pressure2))
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
  (:desired_force
   (&optional __desired_force)
   (if __desired_force (setq _desired_force __desired_force)) _desired_force)
  (:actual_force
   (&optional __actual_force)
   (if __actual_force (setq _actual_force __actual_force)) _actual_force)
  (:desired_pressure
   (&optional __desired_pressure)
   (if __desired_pressure (setq _desired_pressure __desired_pressure)) _desired_pressure)
  (:actual_pressure
   (&optional __actual_pressure)
   (if __actual_pressure (setq _actual_pressure __actual_pressure)) _actual_pressure)
  (:desired_offset_x
   (&optional __desired_offset_x)
   (if __desired_offset_x (setq _desired_offset_x __desired_offset_x)) _desired_offset_x)
  (:actual_offset_x
   (&optional __actual_offset_x)
   (if __actual_offset_x (setq _actual_offset_x __actual_offset_x)) _actual_offset_x)
  (:desired_offset_y
   (&optional __desired_offset_y)
   (if __desired_offset_y (setq _desired_offset_y __desired_offset_y)) _desired_offset_y)
  (:actual_offset_y
   (&optional __actual_offset_y)
   (if __actual_offset_y (setq _actual_offset_y __actual_offset_y)) _actual_offset_y)
  (:actual_pressure2
   (&optional __actual_pressure2)
   (if __actual_pressure2 (setq _actual_pressure2 __actual_pressure2)) _actual_pressure2)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _desired_orientation
    8
    ;; float64 _actual_orientation
    8
    ;; float64 _desired_force
    8
    ;; float64 _actual_force
    8
    ;; float64 _desired_pressure
    8
    ;; float64 _actual_pressure
    8
    ;; float64 _desired_offset_x
    8
    ;; float64 _actual_offset_x
    8
    ;; float64 _desired_offset_y
    8
    ;; float64 _actual_offset_y
    8
    ;; float64 _actual_pressure2
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
     ;; float64 _desired_force
       (sys::poke _desired_force (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _actual_force
       (sys::poke _actual_force (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _desired_pressure
       (sys::poke _desired_pressure (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _actual_pressure
       (sys::poke _actual_pressure (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _desired_offset_x
       (sys::poke _desired_offset_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _actual_offset_x
       (sys::poke _actual_offset_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _desired_offset_y
       (sys::poke _desired_offset_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _actual_offset_y
       (sys::poke _actual_offset_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _actual_pressure2
       (sys::poke _actual_pressure2 (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
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
   ;; float64 _desired_force
     (setq _desired_force (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _actual_force
     (setq _actual_force (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _desired_pressure
     (setq _desired_pressure (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _actual_pressure
     (setq _actual_pressure (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _desired_offset_x
     (setq _desired_offset_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _actual_offset_x
     (setq _actual_offset_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _desired_offset_y
     (setq _desired_offset_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _actual_offset_y
     (setq _actual_offset_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _actual_pressure2
     (setq _actual_pressure2 (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::servo :md5sum-) "41a31713cf8f35c335c8794979f147d5")
(setf (get tactile_servo_msgs::servo :datatype-) "tactile_servo_msgs/servo")
(setf (get tactile_servo_msgs::servo :definition-)
      "Header header
float64 desired_orientation 
float64 actual_orientation
float64 desired_force 
float64 actual_force
float64 desired_pressure
float64 actual_pressure
float64 desired_offset_x
float64 actual_offset_x
float64 desired_offset_y
float64 actual_offset_y
float64 actual_pressure2

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



(provide :tactile_servo_msgs/servo "41a31713cf8f35c335c8794979f147d5")


