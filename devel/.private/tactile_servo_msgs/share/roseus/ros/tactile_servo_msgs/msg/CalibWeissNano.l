;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::CalibWeissNano)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'CalibWeissNano (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::CALIBWEISSNANO")
  (make-package "TACTILE_SERVO_MSGS::CALIBWEISSNANO"))

(in-package "ROS")
;;//! \htmlinclude CalibWeissNano.msg.html
(if (not (find-package "GEOMETRY_MSGS"))
  (ros::roseus-add-msgs "geometry_msgs"))
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::CalibWeissNano
  :super ros::object
  :slots (_header _contactForce _zmp_x _zmp_y _cop_x _cop_y _orient_z _coc_x _coc_y _nano ))

(defmethod tactile_servo_msgs::CalibWeissNano
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:contactForce __contactForce) 0.0)
    ((:zmp_x __zmp_x) 0.0)
    ((:zmp_y __zmp_y) 0.0)
    ((:cop_x __cop_x) 0.0)
    ((:cop_y __cop_y) 0.0)
    ((:orient_z __orient_z) 0.0)
    ((:coc_x __coc_x) 0.0)
    ((:coc_y __coc_y) 0.0)
    ((:nano __nano) (instance geometry_msgs::Wrench :init))
    )
   (send-super :init)
   (setq _header __header)
   (setq _contactForce (float __contactForce))
   (setq _zmp_x (float __zmp_x))
   (setq _zmp_y (float __zmp_y))
   (setq _cop_x (float __cop_x))
   (setq _cop_y (float __cop_y))
   (setq _orient_z (float __orient_z))
   (setq _coc_x (float __coc_x))
   (setq _coc_y (float __coc_y))
   (setq _nano __nano)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:contactForce
   (&optional __contactForce)
   (if __contactForce (setq _contactForce __contactForce)) _contactForce)
  (:zmp_x
   (&optional __zmp_x)
   (if __zmp_x (setq _zmp_x __zmp_x)) _zmp_x)
  (:zmp_y
   (&optional __zmp_y)
   (if __zmp_y (setq _zmp_y __zmp_y)) _zmp_y)
  (:cop_x
   (&optional __cop_x)
   (if __cop_x (setq _cop_x __cop_x)) _cop_x)
  (:cop_y
   (&optional __cop_y)
   (if __cop_y (setq _cop_y __cop_y)) _cop_y)
  (:orient_z
   (&optional __orient_z)
   (if __orient_z (setq _orient_z __orient_z)) _orient_z)
  (:coc_x
   (&optional __coc_x)
   (if __coc_x (setq _coc_x __coc_x)) _coc_x)
  (:coc_y
   (&optional __coc_y)
   (if __coc_y (setq _coc_y __coc_y)) _coc_y)
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
    ;; float64 _contactForce
    8
    ;; float64 _zmp_x
    8
    ;; float64 _zmp_y
    8
    ;; float64 _cop_x
    8
    ;; float64 _cop_y
    8
    ;; float64 _orient_z
    8
    ;; float64 _coc_x
    8
    ;; float64 _coc_y
    8
    ;; geometry_msgs/Wrench _nano
    (send _nano :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64 _contactForce
       (sys::poke _contactForce (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_x
       (sys::poke _zmp_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_y
       (sys::poke _zmp_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _cop_x
       (sys::poke _cop_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _cop_y
       (sys::poke _cop_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _orient_z
       (sys::poke _orient_z (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _coc_x
       (sys::poke _coc_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _coc_y
       (sys::poke _coc_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; geometry_msgs/Wrench _nano
       (send _nano :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64 _contactForce
     (setq _contactForce (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_x
     (setq _zmp_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_y
     (setq _zmp_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _cop_x
     (setq _cop_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _cop_y
     (setq _cop_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _orient_z
     (setq _orient_z (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _coc_x
     (setq _coc_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _coc_y
     (setq _coc_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; geometry_msgs/Wrench _nano
     (send _nano :deserialize buf ptr-) (incf ptr- (send _nano :serialization-length))
   ;;
   self)
  )

(setf (get tactile_servo_msgs::CalibWeissNano :md5sum-) "427d9e81487d12d71f0577b073eb48de")
(setf (get tactile_servo_msgs::CalibWeissNano :datatype-) "tactile_servo_msgs/CalibWeissNano")
(setf (get tactile_servo_msgs::CalibWeissNano :definition-)
      "Header header
float64 contactForce
float64 zmp_x
float64 zmp_y
float64 cop_x
float64 cop_y
float64 orient_z
float64 coc_x
float64 coc_y
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



(provide :tactile_servo_msgs/CalibWeissNano "427d9e81487d12d71f0577b073eb48de")


