;; Auto-generated. Do not edit!


(when (boundp 'schunk_ezn64::reference)
  (if (not (find-package "SCHUNK_EZN64"))
    (make-package "SCHUNK_EZN64"))
  (shadow 'reference (find-package "SCHUNK_EZN64")))
(unless (find-package "SCHUNK_EZN64::REFERENCE")
  (make-package "SCHUNK_EZN64::REFERENCE"))
(unless (find-package "SCHUNK_EZN64::REFERENCEREQUEST")
  (make-package "SCHUNK_EZN64::REFERENCEREQUEST"))
(unless (find-package "SCHUNK_EZN64::REFERENCERESPONSE")
  (make-package "SCHUNK_EZN64::REFERENCERESPONSE"))

(in-package "ROS")





(defclass schunk_ezn64::referenceRequest
  :super ros::object
  :slots ())

(defmethod schunk_ezn64::referenceRequest
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

(defclass schunk_ezn64::referenceResponse
  :super ros::object
  :slots ())

(defmethod schunk_ezn64::referenceResponse
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

(defclass schunk_ezn64::reference
  :super ros::object
  :slots ())

(setf (get schunk_ezn64::reference :md5sum-) "d41d8cd98f00b204e9800998ecf8427e")
(setf (get schunk_ezn64::reference :datatype-) "schunk_ezn64/reference")
(setf (get schunk_ezn64::reference :request) schunk_ezn64::referenceRequest)
(setf (get schunk_ezn64::reference :response) schunk_ezn64::referenceResponse)

(defmethod schunk_ezn64::referenceRequest
  (:response () (instance schunk_ezn64::referenceResponse :init)))

(setf (get schunk_ezn64::referenceRequest :md5sum-) "d41d8cd98f00b204e9800998ecf8427e")
(setf (get schunk_ezn64::referenceRequest :datatype-) "schunk_ezn64/referenceRequest")
(setf (get schunk_ezn64::referenceRequest :definition-)
      "---


")

(setf (get schunk_ezn64::referenceResponse :md5sum-) "d41d8cd98f00b204e9800998ecf8427e")
(setf (get schunk_ezn64::referenceResponse :datatype-) "schunk_ezn64/referenceResponse")
(setf (get schunk_ezn64::referenceResponse :definition-)
      "---


")



(provide :schunk_ezn64/reference "d41d8cd98f00b204e9800998ecf8427e")


