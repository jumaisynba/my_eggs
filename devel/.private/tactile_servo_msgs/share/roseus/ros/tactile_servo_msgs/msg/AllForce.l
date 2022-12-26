;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::AllForce)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'AllForce (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::ALLFORCE")
  (make-package "TACTILE_SERVO_MSGS::ALLFORCE"))

(in-package "ROS")
;;//! \htmlinclude AllForce.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::AllForce
  :super ros::object
  :slots (_header _real _desired _weiss ))

(defmethod tactile_servo_msgs::AllForce
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:real __real) 0.0)
    ((:desired __desired) 0.0)
    ((:weiss __weiss) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _real (float __real))
   (setq _desired (float __desired))
   (setq _weiss (float __weiss))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:real
   (&optional __real)
   (if __real (setq _real __real)) _real)
  (:desired
   (&optional __desired)
   (if __desired (setq _desired __desired)) _desired)
  (:weiss
   (&optional __weiss)
   (if __weiss (setq _weiss __weiss)) _weiss)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _real
    8
    ;; float64 _desired
    8
    ;; float64 _weiss
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64 _real
       (sys::poke _real (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _desired
       (sys::poke _desired (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _weiss
       (sys::poke _weiss (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64 _real
     (setq _real (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _desired
     (setq _desired (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _weiss
     (setq _weiss (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::AllForce :md5sum-) "ef1fc02563dc2cf330e05b255f81bf87")
(setf (get tactile_servo_msgs::AllForce :datatype-) "tactile_servo_msgs/AllForce")
(setf (get tactile_servo_msgs::AllForce :definition-)
      "Header header
float64 real
float64 desired
float64 weiss

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



(provide :tactile_servo_msgs/AllForce "ef1fc02563dc2cf330e05b255f81bf87")


