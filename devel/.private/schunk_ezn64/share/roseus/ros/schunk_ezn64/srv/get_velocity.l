;; Auto-generated. Do not edit!


(when (boundp 'schunk_ezn64::get_velocity)
  (if (not (find-package "SCHUNK_EZN64"))
    (make-package "SCHUNK_EZN64"))
  (shadow 'get_velocity (find-package "SCHUNK_EZN64")))
(unless (find-package "SCHUNK_EZN64::GET_VELOCITY")
  (make-package "SCHUNK_EZN64::GET_VELOCITY"))
(unless (find-package "SCHUNK_EZN64::GET_VELOCITYREQUEST")
  (make-package "SCHUNK_EZN64::GET_VELOCITYREQUEST"))
(unless (find-package "SCHUNK_EZN64::GET_VELOCITYRESPONSE")
  (make-package "SCHUNK_EZN64::GET_VELOCITYRESPONSE"))

(in-package "ROS")





(defclass schunk_ezn64::get_velocityRequest
  :super ros::object
  :slots ())

(defmethod schunk_ezn64::get_velocityRequest
  (:init
   (&key
    )
   (send-super :init)
   self)
  (:serialization-length
   ()
   (+
    0
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;;
   self)
  )

(defclass schunk_ezn64::get_velocityResponse
  :super ros::object
  :slots (_actual_velocity ))

(defmethod schunk_ezn64::get_velocityResponse
  (:init
   (&key
    ((:actual_velocity __actual_velocity) 0.0)
    )
   (send-super :init)
   (setq _actual_velocity (float __actual_velocity))
   self)
  (:actual_velocity
   (&optional __actual_velocity)
   (if __actual_velocity (setq _actual_velocity __actual_velocity)) _actual_velocity)
  (:serialization-length
   ()
   (+
    ;; float32 _actual_velocity
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float32 _actual_velocity
       (sys::poke _actual_velocity (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float32 _actual_velocity
     (setq _actual_velocity (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(defclass schunk_ezn64::get_velocity
  :super ros::object
  :slots ())

(setf (get schunk_ezn64::get_velocity :md5sum-) "4372144f5734356a08e3014ad0d9d0cf")
(setf (get schunk_ezn64::get_velocity :datatype-) "schunk_ezn64/get_velocity")
(setf (get schunk_ezn64::get_velocity :request) schunk_ezn64::get_velocityRequest)
(setf (get schunk_ezn64::get_velocity :response) schunk_ezn64::get_velocityResponse)

(defmethod schunk_ezn64::get_velocityRequest
  (:response () (instance schunk_ezn64::get_velocityResponse :init)))

(setf (get schunk_ezn64::get_velocityRequest :md5sum-) "4372144f5734356a08e3014ad0d9d0cf")
(setf (get schunk_ezn64::get_velocityRequest :datatype-) "schunk_ezn64/get_velocityRequest")
(setf (get schunk_ezn64::get_velocityRequest :definition-)
      "---
float32 actual_velocity

")

(setf (get schunk_ezn64::get_velocityResponse :md5sum-) "4372144f5734356a08e3014ad0d9d0cf")
(setf (get schunk_ezn64::get_velocityResponse :datatype-) "schunk_ezn64/get_velocityResponse")
(setf (get schunk_ezn64::get_velocityResponse :definition-)
      "---
float32 actual_velocity

")



(provide :schunk_ezn64/get_velocity "4372144f5734356a08e3014ad0d9d0cf")


