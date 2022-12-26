;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_msgs::tunePidjoint)
  (if (not (find-package "TACTILE_SERVO_MSGS"))
    (make-package "TACTILE_SERVO_MSGS"))
  (shadow 'tunePidjoint (find-package "TACTILE_SERVO_MSGS")))
(unless (find-package "TACTILE_SERVO_MSGS::TUNEPIDJOINT")
  (make-package "TACTILE_SERVO_MSGS::TUNEPIDJOINT"))

(in-package "ROS")
;;//! \htmlinclude tunePidjoint.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass tactile_servo_msgs::tunePidjoint
  :super ros::object
  :slots (_header _err_in _err_out _dt _val_now _val_new ))

(defmethod tactile_servo_msgs::tunePidjoint
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:err_in __err_in) 0.0)
    ((:err_out __err_out) 0.0)
    ((:dt __dt) 0.0)
    ((:val_now __val_now) 0.0)
    ((:val_new __val_new) 0.0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _err_in (float __err_in))
   (setq _err_out (float __err_out))
   (setq _dt (float __dt))
   (setq _val_now (float __val_now))
   (setq _val_new (float __val_new))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:err_in
   (&optional __err_in)
   (if __err_in (setq _err_in __err_in)) _err_in)
  (:err_out
   (&optional __err_out)
   (if __err_out (setq _err_out __err_out)) _err_out)
  (:dt
   (&optional __dt)
   (if __dt (setq _dt __dt)) _dt)
  (:val_now
   (&optional __val_now)
   (if __val_now (setq _val_now __val_now)) _val_now)
  (:val_new
   (&optional __val_new)
   (if __val_new (setq _val_new __val_new)) _val_new)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _err_in
    8
    ;; float64 _err_out
    8
    ;; float64 _dt
    8
    ;; float64 _val_now
    8
    ;; float64 _val_new
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64 _err_in
       (sys::poke _err_in (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _err_out
       (sys::poke _err_out (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _dt
       (sys::poke _dt (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _val_now
       (sys::poke _val_now (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _val_new
       (sys::poke _val_new (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64 _err_in
     (setq _err_in (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _err_out
     (setq _err_out (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _dt
     (setq _dt (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _val_now
     (setq _val_now (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _val_new
     (setq _val_new (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(setf (get tactile_servo_msgs::tunePidjoint :md5sum-) "a172d7f24dc9bff9c3c39d757afa54e8")
(setf (get tactile_servo_msgs::tunePidjoint :datatype-) "tactile_servo_msgs/tunePidjoint")
(setf (get tactile_servo_msgs::tunePidjoint :definition-)
      "Header header
float64 err_in
float64 err_out
float64 dt
float64 val_now
float64 val_new
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



(provide :tactile_servo_msgs/tunePidjoint "a172d7f24dc9bff9c3c39d757afa54e8")


