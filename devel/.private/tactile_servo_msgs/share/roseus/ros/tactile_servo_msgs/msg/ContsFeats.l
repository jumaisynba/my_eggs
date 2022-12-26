;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::ContsFeats)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'ContsFeats (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::CONTSFEATS")
  (make-package "TACTILE_SERVO_MSGS::CONTSFEATS"))

(in-package "ROS")
;;//! \htmlinclude ContsFeats.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::ContsFeats
  :super ros::object
  :slots (_header _control_features ))

(defmethod tactile_servo_msgs::ContsFeats
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:control_features __control_features) (let (r) (dotimes (i 0) (push (instance tactile_servo_msgs::OneContFeats :init) r)) r))
    )
   (send-super :init)
   (setq _header __header)
   (setq _control_features __control_features)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:control_features
   (&rest __control_features)
   (if (keywordp (car __control_features))
       (send* _control_features __control_features)
     (progn
       (if __control_features (setq _control_features (car __control_features)))
       _control_features)))
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; tactile_servo_msgs/OneContFeats[] _control_features
    (apply #'+ (send-all _control_features :serialization-length)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; tactile_servo_msgs/OneContFeats[] _control_features
     (write-long (length _control_features) s)
     (dolist (elem _control_features)
       (send elem :serialize s)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; tactile_servo_msgs/OneContFeats[] _control_features
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _control_features (let (r) (dotimes (i n) (push (instance tactile_servo_msgs::OneContFeats :init) r)) r))
     (dolist (elem- _control_features)
     (send elem- :deserialize buf ptr-) (incf ptr- (send elem- :serialization-length))
     ))
   ;;
   self)
  )

(setf (get tactile_servo_msgs::ContsFeats :md5sum-) "44c38b3dcf679267b4ec9aa49b84b60d")
(setf (get tactile_servo_msgs::ContsFeats :datatype-) "tactile_servo_msgs/ContsFeats")
(setf (get tactile_servo_msgs::ContsFeats :definition-)
      "Header header                                   # stamp
tactile_servo_msgs/OneContFeats[] control_features           # array of contacts

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
MSG: tactile_servo_msgs/OneContFeats
float64 centerpressure_x
float64 centerpressure_y
float64 contactForce
float64 centerContact_x
float64 centerContact_y
float64 contactOrientation
float64 zmp_x
float64 zmp_y
bool is_contact
int32 num_pixels_contact
float64 highest_force_cell
float64 real_total_force


")



(provide :tactile_servo_msgs/ContsFeats "44c38b3dcf679267b4ec9aa49b84b60d")


