;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::ErrProp)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'ErrProp (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::ERRPROP")
  (make-package "TACTILE_SERVO_MSGS::ERRPROP"))

(in-package "ROS")
;;//! \htmlinclude ErrProp.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::ErrProp
  :super ros::object
  :slots (_header _centerpressure_x _centerpressure_y _contactForce _centerContact_x _centerContact_y _contactOrientation _zmp_x _zmp_y ))

(defmethod tactile_servo_msgs::ErrProp
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:centerpressure_x __centerpressure_x) 0.0)
    ((:centerpressure_y __centerpressure_y) 0.0)
    ((:contactForce __contactForce) 0.0)
    ((:centerContact_x __centerContact_x) 0.0)
    ((:centerContact_y __centerContact_y) 0.0)
    ((:contactOrientation __contactOrientation) 0.0)
    ((:zmp_x __zmp_x) 0.0)
    ((:zmp_y __zmp_y) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _centerpressure_x (float __centerpressure_x))
   (setq _centerpressure_y (float __centerpressure_y))
   (setq _contactForce (float __contactForce))
   (setq _centerContact_x (float __centerContact_x))
   (setq _centerContact_y (float __centerContact_y))
   (setq _contactOrientation (float __contactOrientation))
   (setq _zmp_x (float __zmp_x))
   (setq _zmp_y (float __zmp_y))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:centerpressure_x
   (&optional __centerpressure_x)
   (if __centerpressure_x (setq _centerpressure_x __centerpressure_x)) _centerpressure_x)
  (:centerpressure_y
   (&optional __centerpressure_y)
   (if __centerpressure_y (setq _centerpressure_y __centerpressure_y)) _centerpressure_y)
  (:contactForce
   (&optional __contactForce)
   (if __contactForce (setq _contactForce __contactForce)) _contactForce)
  (:centerContact_x
   (&optional __centerContact_x)
   (if __centerContact_x (setq _centerContact_x __centerContact_x)) _centerContact_x)
  (:centerContact_y
   (&optional __centerContact_y)
   (if __centerContact_y (setq _centerContact_y __centerContact_y)) _centerContact_y)
  (:contactOrientation
   (&optional __contactOrientation)
   (if __contactOrientation (setq _contactOrientation __contactOrientation)) _contactOrientation)
  (:zmp_x
   (&optional __zmp_x)
   (if __zmp_x (setq _zmp_x __zmp_x)) _zmp_x)
  (:zmp_y
   (&optional __zmp_y)
   (if __zmp_y (setq _zmp_y __zmp_y)) _zmp_y)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _centerpressure_x
    8
    ;; float64 _centerpressure_y
    8
    ;; float64 _contactForce
    8
    ;; float64 _centerContact_x
    8
    ;; float64 _centerContact_y
    8
    ;; float64 _contactOrientation
    8
    ;; float64 _zmp_x
    8
    ;; float64 _zmp_y
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64 _centerpressure_x
       (sys::poke _centerpressure_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _centerpressure_y
       (sys::poke _centerpressure_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _contactForce
       (sys::poke _contactForce (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _centerContact_x
       (sys::poke _centerContact_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _centerContact_y
       (sys::poke _centerContact_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _contactOrientation
       (sys::poke _contactOrientation (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_x
       (sys::poke _zmp_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _zmp_y
       (sys::poke _zmp_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64 _centerpressure_x
     (setq _centerpressure_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _centerpressure_y
     (setq _centerpressure_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _contactForce
     (setq _contactForce (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _centerContact_x
     (setq _centerContact_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _centerContact_y
     (setq _centerContact_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _contactOrientation
     (setq _contactOrientation (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_x
     (setq _zmp_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _zmp_y
     (setq _zmp_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::ErrProp :md5sum-) "4e6507bf7c9706a62d8c8389f7cfcdbc")
(setf (get tactile_servo_msgs::ErrProp :datatype-) "tactile_servo_msgs/ErrProp")
(setf (get tactile_servo_msgs::ErrProp :definition-)
      "Header header
float64 centerpressure_x
float64 centerpressure_y
float64 contactForce
float64 centerContact_x
float64 centerContact_y
float64 contactOrientation
float64 zmp_x
float64 zmp_y

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



(provide :tactile_servo_msgs/ErrProp "4e6507bf7c9706a62d8c8389f7cfcdbc")


