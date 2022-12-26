;; Auto-generated. Do not edit!


(when (boundp 'schunk_ezn64::fastStop)
  (if (not (find-package "SCHUNK_EZN64"))
    (make-package "SCHUNK_EZN64"))
  (shadow 'fastStop (find-package "SCHUNK_EZN64")))
(unless (find-package "SCHUNK_EZN64::FASTSTOP")
  (make-package "SCHUNK_EZN64::FASTSTOP"))
(unless (find-package "SCHUNK_EZN64::FASTSTOPREQUEST")
  (make-package "SCHUNK_EZN64::FASTSTOPREQUEST"))
(unless (find-package "SCHUNK_EZN64::FASTSTOPRESPONSE")
  (make-package "SCHUNK_EZN64::FASTSTOPRESPONSE"))

(in-package "ROS")





(defclass schunk_ezn64::fastStopRequest
  :super ros::object
  :slots ())

(defmethod schunk_ezn64::fastStopRequest
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

(defclass schunk_ezn64::fastStopResponse
  :super ros::object
  :slots ())

(defmethod schunk_ezn64::fastStopResponse
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

(defclass schunk_ezn64::fastStop
  :super ros::object
  :slots ())

(setf (get schunk_ezn64::fastStop :md5sum-) "d41d8cd98f00b204e9800998ecf8427e")
(setf (get schunk_ezn64::fastStop :datatype-) "schunk_ezn64/fastStop")
(setf (get schunk_ezn64::fastStop :request) schunk_ezn64::fastStopRequest)
(setf (get schunk_ezn64::fastStop :response) schunk_ezn64::fastStopResponse)

(defmethod schunk_ezn64::fastStopRequest
  (:response () (instance schunk_ezn64::fastStopResponse :init)))

(setf (get schunk_ezn64::fastStopRequest :md5sum-) "d41d8cd98f00b204e9800998ecf8427e")
(setf (get schunk_ezn64::fastStopRequest :datatype-) "schunk_ezn64/fastStopRequest")
(setf (get schunk_ezn64::fastStopRequest :definition-)
      "---


")

(setf (get schunk_ezn64::fastStopResponse :md5sum-) "d41d8cd98f00b204e9800998ecf8427e")
(setf (get schunk_ezn64::fastStopResponse :datatype-) "schunk_ezn64/fastStopResponse")
(setf (get schunk_ezn64::fastStopResponse :definition-)
      "---


")



(provide :schunk_ezn64/fastStop "d41d8cd98f00b204e9800998ecf8427e")


