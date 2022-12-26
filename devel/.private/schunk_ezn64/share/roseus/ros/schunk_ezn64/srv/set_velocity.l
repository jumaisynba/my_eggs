;; Auto-generated. Do not edit!


(when (boundp 'schunk_ezn64::set_velocity)
  (if (not (find-package "SCHUNK_EZN64"))
    (make-package "SCHUNK_EZN64"))
  (shadow 'set_velocity (find-package "SCHUNK_EZN64")))
(unless (find-package "SCHUNK_EZN64::SET_VELOCITY")
  (make-package "SCHUNK_EZN64::SET_VELOCITY"))
(unless (find-package "SCHUNK_EZN64::SET_VELOCITYREQUEST")
  (make-package "SCHUNK_EZN64::SET_VELOCITYREQUEST"))
(unless (find-package "SCHUNK_EZN64::SET_VELOCITYRESPONSE")
  (make-package "SCHUNK_EZN64::SET_VELOCITYRESPONSE"))

(in-package "ROS")





(defclass schunk_ezn64::set_velocityRequest
  :super ros::object
  :slots (_goal_velocity ))

(defmethod schunk_ezn64::set_velocityRequest
  (:init
   (&key
    ((:goal_velocity __goal_velocity) 0.0)
    )
   (send-super :init)
   (setq _goal_velocity (float __goal_velocity))
   self)
  (:goal_velocity
   (&optional __goal_velocity)
   (if __goal_velocity (setq _goal_velocity __goal_velocity)) _goal_velocity)
  (:serialization-length
   ()
   (+
    ;; float32 _goal_velocity
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float32 _goal_velocity
       (sys::poke _goal_velocity (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float32 _goal_velocity
     (setq _goal_velocity (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(defclass schunk_ezn64::set_velocityResponse
  :super ros::object
  :slots (_goal_accepted ))

(defmethod schunk_ezn64::set_velocityResponse
  (:init
   (&key
    ((:goal_accepted __goal_accepted) nil)
    )
   (send-super :init)
   (setq _goal_accepted __goal_accepted)
   self)
  (:goal_accepted
   (&optional __goal_accepted)
   (if __goal_accepted (setq _goal_accepted __goal_accepted)) _goal_accepted)
  (:serialization-length
   ()
   (+
    ;; bool _goal_accepted
    1
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; bool _goal_accepted
       (if _goal_accepted (write-byte -1 s) (write-byte 0 s))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; bool _goal_accepted
     (setq _goal_accepted (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;;
   self)
  )

(defclass schunk_ezn64::set_velocity
  :super ros::object
  :slots ())

(setf (get schunk_ezn64::set_velocity :md5sum-) "8bcbe89faecc3b1502a1b95a8574cab4")
(setf (get schunk_ezn64::set_velocity :datatype-) "schunk_ezn64/set_velocity")
(setf (get schunk_ezn64::set_velocity :request) schunk_ezn64::set_velocityRequest)
(setf (get schunk_ezn64::set_velocity :response) schunk_ezn64::set_velocityResponse)

(defmethod schunk_ezn64::set_velocityRequest
  (:response () (instance schunk_ezn64::set_velocityResponse :init)))

(setf (get schunk_ezn64::set_velocityRequest :md5sum-) "8bcbe89faecc3b1502a1b95a8574cab4")
(setf (get schunk_ezn64::set_velocityRequest :datatype-) "schunk_ezn64/set_velocityRequest")
(setf (get schunk_ezn64::set_velocityRequest :definition-)
      "float32 goal_velocity
---
bool goal_accepted

")

(setf (get schunk_ezn64::set_velocityResponse :md5sum-) "8bcbe89faecc3b1502a1b95a8574cab4")
(setf (get schunk_ezn64::set_velocityResponse :datatype-) "schunk_ezn64/set_velocityResponse")
(setf (get schunk_ezn64::set_velocityResponse :definition-)
      "float32 goal_velocity
---
bool goal_accepted

")



(provide :schunk_ezn64/set_velocity "8bcbe89faecc3b1502a1b95a8574cab4")


