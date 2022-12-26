;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::touch_sensor_read)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'touch_sensor_read (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::TOUCH_SENSOR_READ")
  (make-package "TACTILE_SERVO_MSGS::TOUCH_SENSOR_READ"))

(in-package "ROS")
;;//! \htmlinclude touch_sensor_read.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::touch_sensor_read
  :super ros::object
  :slots (_header _a0 _a1 _a2 _a3 _a4 _a5 _a6 _a7 _a8 _a9 _a10 _a11 _a12 _a13 _a14 _a15 ))

(defmethod tactile_servo_msgs::touch_sensor_read
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:a0 __a0) 0.0)
    ((:a1 __a1) 0.0)
    ((:a2 __a2) 0.0)
    ((:a3 __a3) 0.0)
    ((:a4 __a4) 0.0)
    ((:a5 __a5) 0.0)
    ((:a6 __a6) 0.0)
    ((:a7 __a7) 0.0)
    ((:a8 __a8) 0.0)
    ((:a9 __a9) 0.0)
    ((:a10 __a10) 0.0)
    ((:a11 __a11) 0.0)
    ((:a12 __a12) 0.0)
    ((:a13 __a13) 0.0)
    ((:a14 __a14) 0.0)
    ((:a15 __a15) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _a0 (float __a0))
   (setq _a1 (float __a1))
   (setq _a2 (float __a2))
   (setq _a3 (float __a3))
   (setq _a4 (float __a4))
   (setq _a5 (float __a5))
   (setq _a6 (float __a6))
   (setq _a7 (float __a7))
   (setq _a8 (float __a8))
   (setq _a9 (float __a9))
   (setq _a10 (float __a10))
   (setq _a11 (float __a11))
   (setq _a12 (float __a12))
   (setq _a13 (float __a13))
   (setq _a14 (float __a14))
   (setq _a15 (float __a15))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:a0
   (&optional __a0)
   (if __a0 (setq _a0 __a0)) _a0)
  (:a1
   (&optional __a1)
   (if __a1 (setq _a1 __a1)) _a1)
  (:a2
   (&optional __a2)
   (if __a2 (setq _a2 __a2)) _a2)
  (:a3
   (&optional __a3)
   (if __a3 (setq _a3 __a3)) _a3)
  (:a4
   (&optional __a4)
   (if __a4 (setq _a4 __a4)) _a4)
  (:a5
   (&optional __a5)
   (if __a5 (setq _a5 __a5)) _a5)
  (:a6
   (&optional __a6)
   (if __a6 (setq _a6 __a6)) _a6)
  (:a7
   (&optional __a7)
   (if __a7 (setq _a7 __a7)) _a7)
  (:a8
   (&optional __a8)
   (if __a8 (setq _a8 __a8)) _a8)
  (:a9
   (&optional __a9)
   (if __a9 (setq _a9 __a9)) _a9)
  (:a10
   (&optional __a10)
   (if __a10 (setq _a10 __a10)) _a10)
  (:a11
   (&optional __a11)
   (if __a11 (setq _a11 __a11)) _a11)
  (:a12
   (&optional __a12)
   (if __a12 (setq _a12 __a12)) _a12)
  (:a13
   (&optional __a13)
   (if __a13 (setq _a13 __a13)) _a13)
  (:a14
   (&optional __a14)
   (if __a14 (setq _a14 __a14)) _a14)
  (:a15
   (&optional __a15)
   (if __a15 (setq _a15 __a15)) _a15)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float32 _a0
    4
    ;; float32 _a1
    4
    ;; float32 _a2
    4
    ;; float32 _a3
    4
    ;; float32 _a4
    4
    ;; float32 _a5
    4
    ;; float32 _a6
    4
    ;; float32 _a7
    4
    ;; float32 _a8
    4
    ;; float32 _a9
    4
    ;; float32 _a10
    4
    ;; float32 _a11
    4
    ;; float32 _a12
    4
    ;; float32 _a13
    4
    ;; float32 _a14
    4
    ;; float32 _a15
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float32 _a0
       (sys::poke _a0 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a1
       (sys::poke _a1 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a2
       (sys::poke _a2 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a3
       (sys::poke _a3 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a4
       (sys::poke _a4 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a5
       (sys::poke _a5 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a6
       (sys::poke _a6 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a7
       (sys::poke _a7 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a8
       (sys::poke _a8 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a9
       (sys::poke _a9 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a10
       (sys::poke _a10 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a11
       (sys::poke _a11 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a12
       (sys::poke _a12 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a13
       (sys::poke _a13 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a14
       (sys::poke _a14 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _a15
       (sys::poke _a15 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float32 _a0
     (setq _a0 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a1
     (setq _a1 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a2
     (setq _a2 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a3
     (setq _a3 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a4
     (setq _a4 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a5
     (setq _a5 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a6
     (setq _a6 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a7
     (setq _a7 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a8
     (setq _a8 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a9
     (setq _a9 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a10
     (setq _a10 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a11
     (setq _a11 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a12
     (setq _a12 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a13
     (setq _a13 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a14
     (setq _a14 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _a15
     (setq _a15 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::touch_sensor_read :md5sum-) "4df8b4ab4ecaf13d960bd76650e851a5")
(setf (get tactile_servo_msgs::touch_sensor_read :datatype-) "tactile_servo_msgs/touch_sensor_read")
(setf (get tactile_servo_msgs::touch_sensor_read :definition-)
      "# Custome Analog input message
Header header
float32 a0
float32 a1
float32 a2
float32 a3
float32 a4
float32 a5
float32 a6
float32 a7
float32 a8
float32 a9
float32 a10
float32 a11
float32 a12
float32 a13
float32 a14
float32 a15
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



(provide :tactile_servo_msgs/touch_sensor_read "4df8b4ab4ecaf13d960bd76650e851a5")


