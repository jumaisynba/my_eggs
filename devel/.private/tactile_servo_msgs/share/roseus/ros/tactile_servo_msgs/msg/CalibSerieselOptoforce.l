;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::CalibSerieselOptoforce)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'CalibSerieselOptoforce (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::CALIBSERIESELOPTOFORCE")
  (make-package "TACTILE_SERVO_MSGS::CALIBSERIESELOPTOFORCE"))

(in-package "ROS")
;;//! \htmlinclude CalibSerieselOptoforce.msg.html
(if (not (find-package "GEOMETRY_MSGS"))
  (ros::roseus-add-msgs "geometry_msgs"))
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::CalibSerieselOptoforce
  :super ros::object
  :slots (_header _adc0 _adc1 _adc2 _adc3 _adc4 _adc5 _adc6 _adc7 _adc8 _adc9 _adc10 _adc11 _adc12 _adc13 _adc14 _adc15 _nano ))

(defmethod tactile_servo_msgs::CalibSerieselOptoforce
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:adc0 __adc0) 0)
    ((:adc1 __adc1) 0)
    ((:adc2 __adc2) 0)
    ((:adc3 __adc3) 0)
    ((:adc4 __adc4) 0)
    ((:adc5 __adc5) 0)
    ((:adc6 __adc6) 0)
    ((:adc7 __adc7) 0)
    ((:adc8 __adc8) 0)
    ((:adc9 __adc9) 0)
    ((:adc10 __adc10) 0)
    ((:adc11 __adc11) 0)
    ((:adc12 __adc12) 0)
    ((:adc13 __adc13) 0)
    ((:adc14 __adc14) 0)
    ((:adc15 __adc15) 0)
    ((:nano __nano) (instance geometry_msgs::Wrench :init))
    )
   (send-super :init)
   (setq _header __header)
   (setq _adc0 (round __adc0))
   (setq _adc1 (round __adc1))
   (setq _adc2 (round __adc2))
   (setq _adc3 (round __adc3))
   (setq _adc4 (round __adc4))
   (setq _adc5 (round __adc5))
   (setq _adc6 (round __adc6))
   (setq _adc7 (round __adc7))
   (setq _adc8 (round __adc8))
   (setq _adc9 (round __adc9))
   (setq _adc10 (round __adc10))
   (setq _adc11 (round __adc11))
   (setq _adc12 (round __adc12))
   (setq _adc13 (round __adc13))
   (setq _adc14 (round __adc14))
   (setq _adc15 (round __adc15))
   (setq _nano __nano)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:adc0
   (&optional __adc0)
   (if __adc0 (setq _adc0 __adc0)) _adc0)
  (:adc1
   (&optional __adc1)
   (if __adc1 (setq _adc1 __adc1)) _adc1)
  (:adc2
   (&optional __adc2)
   (if __adc2 (setq _adc2 __adc2)) _adc2)
  (:adc3
   (&optional __adc3)
   (if __adc3 (setq _adc3 __adc3)) _adc3)
  (:adc4
   (&optional __adc4)
   (if __adc4 (setq _adc4 __adc4)) _adc4)
  (:adc5
   (&optional __adc5)
   (if __adc5 (setq _adc5 __adc5)) _adc5)
  (:adc6
   (&optional __adc6)
   (if __adc6 (setq _adc6 __adc6)) _adc6)
  (:adc7
   (&optional __adc7)
   (if __adc7 (setq _adc7 __adc7)) _adc7)
  (:adc8
   (&optional __adc8)
   (if __adc8 (setq _adc8 __adc8)) _adc8)
  (:adc9
   (&optional __adc9)
   (if __adc9 (setq _adc9 __adc9)) _adc9)
  (:adc10
   (&optional __adc10)
   (if __adc10 (setq _adc10 __adc10)) _adc10)
  (:adc11
   (&optional __adc11)
   (if __adc11 (setq _adc11 __adc11)) _adc11)
  (:adc12
   (&optional __adc12)
   (if __adc12 (setq _adc12 __adc12)) _adc12)
  (:adc13
   (&optional __adc13)
   (if __adc13 (setq _adc13 __adc13)) _adc13)
  (:adc14
   (&optional __adc14)
   (if __adc14 (setq _adc14 __adc14)) _adc14)
  (:adc15
   (&optional __adc15)
   (if __adc15 (setq _adc15 __adc15)) _adc15)
  (:nano
   (&rest __nano)
   (if (keywordp (car __nano))
       (send* _nano __nano)
     (progn
       (if __nano (setq _nano (car __nano)))
       _nano)))
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; uint16 _adc0
    2
    ;; uint16 _adc1
    2
    ;; uint16 _adc2
    2
    ;; uint16 _adc3
    2
    ;; uint16 _adc4
    2
    ;; uint16 _adc5
    2
    ;; uint16 _adc6
    2
    ;; uint16 _adc7
    2
    ;; uint16 _adc8
    2
    ;; uint16 _adc9
    2
    ;; uint16 _adc10
    2
    ;; uint16 _adc11
    2
    ;; uint16 _adc12
    2
    ;; uint16 _adc13
    2
    ;; uint16 _adc14
    2
    ;; uint16 _adc15
    2
    ;; geometry_msgs/Wrench _nano
    (send _nano :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; uint16 _adc0
       (write-word _adc0 s)
     ;; uint16 _adc1
       (write-word _adc1 s)
     ;; uint16 _adc2
       (write-word _adc2 s)
     ;; uint16 _adc3
       (write-word _adc3 s)
     ;; uint16 _adc4
       (write-word _adc4 s)
     ;; uint16 _adc5
       (write-word _adc5 s)
     ;; uint16 _adc6
       (write-word _adc6 s)
     ;; uint16 _adc7
       (write-word _adc7 s)
     ;; uint16 _adc8
       (write-word _adc8 s)
     ;; uint16 _adc9
       (write-word _adc9 s)
     ;; uint16 _adc10
       (write-word _adc10 s)
     ;; uint16 _adc11
       (write-word _adc11 s)
     ;; uint16 _adc12
       (write-word _adc12 s)
     ;; uint16 _adc13
       (write-word _adc13 s)
     ;; uint16 _adc14
       (write-word _adc14 s)
     ;; uint16 _adc15
       (write-word _adc15 s)
     ;; geometry_msgs/Wrench _nano
       (send _nano :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; uint16 _adc0
     (setq _adc0 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc1
     (setq _adc1 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc2
     (setq _adc2 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc3
     (setq _adc3 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc4
     (setq _adc4 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc5
     (setq _adc5 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc6
     (setq _adc6 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc7
     (setq _adc7 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc8
     (setq _adc8 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc9
     (setq _adc9 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc10
     (setq _adc10 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc11
     (setq _adc11 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc12
     (setq _adc12 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc13
     (setq _adc13 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc14
     (setq _adc14 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint16 _adc15
     (setq _adc15 (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; geometry_msgs/Wrench _nano
     (send _nano :deserialize buf ptr-) (incf ptr- (send _nano :serialization-length))
   ;;
   self)
  )

(setf (get tactile_servo_msgs::CalibSerieselOptoforce :md5sum-) "89487ec7fb2ca7040c7708621b61dd21")
(setf (get tactile_servo_msgs::CalibSerieselOptoforce :datatype-) "tactile_servo_msgs/CalibSerieselOptoforce")
(setf (get tactile_servo_msgs::CalibSerieselOptoforce :definition-)
      "Header header
uint16 adc0
uint16 adc1
uint16 adc2
uint16 adc3
uint16 adc4
uint16 adc5
uint16 adc6
uint16 adc7
uint16 adc8
uint16 adc9
uint16 adc10
uint16 adc11
uint16 adc12
uint16 adc13
uint16 adc14
uint16 adc15
geometry_msgs/Wrench nano
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

================================================================================
MSG: geometry_msgs/Wrench
# This represents force in free space, separated into
# its linear and angular parts.
Vector3  force
Vector3  torque

================================================================================
MSG: geometry_msgs/Vector3
# This represents a vector in free space. 
# It is only meant to represent a direction. Therefore, it does not
# make sense to apply a translation to it (e.g., when applying a 
# generic rigid transformation to a Vector3, tf2 will only apply the
# rotation). If you want your data to be translatable too, use the
# geometry_msgs/Point message instead.

float64 x
float64 y
float64 z
")



(provide :tactile_servo_msgs/CalibSerieselOptoforce "89487ec7fb2ca7040c7708621b61dd21")


