;; Auto-generated. Do not edit!


(when (boundp 'schunk_ezn64::stop)
  (if (not (find-package "SCHUNK_EZN64"))
    (make-package "SCHUNK_EZN64"))
  (shadow 'stop (find-package "SCHUNK_EZN64")))
(unless (find-package "SCHUNK_EZN64::STOP")
  (make-package "SCHUNK_EZN64::STOP"))
(unless (find-package "SCHUNK_EZN64::STOPREQUEST")
  (make-package "SCHUNK_EZN64::STOPREQUEST"))
(unless (find-package "SCHUNK_EZN64::STOPRESPONSE")
  (make-package "SCHUNK_EZN64::STOPRESPONSE"))

(in-package "ROS")





(defclass schunk_ezn64::stopRequest
  :super ros::object
  :slots ())

(defmethod schunk_ezn64::stopRequest
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

(defclass schunk_ezn64::stopResponse
  :super ros::object
  :slots (_stop_result ))

(defmethod schunk_ezn64::stopResponse
  (:init
   (&key
    ((:stop_result __stop_result) 0.0)
    )
   (send-super :init)
   (setq _stop_result (float __stop_result))
   self)
  (:stop_result
   (&optional __stop_result)
   (if __stop_result (setq _stop_result __stop_result)) _stop_result)
  (:serialization-length
   ()
   (+
    ;; float32 _stop_result
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float32 _stop_result
       (sys::poke _stop_result (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float32 _stop_result
     (setq _stop_result (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(defclass schunk_ezn64::stop
  :super ros::object
  :slots ())

(setf (get schunk_ezn64::stop :md5sum-) "1dc3c304d8e1ef4b9d7103ce1e3c990a")
(setf (get schunk_ezn64::stop :datatype-) "schunk_ezn64/stop")
(setf (get schunk_ezn64::stop :request) schunk_ezn64::stopRequest)
(setf (get schunk_ezn64::stop :response) schunk_ezn64::stopResponse)

(defmethod schunk_ezn64::stopRequest
  (:response () (instance schunk_ezn64::stopResponse :init)))

(setf (get schunk_ezn64::stopRequest :md5sum-) "1dc3c304d8e1ef4b9d7103ce1e3c990a")
(setf (get schunk_ezn64::stopRequest :datatype-) "schunk_ezn64/stopRequest")
(setf (get schunk_ezn64::stopRequest :definition-)
      "---
float32 stop_result

")

(setf (get schunk_ezn64::stopResponse :md5sum-) "1dc3c304d8e1ef4b9d7103ce1e3c990a")
(setf (get schunk_ezn64::stopResponse :datatype-) "schunk_ezn64/stopResponse")
(setf (get schunk_ezn64::stopResponse :definition-)
      "---
float32 stop_result

")



(provide :schunk_ezn64/stop "1dc3c304d8e1ef4b9d7103ce1e3c990a")


