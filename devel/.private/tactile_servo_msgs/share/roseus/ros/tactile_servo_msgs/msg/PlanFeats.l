;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::PlanFeats)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'PlanFeats (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::PLANFEATS")
  (make-package "TACTILE_SERVO_MSGS::PLANFEATS"))

(in-package "ROS")
;;//! \htmlinclude PlanFeats.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::PlanFeats
  :super ros::object
  :slots (_header _TypeContact _numContours _isCorner _contactArea ))

(defmethod tactile_servo_msgs::PlanFeats
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:TypeContact __TypeContact) "")
    ((:numContours __numContours) 0)
    ((:isCorner __isCorner) nil)
    ((:contactArea __contactArea) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _TypeContact (string __TypeContact))
   (setq _numContours (round __numContours))
   (setq _isCorner __isCorner)
   (setq _contactArea (float __contactArea))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:TypeContact
   (&optional __TypeContact)
   (if __TypeContact (setq _TypeContact __TypeContact)) _TypeContact)
  (:numContours
   (&optional __numContours)
   (if __numContours (setq _numContours __numContours)) _numContours)
  (:isCorner
   (&optional __isCorner)
   (if __isCorner (setq _isCorner __isCorner)) _isCorner)
  (:contactArea
   (&optional __contactArea)
   (if __contactArea (setq _contactArea __contactArea)) _contactArea)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; string _TypeContact
    4 (length _TypeContact)
    ;; int32 _numContours
    4
    ;; bool _isCorner
    1
    ;; float64 _contactArea
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; string _TypeContact
       (write-long (length _TypeContact) s) (princ _TypeContact s)
     ;; int32 _numContours
       (write-long _numContours s)
     ;; bool _isCorner
       (if _isCorner (write-byte -1 s) (write-byte 0 s))
     ;; float64 _contactArea
       (sys::poke _contactArea (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; string _TypeContact
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _TypeContact (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;; int32 _numContours
     (setq _numContours (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; bool _isCorner
     (setq _isCorner (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;; float64 _contactArea
     (setq _contactArea (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::PlanFeats :md5sum-) "f6ba0ac762b3ea36a8d1c92ae7084acf")
(setf (get tactile_servo_msgs::PlanFeats :datatype-) "tactile_servo_msgs/PlanFeats")
(setf (get tactile_servo_msgs::PlanFeats :definition-)
      "Header header
string TypeContact
int32 numContours
bool isCorner  
float64 contactArea

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



(provide :tactile_servo_msgs/PlanFeats "f6ba0ac762b3ea36a8d1c92ae7084acf")


