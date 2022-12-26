;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::COCtoZMP)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'COCtoZMP (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::COCTOZMP")
  (make-package "TACTILE_SERVO_MSGS::COCTOZMP"))

(in-package "ROS")
;;//! \htmlinclude COCtoZMP.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::COCtoZMP
  :super ros::object
  :slots (_header _num_pixels_contact _coc_to_zmp_smooth ))

(defmethod tactile_servo_msgs::COCtoZMP
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:num_pixels_contact __num_pixels_contact) 0)
    ((:coc_to_zmp_smooth __coc_to_zmp_smooth) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _num_pixels_contact (round __num_pixels_contact))
   (setq _coc_to_zmp_smooth (float __coc_to_zmp_smooth))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:num_pixels_contact
   (&optional __num_pixels_contact)
   (if __num_pixels_contact (setq _num_pixels_contact __num_pixels_contact)) _num_pixels_contact)
  (:coc_to_zmp_smooth
   (&optional __coc_to_zmp_smooth)
   (if __coc_to_zmp_smooth (setq _coc_to_zmp_smooth __coc_to_zmp_smooth)) _coc_to_zmp_smooth)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; int32 _num_pixels_contact
    4
    ;; float64 _coc_to_zmp_smooth
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; int32 _num_pixels_contact
       (write-long _num_pixels_contact s)
     ;; float64 _coc_to_zmp_smooth
       (sys::poke _coc_to_zmp_smooth (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; int32 _num_pixels_contact
     (setq _num_pixels_contact (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; float64 _coc_to_zmp_smooth
     (setq _coc_to_zmp_smooth (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::COCtoZMP :md5sum-) "0d817ec84cd3c8d3b73bcf52114de648")
(setf (get tactile_servo_msgs::COCtoZMP :datatype-) "tactile_servo_msgs/COCtoZMP")
(setf (get tactile_servo_msgs::COCtoZMP :definition-)
      "Header header
int32 num_pixels_contact
float64 coc_to_zmp_smooth

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



(provide :tactile_servo_msgs/COCtoZMP "0d817ec84cd3c8d3b73bcf52114de648")


