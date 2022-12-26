;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_srvs::pose_arm_init)
  (if (not (find-package "TACTILE_SERVO_SRVS"))
    (make-package "TACTILE_SERVO_SRVS"))
  (shadow 'pose_arm_init (find-package "TACTILE_SERVO_SRVS")))
(unless (find-package "TACTILE_SERVO_SRVS::POSE_ARM_INIT")
  (make-package "TACTILE_SERVO_SRVS::POSE_ARM_INIT"))
(unless (find-package "TACTILE_SERVO_SRVS::POSE_ARM_INITREQUEST")
  (make-package "TACTILE_SERVO_SRVS::POSE_ARM_INITREQUEST"))
(unless (find-package "TACTILE_SERVO_SRVS::POSE_ARM_INITRESPONSE")
  (make-package "TACTILE_SERVO_SRVS::POSE_ARM_INITRESPONSE"))

(in-package "ROS")





(defclass tactile_servo_srvs::pose_arm_initRequest
  :super ros::object
  :slots (_init ))

(defmethod tactile_servo_srvs::pose_arm_initRequest
  (:init
   (&key
    ((:init __init) nil)
    )
   (send-super :init)
   (setq _init __init)
   self)
  (:init
   (&optional __init)
   (if __init (setq _init __init)) _init)
  (:serialization-length
   ()
   (+
    ;; bool _init
    1
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; bool _init
       (if _init (write-byte -1 s) (write-byte 0 s))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; bool _init
     (setq _init (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;;
   self)
  )

(defclass tactile_servo_srvs::pose_arm_initResponse
  :super ros::object
  :slots (_initialized ))

(defmethod tactile_servo_srvs::pose_arm_initResponse
  (:init
   (&key
    ((:initialized __initialized) nil)
    )
   (send-super :init)
   (setq _initialized __initialized)
   self)
  (:initialized
   (&optional __initialized)
   (if __initialized (setq _initialized __initialized)) _initialized)
  (:serialization-length
   ()
   (+
    ;; bool _initialized
    1
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; bool _initialized
       (if _initialized (write-byte -1 s) (write-byte 0 s))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; bool _initialized
     (setq _initialized (not (= 0 (sys::peek buf ptr- :char)))) (incf ptr- 1)
   ;;
   self)
  )

(defclass tactile_servo_srvs::pose_arm_init
  :super ros::object
  :slots ())

(setf (get tactile_servo_srvs::pose_arm_init :md5sum-) "46241584f8d15752cfaafef65fb4333e")
(setf (get tactile_servo_srvs::pose_arm_init :datatype-) "tactile_servo_srvs/pose_arm_init")
(setf (get tactile_servo_srvs::pose_arm_init :request) tactile_servo_srvs::pose_arm_initRequest)
(setf (get tactile_servo_srvs::pose_arm_init :response) tactile_servo_srvs::pose_arm_initResponse)

(defmethod tactile_servo_srvs::pose_arm_initRequest
  (:response () (instance tactile_servo_srvs::pose_arm_initResponse :init)))

(setf (get tactile_servo_srvs::pose_arm_initRequest :md5sum-) "46241584f8d15752cfaafef65fb4333e")
(setf (get tactile_servo_srvs::pose_arm_initRequest :datatype-) "tactile_servo_srvs/pose_arm_initRequest")
(setf (get tactile_servo_srvs::pose_arm_initRequest :definition-)
      "bool init

---

bool initialized

")

(setf (get tactile_servo_srvs::pose_arm_initResponse :md5sum-) "46241584f8d15752cfaafef65fb4333e")
(setf (get tactile_servo_srvs::pose_arm_initResponse :datatype-) "tactile_servo_srvs/pose_arm_initResponse")
(setf (get tactile_servo_srvs::pose_arm_initResponse :definition-)
      "bool init

---

bool initialized

")



(provide :tactile_servo_srvs/pose_arm_init "46241584f8d15752cfaafef65fb4333e")


