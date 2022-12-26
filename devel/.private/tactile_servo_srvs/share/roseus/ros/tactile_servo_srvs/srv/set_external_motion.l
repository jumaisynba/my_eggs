;; Auto-generated. Do not edit!


(when (boundp 'tactile_servo_srvs::set_external_motion)
  (if (not (find-package "TACTILE_SERVO_SRVS"))
    (make-package "TACTILE_SERVO_SRVS"))
  (shadow 'set_external_motion (find-package "TACTILE_SERVO_SRVS")))
(unless (find-package "TACTILE_SERVO_SRVS::SET_EXTERNAL_MOTION")
  (make-package "TACTILE_SERVO_SRVS::SET_EXTERNAL_MOTION"))
(unless (find-package "TACTILE_SERVO_SRVS::SET_EXTERNAL_MOTIONREQUEST")
  (make-package "TACTILE_SERVO_SRVS::SET_EXTERNAL_MOTIONREQUEST"))
(unless (find-package "TACTILE_SERVO_SRVS::SET_EXTERNAL_MOTIONRESPONSE")
  (make-package "TACTILE_SERVO_SRVS::SET_EXTERNAL_MOTIONRESPONSE"))

(in-package "ROS")





(defclass tactile_servo_srvs::set_external_motionRequest
  :super ros::object
  :slots (_delta_x _delta_y _delta_z _delta_wx _delta_wy _delta_wz ))

(defmethod tactile_servo_srvs::set_external_motionRequest
  (:init
   (&key
    ((:delta_x __delta_x) 0.0)
    ((:delta_y __delta_y) 0.0)
    ((:delta_z __delta_z) 0.0)
    ((:delta_wx __delta_wx) 0.0)
    ((:delta_wy __delta_wy) 0.0)
    ((:delta_wz __delta_wz) 0.0)
    )
   (send-super :init)
   (setq _delta_x (float __delta_x))
   (setq _delta_y (float __delta_y))
   (setq _delta_z (float __delta_z))
   (setq _delta_wx (float __delta_wx))
   (setq _delta_wy (float __delta_wy))
   (setq _delta_wz (float __delta_wz))
   self)
  (:delta_x
   (&optional __delta_x)
   (if __delta_x (setq _delta_x __delta_x)) _delta_x)
  (:delta_y
   (&optional __delta_y)
   (if __delta_y (setq _delta_y __delta_y)) _delta_y)
  (:delta_z
   (&optional __delta_z)
   (if __delta_z (setq _delta_z __delta_z)) _delta_z)
  (:delta_wx
   (&optional __delta_wx)
   (if __delta_wx (setq _delta_wx __delta_wx)) _delta_wx)
  (:delta_wy
   (&optional __delta_wy)
   (if __delta_wy (setq _delta_wy __delta_wy)) _delta_wy)
  (:delta_wz
   (&optional __delta_wz)
   (if __delta_wz (setq _delta_wz __delta_wz)) _delta_wz)
  (:serialization-length
   ()
   (+
    ;; float64 _delta_x
    8
    ;; float64 _delta_y
    8
    ;; float64 _delta_z
    8
    ;; float64 _delta_wx
    8
    ;; float64 _delta_wy
    8
    ;; float64 _delta_wz
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float64 _delta_x
       (sys::poke _delta_x (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _delta_y
       (sys::poke _delta_y (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _delta_z
       (sys::poke _delta_z (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _delta_wx
       (sys::poke _delta_wx (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _delta_wy
       (sys::poke _delta_wy (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; float64 _delta_wz
       (sys::poke _delta_wz (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float64 _delta_x
     (setq _delta_x (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _delta_y
     (setq _delta_y (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _delta_z
     (setq _delta_z (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _delta_wx
     (setq _delta_wx (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _delta_wy
     (setq _delta_wy (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; float64 _delta_wz
     (setq _delta_wz (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;;
   self)
  )

(defclass tactile_servo_srvs::set_external_motionResponse
  :super ros::object
  :slots (_success ))

(defmethod tactile_servo_srvs::set_external_motionResponse
  (:init
   (&key
    ((:success __success) 0)
    )
   (send-super :init)
   (setq _success (round __success))
   self)
  (:success
   (&optional __success)
   (if __success (setq _success __success)) _success)
  (:serialization-length
   ()
   (+
    ;; int64 _success
    8
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; int64 _success
#+(or :alpha :irix6 :x86_64)
       (progn (sys::poke _success (send s :buffer) (send s :count) :long) (incf (stream-count s) 8))
#-(or :alpha :irix6 :x86_64)
       (cond ((and (class _success) (= (length (_success . bv)) 2)) ;; bignum
              (write-long (ash (elt (_success . bv) 0) 0) s)
              (write-long (ash (elt (_success . bv) 1) -1) s))
             ((and (class _success) (= (length (_success . bv)) 1)) ;; big1
              (write-long (elt (_success . bv) 0) s)
              (write-long (if (>= _success 0) 0 #xffffffff) s))
             (t                                         ;; integer
              (write-long _success s)(write-long (if (>= _success 0) 0 #xffffffff) s)))
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; int64 _success
#+(or :alpha :irix6 :x86_64)
      (setf _success (prog1 (sys::peek buf ptr- :long) (incf ptr- 8)))
#-(or :alpha :irix6 :x86_64)
      (setf _success (let ((b0 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4)))
                  (b1 (prog1 (sys::peek buf ptr- :integer) (incf ptr- 4))))
              (cond ((= b1 -1) b0)
                     ((and (= b1  0)
                           (<= lisp::most-negative-fixnum b0 lisp::most-positive-fixnum))
                      b0)
                    ((= b1  0) (make-instance bignum :size 1 :bv (integer-vector b0)))
                    (t (make-instance bignum :size 2 :bv (integer-vector b0 (ash b1 1)))))))
   ;;
   self)
  )

(defclass tactile_servo_srvs::set_external_motion
  :super ros::object
  :slots ())

(setf (get tactile_servo_srvs::set_external_motion :md5sum-) "5c15389ffcd541f6f1a1a5287c03261c")
(setf (get tactile_servo_srvs::set_external_motion :datatype-) "tactile_servo_srvs/set_external_motion")
(setf (get tactile_servo_srvs::set_external_motion :request) tactile_servo_srvs::set_external_motionRequest)
(setf (get tactile_servo_srvs::set_external_motion :response) tactile_servo_srvs::set_external_motionResponse)

(defmethod tactile_servo_srvs::set_external_motionRequest
  (:response () (instance tactile_servo_srvs::set_external_motionResponse :init)))

(setf (get tactile_servo_srvs::set_external_motionRequest :md5sum-) "5c15389ffcd541f6f1a1a5287c03261c")
(setf (get tactile_servo_srvs::set_external_motionRequest :datatype-) "tactile_servo_srvs/set_external_motionRequest")
(setf (get tactile_servo_srvs::set_external_motionRequest :definition-)
      "float64 delta_x
float64 delta_y
float64 delta_z
float64 delta_wx
float64 delta_wy
float64 delta_wz
---

int64 success
")

(setf (get tactile_servo_srvs::set_external_motionResponse :md5sum-) "5c15389ffcd541f6f1a1a5287c03261c")
(setf (get tactile_servo_srvs::set_external_motionResponse :datatype-) "tactile_servo_srvs/set_external_motionResponse")
(setf (get tactile_servo_srvs::set_external_motionResponse :definition-)
      "float64 delta_x
float64 delta_y
float64 delta_z
float64 delta_wx
float64 delta_wy
float64 delta_wz
---

int64 success
")



(provide :tactile_servo_srvs/set_external_motion "5c15389ffcd541f6f1a1a5287c03261c")


